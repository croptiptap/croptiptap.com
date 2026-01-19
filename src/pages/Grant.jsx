import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material'
import ParticlesBackground from '../components/ParticlesBackground'

const Grant = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [descriptionLength, setDescriptionLength] = useState(0)
  const [grantUsageLength, setGrantUsageLength] = useState(0)

  useEffect(() => {
    document.title = 'Grant Program | Croptiptap Studio'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setDescriptionLength(0)
        setGrantUsageLength(0)
        e.target.reset()
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      if (err.message?.includes('HTTP error')) {
        setError('Server error. Please try again later.')
      } else if (err.name === 'TypeError' || err.message?.includes('fetch')) {
        setError('Network error. Please check your connection and try again.')
      } else {
        setError('Failed to submit. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      color: '#fff',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'accent.main',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'accent.main',
    },
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          backgroundColor: 'background.dark',
          position: 'relative',
          overflow: 'hidden',
          py: 8,
        }}
      >
        <ParticlesBackground />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography
              variant="h1"
              sx={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              }}
            >
              Manifest Network Grant Program
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                maxWidth: '700px',
              }}
            >
              We support builders creating innovative solutions on the Manifest Network. Submit your one-pager to apply for token grants that can be used to lease decentralized infrastructure—CPU, storage, GPU, and more—from the network.
            </Typography>
            <Typography
              component="a"
              href="https://manifest.network"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about Manifest Network (opens in new window)"
              sx={{
                color: 'accent.main',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Learn more about Manifest Network →
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.light',
        }}
      >
        <Container maxWidth="md">
          {submitted ? (
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Alert
                severity="success"
                sx={{
                  width: '100%',
                  bgcolor: 'rgba(0, 204, 255, 0.1)',
                  color: '#fff',
                  '& .MuiAlert-icon': {
                    color: 'accent.main',
                  },
                }}
              >
                Your grant application has been submitted successfully! We&apos;ll review your proposal and get back to you soon.
              </Alert>
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setDescriptionLength(0)
                  setGrantUsageLength(0)
                }}
                variant="outlined"
                sx={{
                  color: 'accent.main',
                  borderColor: 'accent.main',
                  '&:hover': {
                    borderColor: 'accent.main',
                    bgcolor: 'rgba(0, 204, 255, 0.1)',
                  },
                }}
              >
                Submit Another Application
              </Button>
            </Stack>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                bgcolor: 'background.dark',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Grant Application
              </Typography>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              {/* Web3Forms hidden fields */}
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Grant Application" />
              <input type="hidden" name="from_name" value="Manifest Grant Form" />
              {/* Honeypot spam protection - obscure name to avoid detection */}
              <Box component="input" type="text" name="company_website_url" autoComplete="off" tabIndex={-1} sx={{ display: 'none' }} />

              <Stack spacing={3}>
                <TextField
                  required
                  fullWidth
                  label="Project Name"
                  name="project_name"
                  placeholder="Enter your project name"
                  inputProps={{ maxLength: 100 }}
                  sx={textFieldStyles}
                />

                <TextField
                  required
                  fullWidth
                  label="Team/Contact Name"
                  name="team_name"
                  placeholder="Primary contact or team name"
                  inputProps={{ maxLength: 100 }}
                  sx={textFieldStyles}
                />

                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="your@email.com"
                  inputProps={{
                    maxLength: 254,
                    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}',
                    title: 'Please enter a valid email address (e.g., name@example.com)',
                  }}
                  sx={textFieldStyles}
                />

                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="project-description"
                  label="Project Description"
                  name="project_description"
                  placeholder="Describe your project, its goals, and what problem it solves"
                  inputProps={{
                    maxLength: 1000,
                    'aria-describedby': 'project-description-helper-text',
                  }}
                  onChange={(e) => setDescriptionLength(e.target.value.length)}
                  helperText={`${descriptionLength}/1000 characters`}
                  FormHelperTextProps={{ id: 'project-description-helper-text' }}
                  sx={{
                    ...textFieldStyles,
                    '& .MuiFormHelperText-root': {
                      color: 'rgba(255, 255, 255, 0.6)',
                      textAlign: 'right',
                    },
                  }}
                />

                <TextField
                  required
                  fullWidth
                  multiline
                  rows={3}
                  id="grant-usage"
                  label="How do you plan to use the grant?"
                  name="grant_usage"
                  placeholder="Describe how you will use the tokens (e.g., CPU, storage, GPU resources needed)"
                  inputProps={{
                    maxLength: 500,
                    'aria-describedby': 'grant-usage-helper-text',
                  }}
                  onChange={(e) => setGrantUsageLength(e.target.value.length)}
                  helperText={`${grantUsageLength}/500 characters`}
                  FormHelperTextProps={{ id: 'grant-usage-helper-text' }}
                  sx={{
                    ...textFieldStyles,
                    '& .MuiFormHelperText-root': {
                      color: 'rgba(255, 255, 255, 0.6)',
                      textAlign: 'right',
                    },
                  }}
                />

                <TextField
                  required
                  fullWidth
                  label="Expected Timeline"
                  name="timeline"
                  placeholder="e.g., 3 months, 6 months, 1 year"
                  inputProps={{ maxLength: 100 }}
                  sx={textFieldStyles}
                />

                <TextField
                  fullWidth
                  id="links"
                  label="Links (GitHub, Website, etc.)"
                  name="links"
                  placeholder="https://github.com/yourproject, https://yourwebsite.com"
                  inputProps={{
                    maxLength: 500,
                    'aria-describedby': 'links-helper-text',
                  }}
                  helperText="Enter full URLs separated by commas (e.g., https://...)"
                  FormHelperTextProps={{ id: 'links-helper-text' }}
                  sx={{
                    ...textFieldStyles,
                    '& .MuiFormHelperText-root': {
                      color: 'rgba(255, 255, 255, 0.6)',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="How did you hear about us?"
                  name="referral_source"
                  placeholder="e.g., Twitter, Discord, friend, conference"
                  inputProps={{ maxLength: 200 }}
                  sx={textFieldStyles}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    bgcolor: 'accent.main',
                    color: '#000',
                    fontWeight: 600,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'accent.hover',
                    },
                    '&.Mui-disabled': {
                      bgcolor: 'rgba(0, 204, 255, 0.5)',
                      color: '#000',
                    },
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1, color: '#000' }} />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default Grant
