'use client';
import React, { useEffect, ReactNode, useContext } from 'react';
import { AuthContext } from '../api/AuthContext'; 
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const {user}: any  = useContext(AuthContext); 
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/');
      toast.error("Please Login");
    }
  }, [user, router]);


  return <>{children}</>;
};

export default ProtectedRoute;
