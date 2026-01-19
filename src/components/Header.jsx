import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import logo1 from '../assets/logo-1.png'

const Header = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundColor: 'background.dark',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                height: 80,
            }}
        >
            <Link to="/">
                <Box component="img" src={logo1} alt="logo" sx={{ height: '20px' }} />
            </Link>
        </Stack>
    )
}

export default Header
