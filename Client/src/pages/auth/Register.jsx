import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonFrom from '../../components/common/form';
import { registerFormControls } from '../../config/index';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/auth-slice';
import { useToast } from '@/hooks/use-toast';


const initialState = {
  userName: '',
  email: '',
  password: '',
};

function Register() {
  const [formData, setFormData] = useState(initialState);
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const {toast} = useToast()


  function onSubmit(e) {
    e.preventDefault(); 
    dispatch(registerUser(formData)).then((data) => {
      navigate("/auth/login");
      console.log('Register response data:', data);  // Debug log
     
      if (data?.payload?.success) {
        
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message || 'Registration failed',
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonFrom
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Register;