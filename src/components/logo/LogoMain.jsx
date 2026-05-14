// assets
import logo from 'assets/images/logo.webp';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import { useColorScheme } from '@mui/material/styles';
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  // const { colorScheme } = useColorScheme();

  return <img src={logo} alt="logo" width="100" />;
}
