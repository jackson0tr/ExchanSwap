import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import axiosApi from './axios';
import { toast } from 'react-hot-toast';

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  getProfile: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getProfile();
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosApi.post('/auth/login', { email, password });
      toast.success("Login Susccessful");
      setUser(response.data.data.user);
      localStorage.setItem('token', response.data.data.user.token);
    } catch (error:any) {
      if ("data" in error) {
        const errDate = error;
        toast.error(errDate.data.message);
      }
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axiosApi.post('/auth/register', { email, password });
      setUser(response.data.data.user);
      localStorage.setItem('token', response.data.data.user.token);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const getProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axiosApi.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.data);
      } else {
        console.error('No token found');
      }
    } catch (error) {
      console.error('Fetching profile failed', error);
    }
  };


  return (
    <AuthContext.Provider value={{ user, login, register, getProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
