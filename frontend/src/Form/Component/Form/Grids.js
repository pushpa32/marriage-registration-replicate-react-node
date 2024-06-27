import React from 'react'
import { Grid } from '@mui/material';

export const Grid3 = ({ children }) => {
    return (
        <Grid item xs={12} sm={12} md={3} sx={{}}>
            {children}
        </Grid>
    )
}

export const Grid4 = ({ children }) => {
    return (
        <Grid item xs={12} sm={12} md={4} sx={{}}>
            {children}
        </Grid>
    )
}

export const Grid8 = ({ children }) => {
    return (
        <Grid item xs={12} sm={12} md={8} sx={{}}>
            {children}
        </Grid>
    )
}

export const Grid12 = ({ children }) => {
    return (
        <Grid item xs={12} sm={12} md={12} sx={{}}>
            {children}
        </Grid>
    )
}

export const Grid6 = ({ children }) => {
    return (
        <Grid item xs={12} sm={12} md={6} sx={{}}>
            {children}
        </Grid>
    )
}