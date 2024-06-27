import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const CardContainer = styled(Box)({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '14px',
    borderRadius: '15px',
    maxWidth: '450px',
    marginTop: '1rem',
    '@media only screen and (max-width: 700px)': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '5px',
        borderRadius: '15px',
        maxWidth: '100%',
        marginTop: '1rem',
        marginLeft: "1.5rem",
        marginRight: "0.7rem"
    }
});