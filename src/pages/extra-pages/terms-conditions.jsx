// material-ui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| TERMS & CONDITIONS PAGE ||============================== //

export default function TermsAndConditionsPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <MainCard>
          <Stack spacing={3}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Terms & Conditions
            </Typography>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                1. Acceptance of Terms
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                By accessing and using the Techromz CRM application ("Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this Service.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                2. Use License
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                Permission is granted to temporarily download one copy of the materials (information or software) on Techromz CRM for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this
                license you may not:
              </Typography>
              <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Modifying or copying the materials
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Using the materials for any commercial purpose or for any public display
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Attempting to decompile or reverse engineer any software contained on Techromz CRM
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Removing any copyright or other proprietary notations from the materials
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary' }}>
                  Transferring the materials to another person or "mirroring" the materials on any other server
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                3. Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                The materials on Techromz CRM are provided on an 'as is' basis. Techromz makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of
                rights.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                4. Limitations
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                In no event shall Techromz or its suppliers be liable for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out of the use or inability to use the materials on
                Techromz CRM, even if Techromz or a Techromz authorized representative has been notified orally or in writing of the
                possibility of such damage.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                5. Accuracy of Materials
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                The materials appearing on Techromz CRM could include technical, typographical, or photographic errors. Techromz does not
                warrant that any of the materials on its Service are accurate, complete, or current. Techromz may make changes to the
                materials contained on its Service at any time without notice.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                6. Links
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Techromz has not reviewed all of the sites linked to its Service and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply endorsement by Techromz of the site. Use of any such linked website
                is at the user's own risk.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                7. Modifications
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Techromz may revise these terms of service for its Service at any time without notice. By using this Service, you are
                agreeing to be bound by the then current version of these terms of service.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                8. Governing Law
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which
                Techromz operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                9. User Accounts
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                If the Service requires you to obtain an account, you are responsible for maintaining the confidentiality of your account
                and password and for restricting access to your computer. You agree to accept responsibility for all activities that
                occur under your account or password. You must notify us immediately of any unauthorized uses of your account.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                10. Contact Information
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                If you have any questions about these Terms & Conditions, please contact us at: info@techromz.lk
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
