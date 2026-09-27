import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const logos = ['Client Logo 1', 'Client Logo 2', 'Client Logo 3', 'Client Logo 4', 'Client Logo 5'];

export default function ClientTrust() {
  return (
    <Box component="section" sx={{ py: 6, bgcolor: 'background.paper', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'rgba(207,194,212,0.3)', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontSize: '20px', mb: 4 }}>
          Trusted by Organizations
        </Typography>

        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              width: '200%',
              animation: 'scrollLogos 30s linear infinite',
              '@keyframes scrollLogos': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {[0, 1].map((rep) => (
              <Box key={rep} sx={{ width: '50%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 4, px: 2 }}>
                {logos.map((l) => (
                  <Typography
                    key={l}
                    sx={{ fontSize: '24px', fontWeight: 700, opacity: 0.5, filter: 'grayscale(1)', whiteSpace: 'nowrap' }}
                  >
                    {l}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto' }}>
          Building long-term partnerships through consistent quality, professional service, and
          dependable operations.
        </Typography>
      </Container>
    </Box>
  );
}
