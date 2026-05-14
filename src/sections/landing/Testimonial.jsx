import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';

// assets
import Avatar from 'components/@extended/Avatar';
import Avatar1 from 'assets/images/users/avatar-6.png';
import Avatar2 from 'assets/images/users/avatar-1.png';
import Avatar3 from 'assets/images/users/avatar-2.png';
import Avatar4 from 'assets/images/users/avatar-3.png';
import Avatar5 from 'assets/images/users/avatar-4.png';
import Avatar6 from 'assets/images/users/avatar-5.png';
import Avatar7 from 'assets/images/users/avatar-7.png';
import Avatar8 from 'assets/images/users/avatar-8.png';

// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }) {
  return (
    <MainCard sx={{ width: { xs: '300px', md: '420px' }, cursor: 'pointer', my: 0.2, mx: 1.5 }}>
      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Avatar alt="Avatar" size="lg" src={item.image}></Avatar>
        <Stack>
          <Typography>{item.text}</Typography>
          <Typography>
            <Typography component="span" variant="caption">
              {item.name}
            </Typography>
            {' - '}
            <Typography component="span" sx={{ color: 'text.secondary' }}>
              {item.designation}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

// ==============================|| LANDING - TestimonialPage ||============================== //

export default function TestimonialPage() {
  const theme = useTheme();
  const items = [
        {
      image: Avatar1,
      text: '“Techromz CRM helped us organize leads, automate daily workflows, and improve team productivity with ease.”',
      name: 'Nimal Perera',
      designation: 'Sales Management'
    },
    {
      image: Avatar2,
      text: '“The dashboard is clean, modern, and very easy to use. Managing customers and tracking performance is now much faster.”',
      name: 'Kavindu Silva',
      designation: 'User Experience'
    },
    {
      image: Avatar3,
      text: '“A powerful CRM solution with excellent customization options for growing businesses.”',
      name: 'Hasini Fernando',
      designation: 'Customization'
    },
    {
      image: Avatar4,
      text: '“Techromz CRM simplified our business operations and improved communication between departments.”',
      name: 'Sachintha Raj',
      designation: 'Business Operations'
    },
    {
      image: Avatar5,
      text: '“The support team was responsive and helped us quickly during setup and integration.”',
      name: 'Dilshan Kumara',
      designation: 'Customer Support'
    },
    {
      image: Avatar6,
      text: '“The interface design is professional and the real-time analytics help us make better business decisions.”',
      name: 'Ishara Madushani',
      designation: 'Analytics & Reporting'
    },
    {
      image: Avatar7,
      text: '“We were able to manage clients, sales, and employee activities from one centralized platform.”',
      name: 'Ravindu Jayasinghe',
      designation: 'Workflow Management'
    },
    {
      image: Avatar8,
      text: '“An excellent CRM platform with modern UI, smooth performance, and valuable business features.”',
      name: 'Tharushi Wijesinghe',
      designation: 'System Performance'
    }
  ];
  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 2.5 } }}>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center', marginBottom: 4, paddingTop: 3 }}>
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography variant="h2">
                  They{' '}
                  <Typography variant="h2" component="span" sx={{ color: 'primary.main' }}>
                    love
                  </Typography>{' '}
                  CRM, Now your turn 😍
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>
                  We take pride in our Dashboard development, which has been consistently rated 4.7/5 by our satisfied customers. It brings
                  us joy to share the positive feedback we have received from our loyal clients.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mb: { md: 10, xs: 2.5 } }}>
        <Grid container spacing={4}>
          <Grid sx={{ direction: theme.direction }} size={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
          <Grid sx={{ direction: theme.direction }} size={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

Item.propTypes = { item: PropTypes.object };
