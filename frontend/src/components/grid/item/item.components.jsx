import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'; 

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default Item