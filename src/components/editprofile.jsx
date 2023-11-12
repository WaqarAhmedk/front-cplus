import { Box } from '@mui/material'
import React, { useRef } from 'react'
import CustomButton from './button'
import Input from './input'
import { useUser } from '../context/usercontext'

export default function EditProfile() {
    const { user } = useUser();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const Submit = () => {

    }
    return (
        <Box>
            <Input type='text' label='Name' placeholder='Enter Name' refrence={nameRef} value={user?.name} />
            <Input type='email' label='Email' placeholder='Enter Email' refrence={emailRef} value={user?.email} />
            <Input type='password' label='Password' placeholder='Enter Password' refrence={passwordRef} value={user?.password} />
            <Input type='file' />
            <CustomButton text='Submit' click={Submit} />
        </Box>
    )
}