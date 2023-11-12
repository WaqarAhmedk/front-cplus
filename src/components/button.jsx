import { Button } from '@mui/material'
import React from 'react'
import '../App.css'

export default function CustomButton({ text, click, type }) {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

            <Button name={text} className='input-field' variant='contained' onClick={click}>
                {text}
            </Button>
        </div>
    )
}
