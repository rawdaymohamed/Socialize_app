"use client"
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import authHelper from './utils/auth-helper';

const PrivateRoute = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {

  const { isAuthenticated } = authHelper;
  useEffect(() => {
    if (!isAuthenticated()) {
      redirect("/login")
    }
  }, [isAuthenticated]);

  return isAuthenticated() ? children : null;
};

export default PrivateRoute;
