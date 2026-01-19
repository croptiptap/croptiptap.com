import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import logo3 from '../assets/logo-3.png';
import ParticlesBackground from '../components/ParticlesBackground';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Home = () => {
  useEffect(() => {
    document.title = 'Croptiptap Studio | Web3 Infrastructure';
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          backgroundColor: 'background.dark',
          position: 'relative',
          overflow: 'hidden',
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
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              }}
            >
              Building the Foundational Infrastructure of a Resilient Web3.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontWeight: 400,
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                maxWidth: '800px',
              }}
            >
              We are a venture studio at the intersection of cryptography, AI, distributed compute, and transparent governance, turning complex research into usable, scalable, and equitable decentralized systems.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              <Button
                component={Link}
                to="/grant"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'accent.main',
                  color: '#000',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'accent.hover',
                  },
                }}
              >
                Apply for Grant
              </Button>
              <Button
                component="a"
                href="mailto:hello@croptiptap.com"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: '#fff',
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Challenge & Solution Section */}
      <Box sx={{ p: { xs: 3, md: 10 }, backgroundColor: 'background.light' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 5 },
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#fff',
                mb: 3,
              }}
            >
              The Challenge
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#fff',
              }}
            >
              Current digital systems lack durability, transparency, and equity. Centralized control leads to fragility, opaque governance, and short-term thinking that undermines long-term user fairness.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: '2px solid red',
              borderColor: 'accent.main',
              color: '#fff',
              transform: { xs: 'skewX(0deg)', md: 'skewX(-5deg)' },
            }}
          >
            <Box sx={{ transform: { xs: 'skewX(0deg)', md: 'skewX(5deg)' } }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Our Web3 Solution
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                We shape and deploy the next generation of decentralized infrastructure. From early research to fully deployed networks, Croptiptap Studio creates systems that are fundamentally resilient and governed by transparent, cryptographic rules. Our focus is on long-term fairness and durability.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Feature Areas Section */}
      <Box sx={{
        py: 10,
        backgroundColor: 'background.dark',
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#fff',
              }}
            >
              Our Core Focus Areas
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Building the future of decentralized infrastructure across multiple domains
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.light',
                  transform: {   xs: 'skewX(0deg)', md: 'skewX(-5deg)' },
                }}
              >
                <Box sx={{ transform: { xs: 'skewX(0deg)', md: 'skewX(5deg)' } }}>
                  <LockOutlineIcon sx={{ fontSize: 50, color: 'accent.main' }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 2,
                    }}
                  >
                    Cryptography & AI
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#fff',
                    }}
                  >
                    Pioneering novel cryptographic primitives to enable trustless computation and integrate ethical, decentralized AI models.
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.light',
                  transform: { xs: 'skewX(0deg)', md: 'skewX(-5deg)' },
                }}
              >
                <Box sx={{ transform: { xs: 'skewX(0deg)', md: 'skewX(5deg)' } }}>
                  <ElectricBoltIcon sx={{ fontSize: 50, color: 'accent.main' }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 2,
                    }}
                  >
                    Distributed Compute & Hardware
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#fff',
                    }}
                  >
                    Developing protocols and real-world hardware solutions that unlock verifiable, geographically distributed compute power and secure data hosting.
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.light',
                  transform: { xs: 'skewX(0deg)', md: 'skewX(-5deg)' },
                }}
              >
                <Box sx={{ transform: { xs: 'skewX(0deg)', md: 'skewX(5deg)' } }}>
                  <AccountBalanceIcon sx={{ fontSize: 50, color: 'accent.main' }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 2,
                    }}
                  >
                    Transparent Governance
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#fff',
                    }}
                  >
                    Designing and implementing fair, resilient decentralized autonomous organizations (DAOs) that ensure long-term, equitable direction for the network.
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.light',
                  transform: { xs: 'skewX(0deg)', md: 'skewX(-5deg)' },
                }}
              >
                <Box sx={{ transform: { xs: 'skewX(0deg)', md: 'skewX(5deg)' } }}>
                  <RocketLaunchIcon sx={{ fontSize: 50, color: 'accent.main' }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 2,
                    }}
                  >
                    From Research to Deployment
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#fff',
                    }}
                  >
                    We don&apos;t just research—we build. We handle the full life cycle: from ideation and economic modeling to smart contract deployment and network bootstrapping.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Grant CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.medium',
        }}
      >
        <Container maxWidth="md">
          <Stack
            spacing={4}
            alignItems="center"
            textAlign="center"
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              border: '2px solid',
              borderColor: 'accent.main',
              bgcolor: 'background.dark',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: 'accent.main',
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              }}
            >
              Build on Manifest Network
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.15rem' },
                lineHeight: 1.8,
                maxWidth: '700px',
              }}
            >
              Apply for token grants to lease decentralized infrastructure—CPU, storage, GPU, and more. We&apos;re looking for builders creating innovative solutions on the Manifest Network.
            </Typography>
            <Typography
              component="a"
              href="https://manifest.network"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about Manifest Network (opens in new window)"
              sx={{
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Learn more about Manifest Network →
            </Typography>
            <Button
              component={Link}
              to="/grant"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'accent.main',
                color: '#000',
                fontWeight: 600,
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: 'accent.hover',
                },
              }}
            >
              Apply for Grant
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Mission & Values Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #00ccff 0%, #059bc1 100%)',
          color: '#fff',
          py: 12,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <img src={logo3} alt="Logo" />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 2,
              }}
            >
              Build Durable, Accessible, Decentralized Digital Infrastructure.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                lineHeight: 1.8,
                maxWidth: '900px',
                opacity: 0.95,
              }}
            >
              Croptiptap Studio&apos;s core mission is to create resilient, equitable digital infrastructure for the long term. We increase transparency, resilience, and long-term fairness in digital systems, ensuring the Web3 future is open to all.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box >
  );
};

export default Home;
