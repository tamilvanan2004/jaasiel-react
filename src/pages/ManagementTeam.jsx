import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion';
import { managementTeam } from '../data/content';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ManagementTeam() {
  return (
    <Box
      id="management-team"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              borderRadius: 999,
              bgcolor: 'rgba(80,0,136,0.06)',
              color: 'primary.main',
              border: '1px solid rgba(80,0,136,0.12)',
              width: 'fit-content',
            }}
          >
            <GroupsIcon sx={{ fontSize: 16 }} />
            <Typography variant="overline">Our Management Team</Typography>
          </Box>
          <Typography variant="h2">Experienced Professionals, Strong Leadership</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 620 }}>
            Our leadership team brings together decades of combined experience across
            operations, food service, and facility management.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {managementTeam.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
              <Paper
                component={motion.div}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                  '&:hover': {
                    boxShadow: '0 12px 28px -8px rgba(30,41,59,0.14)',
                    borderColor: 'rgba(80,0,136,0.15)',
                  },
                }}
              >
                <Avatar
                  src={member.photo}
                  alt={member.name}
                  sx={{
                    width: 88,
                    height: 88,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'rgba(80,0,136,0.1)',
                    color: 'primary.main',
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  {!member.photo && member.name.charAt(0)}
                </Avatar>
                <Typography variant="h3" sx={{ fontSize: '17px', mb: 0.5 }}>
                  {member.name}
                </Typography>
                <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
                  {member.role}
                </Typography>
                {member.bio && (
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}