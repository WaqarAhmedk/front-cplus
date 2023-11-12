import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from './components/button'
import CustomModal from './components/modal'
import EditProfile from './components/editprofile';
import { useUser } from './context/usercontext';

export default function Profile() {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const { user } = useUser();
    const closeModal = () => {
        setOpen(false)
    };
    const viewProfile = ({ type }) => {

        setType(<viewProfile />);
        setOpen(true);
    }

    const updateProfile = () => {
        setType(<EditProfile />);
        setOpen(true);
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <Box>
                <Typography>You Are Logged in{user?.name}</Typography>
                <Box>
                    <CustomButton text='View Profile' click={viewProfile} />
                    <CustomButton text='Update Profile' click={updateProfile} />
                </Box>
            </Box>

            <CustomModal open={open} close={closeModal} children={type
            } />
        </Box>
    )
}
