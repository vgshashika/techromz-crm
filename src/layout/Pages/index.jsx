import { Outlet } from 'react-router-dom';

// project-imports
import ScrollTop from 'components/ScrollTop';

// ==============================|| LAYOUT - BLANK PAGES ||============================== //

export default function PagesLayout() {
  return (
    <ScrollTop>
      <Outlet />
    </ScrollTop>
  );
}
