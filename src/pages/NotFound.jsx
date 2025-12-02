import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import WarningRoundedIcon from '@mui/icons-material/WarningRounded'

export default function NotFound() {
  const theme = useTheme()

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
    </Container>
  )
}
