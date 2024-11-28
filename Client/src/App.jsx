  // App.jsx

  import { Route, Routes } from "react-router-dom";
  import AuthLayout from "./components/auth/AuthLayout";
  import Login from "./pages/auth/Login";
  import Register from "./pages/auth/Register";
  import Adminlayout from "./components/admin-view/Adminlayout";
  import Dashboard from "./pages/admin-view/dashboard";
  import Feature from "./pages/admin-view/features";
  import Product from "./pages/admin-view/products";
  import Order from "./pages/admin-view/orders";
  import ShoppingLayout from "./components/shopping-view/layout";
  import NotFoundPage from "./pages/notFoundPage";
  import Home from "./pages/shopping-view/home";
  import ListingPage from "./pages/shopping-view/listingPage";
  import CheckoutPage from "./pages/shopping-view/checkoutPage";
  import AccountPage from "./pages/shopping-view/accountPage";
  import CheckAuth from "./components/common/checkAuth";
  import UnAuthPage from "./pages/unAuth/index";
  import { useSelector, useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { checkAuth } from "./store/auth-slice/index";
  import { Skeleton } from "@/components/ui/skeleton"


  function App() {
    const { user, isAuthenticated , isLoading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(checkAuth());
    }, [dispatch]);

    if(isLoading) return<Skeleton className="w-[800] bg-black h-[600px]" />

    console.log(isLoading,user)

    return (
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route
            path="/admin"
            element={
              // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Adminlayout />
              // </CheckAuth>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Product />} />
            <Route path="feature" element={<Feature />} />
            <Route path="orders" element={<Order />} />
          </Route>

          <Route
            path="/shop"
            element={
              //  <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              // </CheckAuth>
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<ListingPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>

          <Route path="/unAuthPage" element={<UnAuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }

  export default App;
