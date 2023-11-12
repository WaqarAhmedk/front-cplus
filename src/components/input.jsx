import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import '../App.css'
export default function Input({ placeholder, refrence, label, type, value }) {
    return (
        <Box style={{
            marginTop: '10px',
            width: '100%'

        }}>

            <TextField
                inputRef={refrence}
                defaultValue={value}
                className='input-field'
                type={type}
                label={label}
                variant="outlined"
                placeholder={placeholder}
            />
        </Box>
    );
}
