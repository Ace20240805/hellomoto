import React, { createContext, useState, ReactNode } from 'react';

interface UserContextType {
    count: number;
    setCount: (count: number) => void;
    user: UserProps | null;
    setUser: (user: UserProps | null) => void;
}

interface UserProps {
  compalid: string;
  username: string;
  nickname: string;
  photoUrl: string;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(929);
  const [user, setUser] = useState<UserProps | null>(null);
  return (
    <UserContext.Provider value={{ count, setCount,user,setUser }}>
      {children}
    </UserContext.Provider>
  );
};