import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

import WarningRoundedIcon from '@mui/icons-material/WarningRounded'

export default function NotFound() {
  const theme = useTheme()

  useEffect(() => {
    document.title = 'Page Not Found | Croptiptap Studio'
  }, [])

  return (
    <Container maxWidth="xs" sx={{ pt: 15, pb: 40 }}>
      <WarningRoundedIcon
        sx={{
          display: 'block',
          my: 5,
          mx: 'auto',
          transform: 'scale(3)',
          color: theme.palette.primary.main,
        }}
        align="center"
      />
      <Typography
        component="h1"
        variant="h2"
        sx={{
          mb: 3,
          fontWeight: '700',
          fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
        }}
        align="center"
        gutterBottom
      >
        Not Found
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        This page does not exist
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          display: 'block',
          mx: 'auto',
          mt: 4,
          bgcolor: 'accent.main',
          color: '#000',
          fontWeight: 600,
          '&:hover': {
            bgcolor: '#00b8e6',
          },
        }}
      >
        Go to Home
      </Button>
    </Container>
  )
}
