import React, { useRef, useState } from 'react'
import Input from './components/input'
import { Box, Container } from '@mui/material';
import CustomButton from './components/button';
import { axiosInstance } from './axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {


    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();



    const Submit = (e) => {
        const formdata = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const res = axiosInstance.post('/auth/create', formdata);

            navigate('/')
            alert('account created')
        } catch (error) {
            console.log(error)

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
                <Input type='text' label='Name' placeholder='Enter Name' refrence={nameRef} />
                <Input type='email' label='Email' placeholder='Enter Email' refrence={emailRef} />
                <Input type='password' label='Password' placeholder='Enter Password' refrence={passwordRef} />
                <Input type='file' />
                <CustomButton text='Submit' click={Submit} />
            </Box>

        </Box>
    )
}
