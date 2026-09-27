import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const serviceLinks = [
  {
    label: 'Service Excellence',
    href: '#services',
  },
  {
    label: 'Innovation & AI',
    href: '#innovation',
  },
  {
    label: 'Client Portal',
    href: '#portal',
  },
];

const legalLinks = [
  {
    label: 'Privacy Policy',
    href: '#privacy',
  },
  {
    label: 'Terms of Service',
    href: '#terms',
  },
  {
    label: 'Contact Support',
    href: '#contact',
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramIcon fontSize="small" />,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: <FacebookIcon fontSize="small" />,
  },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        display: 'block',
        width: 'fit-content',
        color: 'rgba(255,255,255,0.68)',
        fontSize: '0.9rem',
        lineHeight: 1.5,
        transition: 'color 0.25s ease, transform 0.25s ease',
        '&:hover': {
          color: 'white',
          transform: 'translateX(4px)',
        },
        '&:focus-visible': {
          outline: '2px solid',
          outlineColor: 'secondary.main',
          outlineOffset: 4,
          borderRadius: 1,
        },
      }}
    >
      {children}
    </Link>
  );
}

function FooterHeading({ children }) {
  return (
    <Typography
      variant="overline"
      sx={{
        display: 'block',
        mb: 2,
        color: 'secondary.main',
        fontWeight: 700,
        letterSpacing: '0.12em',
        lineHeight: 1.4,
      }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#342e37',
        color: 'common.white',
        pt: { xs: 7, md: 10 },
        pb: 3,
      }}
    >
      {/* Decorative background shapes */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: 280,
          height: 280,
          top: -150,
          right: -80,
          borderRadius: '50%',
          bgcolor: 'rgba(223,183,255,0.08)',
          pointerEvents: 'none',
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: 220,
          height: 220,
          bottom: -140,
          left: -100,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 4, md: 6, lg: 8 }}
          rowSpacing={{ xs: 5, md: 7 }}
          alignItems="stretch"
        >
          {/* Brand section */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 390,
              }}
            >
              <Link
                href="/"
                underline="none"
                sx={{
                  display: 'inline-block',
                  mb: 2,
                  color: 'white',
                  fontSize: { xs: '30px', md: '36px' },
                  fontWeight: 600,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                Jaasiel
              </Link>

              <Typography
                variant="body2"
                sx={{
                  maxWidth: 360,
                  mx: { xs: 'auto', md: 0 },
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: 1.8,
                }}
              >
                Excellence in Motion. Professional corporate services designed
                around your business needs, goals, and long-term growth.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1,
                  mt: 3,
                }}
              >
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    sx={{
                      width: 38,
                      height: 38,
                      color: 'rgba(255,255,255,0.72)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      transition:
                        'color 0.25s ease, background-color 0.25s ease, transform 0.25s ease',
                      '&:hover': {
                        color: 'white',
                        bgcolor: 'primary.main',
                        borderColor: 'primary.main',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 180 }}>
              <FooterHeading>Services</FooterHeading>

              <Box
                component="nav"
                aria-label="Services navigation"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1.5,
                }}
              >
                {serviceLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Company */}
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 180 }}>
              <FooterHeading>Company</FooterHeading>

              <Box
                component="nav"
                aria-label="Company navigation"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1.5,
                }}
              >
                {legalLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid
            item
            xs={12}
            sm={8}
            md={4}
            lg={4}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 430,
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                border: '1px solid rgba(255,255,255,0.14)',
                bgcolor: 'rgba(255,255,255,0.05)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 1,
                  fontSize: '18px',
                  fontWeight: 700,
                }}
              >
                Stay connected
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2.5,
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: 1.7,
                }}
              >
                Receive occasional updates about our services, ideas, and
                business insights.
              </Typography>

              <Box
                component="form"
                onSubmit={handleNewsletterSubmit}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  required
                  placeholder="Your email address"
                  aria-label="Your email address"
                  sx={{
                    minWidth: 0,
                    '& .MuiOutlinedInput-root': {
                      minHeight: 40,
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.08)',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.45)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& input::placeholder': {
                      color: 'rgba(255,255,255,0.55)',
                      opacity: 1,
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    minWidth: { sm: 110 },
                    minHeight: 40,
                    borderRadius: 2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Join
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 5, md: 7 },
            borderColor: 'rgba(255,255,255,0.14)',
          }}
        />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            flexDirection: { xs: 'column-reverse', sm: 'row' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.55)',
              textAlign: { xs: 'center', sm: 'left' },
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} Jaasiel B2B Services. All rights
            reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <IconButton
              component="a"
              href="#language"
              aria-label="Change language"
              sx={{
                width: 36,
                height: 36,
                color: 'rgba(255,255,255,0.65)',
                '&:hover': {
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <LanguageIcon fontSize="small" />
            </IconButton>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              English
            </Typography>

            <IconButton
              onClick={handleScrollTop}
              aria-label="Back to top"
              sx={{
                width: 36,
                height: 36,
                ml: 1,
                color: 'rgba(255,255,255,0.65)',
                border: '1px solid rgba(255,255,255,0.16)',
                '&:hover': {
                  color: 'white',
                  bgcolor: 'primary.main',
                  borderColor: 'primary.main',
                },
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}