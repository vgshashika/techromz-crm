import PropTypes from 'prop-types';
// material-ui
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { motion } from 'framer-motion';

// project-imports
import Logo from 'components/logo';
import { useBuyNowLink } from 'hooks/buyNowLink';

// assets
import LinkeDinIcon from 'assets/third-party/linkedin';
import GithubFilledIcon from 'assets/third-party/githubFilled';

import { Dribbble, Facebook, Youtube } from 'iconsax-reactjs';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.vars.palette.text.primary,
  '&:hover, &:active': {
    color: theme.vars.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

export default function FooterBlock({ isFull }) {
  const { isPhoenix } = useBuyNowLink();

  const SupportLink = 'https://techromz.lk/support/';

  const linkSX = { color: 'text.secondary', fontWeight: 400, opacity: '0.6', cursor: 'pointer', '&:hover': { opacity: '1' } };

  const footerData = [
    { label: 'Profile', link: 'https://1.envato.market/xk3bQd' },
    { label: 'Portfolio', link: 'https://1.envato.market/Qyre4x' },
    { label: 'Follow Us', link: 'https://1.envato.market/Py9k4X' },
    { label: 'Website', link: 'https://techromz.lk/' }
  ];
  const EcoSystem = [
    {
      label: 'CRM Dashboard',
      link: import.meta.env.VITE_CRM_URL
    },
   
    {
      label: 'Customer Management',
      link: '#'
    },
    {
      label: 'Sales Tracking',
      link: '#'
    },
    {
      label: 'Lead Management',
      link: '#'
    },
    {
      label: 'Task & Project Management',
      link: '#'
    },
    {
      label: 'HR & Employee Management',
      link: '#'
    },
    {
      label: 'Reports & Analytics',
      link: '#'
    },
    {
      label: 'Workflow Automation',
      link: '#'
    }
  ];

  return (
    <>
      <Box sx={{ mt: isFull ? 0 : 10, pt: isFull ? 5 : 10, pb: 10, bgcolor: 'secondary.200', borderColor: 'divider' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <Logo to="/" />
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, maxWidth: 320 }}>
                      Techromz CRM empowers businesses with smart customer management, workflow automation, and real-time analytics. 
                      Our platform is designed to improve productivity, streamline operations, and support business growth through a 
                      modern and user-friendly experience.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">{isPhoenix ? 'Company' : 'Techromz Eco-System'}</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                      {(isPhoenix ? footerData : EcoSystem).map((item, index) => (
                        <FooterLink key={index} href={item.link} target="_blank" underline="none">
                          {item.label}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Help & Support</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                      <FooterLink href="#" underline="none">
                        CRM Features
                      </FooterLink>

                      <FooterLink href="#" underline="none">
                        Customer Management
                      </FooterLink>

                      <FooterLink href="#" underline="none">
                        Sales Analytics
                      </FooterLink>

                      <FooterLink href="#" underline="none">
                        Workflow Automation
                      </FooterLink>

                      <FooterLink href="#" underline="none">
                        Contact Support
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Useful Resources</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                      <FooterLink href="#" underline="none">
                        CRM Documentation
                        </FooterLink>
                          <FooterLink href="#" underline="none">
                          User Guide
                        </FooterLink>

                        <FooterLink href="#" underline="none">
                          Privacy Policy
                        </FooterLink>

                        <FooterLink href="#" underline="none">
                          Terms & Conditions
                        </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 2.4, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'secondary.200' }}>
        <Container>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
            <Typography>
              © Powered by Team  
              <Link href="https://techromz.lk/" target="_blank" underline="none">
                {' '}
                Techromz
              </Link>
              .
            </Typography>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, gap: 3 }}>
              <Tooltip title="Linkedin">
                <Link href="https://www.linkedin.com/company/techromz/" underline="none" target="_blank" sx={linkSX}>
                  <LinkeDinIcon size={20} />
                </Link>
              </Tooltip>
              <Tooltip title="Facebook">
                <Link href="https://web.facebook.com/Techromz/" underline="none" target="_blank" sx={linkSX}>
                  <Facebook size={20} variant="Bold" />
                </Link>
              </Tooltip>
              {/* <Tooltip title="Youtube">
                <Link href="https://techromz.lk/" underline="none" target="_blank" sx={linkSX}>
                  <Youtube variant="Bold" size={20} />
                </Link>
              </Tooltip> */}
              {/* <Tooltip title="Github">
                <Link href="https://github.com/techromz/techromz-crm" underline="none" target="_blank" sx={linkSX}>
                  <GithubFilledIcon size={20} />
                </Link>
              </Tooltip> */}
              {/* <Tooltip title="Dribbble">
                <Link href="https://techromz.lk/" underline="none" target="_blank" sx={linkSX}>
                  <Dribbble variant="Bold" size={20} />
                </Link>
              </Tooltip> */}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

FooterBlock.propTypes = { isFull: PropTypes.bool };
