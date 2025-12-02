import { Box, Container, Typography, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.dark',
        color: '#fff',
        py: 8,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          sx={{ mb: 4 }}
        >
          {/* Company Info */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Croptiptap Studio
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Building resilient infrastructure for the long term.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
              }}
            >
              © 2025 Croptiptap Studio
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
