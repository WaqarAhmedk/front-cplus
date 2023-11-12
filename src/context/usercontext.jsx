import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import { axiosInstance } from '../axios';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const logIn = async (data) => {
        try {
            const res = await axiosInstance.post('/auth/login', data);
            console.log(res);
            if (res.data) {
                setUser(res.data.user.dataValues);

            }

            return res.status
        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
        }
    }
    const logOut = () => { }
    return <UserContext.Provider value={{ user, logIn, logOut }}>
        {
            children
        }
    </UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext);

    return context;
};