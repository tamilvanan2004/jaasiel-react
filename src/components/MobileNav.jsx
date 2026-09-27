import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks, logoUrl } from '../data/content';

export default function MobileNav({ open, setOpen }) {
  const location = useLocation();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: 'text.primary', border: '1px solid rgba(207,194,212,0.4)' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 300, bgcolor: 'surface.main' } }}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} role="presentation">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 2.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box component="img" src={logoUrl} alt="Jaasiel Logo" sx={{ height: 32, width: 'auto' }} />
              <Typography variant="h2" sx={{ fontSize: '18px', color: 'primary.main' }}>Jaasiel</Typography>
            </Box>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: 'rgba(207,194,212,0.3)' }} />

          <List sx={{ px: 1.5, py: 2, flex: 1 }}>
            {navLinks.map((link) => {
              const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
              return (
                <ListItem key={link.path} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    component={NavLink}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    sx={{ borderRadius: 2, bgcolor: isActive ? 'rgba(80,0,136,0.06)' : 'transparent' }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{ fontWeight: isActive ? 700 : 500, color: isActive ? 'primary.main' : 'text.primary' }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ p: 2.5, borderTop: '1px solid rgba(207,194,212,0.3)' }}>
            <Button fullWidth variant="contained" color="primary" size="large" component={NavLink} to="/contact" onClick={() => setOpen(false)}>
              Request a Service
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}