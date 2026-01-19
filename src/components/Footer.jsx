import { Link } from 'react-router-dom';
import { Box, Container, Typography, Stack } from '@mui/material';

const Footer = () => {
  const linkStyles = {
    color: '#fff',
    opacity: 0.9,
    textDecoration: 'none',
    '&:hover': {
      color: 'accent.main',
    },
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.dark',
        color: '#fff',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          spacing={4}
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          {/* Company Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 1,
              }}
            >
              Croptiptap Studio
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                lineHeight: 1.7,
              }}
            >
              Building resilient infrastructure for the long term.
            </Typography>
          </Box>

          {/* Links */}
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
          >
            <Typography
              component={Link}
              to="/grant"
              variant="body2"
              sx={linkStyles}
            >
              Apply for Grant
            </Typography>
            <Typography
              component="a"
              href="https://manifest.network"
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              sx={linkStyles}
            >
              Manifest Network
            </Typography>
          </Stack>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            opacity: 0.6,
            textAlign: 'center',
          }}
        >
          © 2025 Croptiptap Studio
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
