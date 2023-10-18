// router.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Home from '../pages/post-login/home/home';
import Bite from '../pages/post-login/bite-section/bite';
import Foodcity from '../pages/post-login/foodcity-section/foodcity';

import Login from '../pages/pre-login/login';
import Register from '../pages/pre-login/register';
import ForgetPassword from '../pages/pre-login/forget-password';

export default function Router() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // You can replace this with your actual authentication logic.

  useEffect(() => {
    // Simulate authentication logic, e.g., by checking if a user is logged in.
    // Replace this with your actual authentication logic.
    const userIsLoggedIn = true;
    setIsLoggedIn(userIsLoggedIn);
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <AuthenticatedRoutes />
      ) : (
        <UnauthenticatedRoutes />
      )}
    </div>
  );

  function AuthenticatedRoutes() {
    return (
      <>
        <Home />
        <Bite />
        <Foodcity />
      </>
    );
  }

  function UnauthenticatedRoutes() {
    return (
      <>
        {router.pathname === '/login' ? (
          <Login />
        ) : router.pathname === '/register' ? (
          <Register />
        ) : (
          <ForgetPassword />
        )}
      </>
    );
  }
}
