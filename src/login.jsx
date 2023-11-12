import React, { useRef, useState } from 'react'
import Input from './components/input'
import { Box, Container } from '@mui/material';
import CustomButton from './components/button';
import { useUser } from './context/usercontext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()

    const { logIn } = useUser();


    const emailRef = useRef();
    const passwordRef = useRef();


    const submitForm = async () => {
        const formdata = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const res = await logIn(formdata);
        if (res === 200) {
            navigate('/user')

        }

    }






    return (
        <Box Box style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box>
                <Input type='email' label='Email' placeholder='Enter Email' refrence={emailRef} />
                <Input type='password' label='Password' placeholder='Enter Password' refrence={passwordRef} />
                <CustomButton text='Sign In' click={submitForm} />
            </Box>

        </Box>
    )
}
