// material-ui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| PRIVACY POLICY PAGE ||============================== //

export default function PrivacyPolicyPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <MainCard>
          <Stack spacing={3}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Privacy Policy
            </Typography>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Introduction
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Techromz ("we", "us", "our", or "Company") operates the Techromz CRM application ("Service"). This page informs you of our
                policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have
                associated with that data.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Information Collection and Use
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </Typography>
              <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information
                  that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address,
                  First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data.
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data"). This may include
                  information such as your computer's Internet Protocol address, browser type, browser version, the pages you visit, the
                  time and date of your visit, the time spent on those pages, and other diagnostic data.
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Use of Data
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                Techromz uses the collected data for various purposes:
              </Typography>
              <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To provide and maintain the Service
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To notify you about changes to our Service
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To allow you to participate in interactive features of our Service when you choose to do so
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To provide customer care and support
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To gather analysis or valuable information so that we can improve the Service
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To monitor the usage of the Service
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  To detect, prevent and address technical issues
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Security of Data
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data,
                we cannot guarantee its absolute security.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Changes to This Privacy Policy
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
                on this page and updating the "effective date" at the top of this Privacy Policy.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                If you have any questions about this Privacy Policy, please contact us at: info@techromz.lk
              </Typography>
            </Box>

            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 2 }}>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </Stack>
        </MainCard>
      </Box>
    </Container>
  );
}
