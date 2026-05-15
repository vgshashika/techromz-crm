import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import { useBuyNowLink } from 'hooks/buyNowLink';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  const { isPhoenix } = useBuyNowLink();

  const SupportLink = 'https://techromz.lk/support/';

  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1, justifyContent: 'space-between', alignItems: 'center', pt: 3, mt: 'auto' }}>
      <Typography variant="caption">
        &copy; 2024 Techromz. All rights reserved.
      </Typography>
      <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Link component={RouterLink} to="/" variant="caption" color="text.primary">
          Home
        </Link>
        <Link component={RouterLink} to="/documentation" variant="caption" color="text.primary">
          Documentation
        </Link>
        <Link component={RouterLink} to="/privacy-policy" variant="caption" color="text.primary">
          Privacy Policy
        </Link>
        <Link component={RouterLink} to="/terms-conditions" variant="caption" color="text.primary">
          Terms & Conditions
        </Link>
        <Link href={SupportLink} target="_blank" variant="caption" color="text.primary">
          Support
        </Link>
      </Stack>
    </Stack>
  );
}
