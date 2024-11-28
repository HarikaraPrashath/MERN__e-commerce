import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import CommonFrom from '../../components/common/form';
import { loginFormControls } from '../../config/index';
import { useDispatch } from 'react-redux';
import { useToast } from '@/hooks/use-toast';
import { loginUser } from '@/store/auth-slice/index';


const initialState = {
  email: '',
  password: '',
};

const Login = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const {toast} = useToast() 


  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data)=>{
      if(data?.payload.success){
        toast({
          title:data?.payload?.message,
        })
      }
      else{
        toast({
          title:data?.payload?.message,
          variant:"destructive"
        })
      }
    })
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Welcome to Account
      </h1>
      <p className="mt-2">
       Don't have an account
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/register"
        >
          Register
        </Link>
      </p>
    </div>
    <CommonFrom
      formControls={loginFormControls}
      buttonText={"Sign In"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  </div>
  )
}

export default Login
