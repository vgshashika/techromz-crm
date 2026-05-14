import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import StatisticsCard from 'sections/admin-panel/online-courses/dashboard/Statistics';
import InviteGoalCard from 'sections/admin-panel/online-courses/dashboard/InviteGoal';
import StudentStatesCard from 'sections/admin-panel/online-courses/dashboard/StudentStates';
import TotalCard from 'sections/admin-panel/online-courses/dashboard/TotalCard';
import ActivityCard from 'sections/admin-panel/online-courses/dashboard/Activity';
import EarningCourseCard from 'sections/admin-panel/online-courses/dashboard/EarningCourses';

import RevenueAnalytics from 'sections/admin-panel/membership/dashboard/RevenueAnalytics';
import MembershipState from 'sections/admin-panel/membership/dashboard/MembershipState';
import MembershipActivity from 'sections/admin-panel/membership/dashboard/Activity';

import CustomerSatisfaction from 'sections/admin-panel/helpdesk/dashboard/CustomerSatisfaction';
import TransactionCard from 'sections/dashboard/finance/TransactionsCard';

import SalesChart from 'sections/dashboard/SalesChart';
import AcquisitionChannels from 'sections/dashboard/analytics/AcquisitionChannels';

import EcommerceDataCard from 'components/cards/statistics/EcommerceDataCard';
import EcommerceDataChart from 'sections/widget/chart/EcommerceDataChart';

import RepeatCustomerRate from 'sections/widget/chart/RepeatCustomerRate';
import ProjectOverview from 'sections/widget/chart/ProjectOverview';
import EcommerceIncome from 'sections/widget/chart/EcommerceIncome';
import EcommerceRadial from 'sections/widget/chart/EcommerceRadial';

import NewOrders from 'sections/widget/chart/NewOrders';
import NewUsers from 'sections/widget/chart/NewUsers';
import Visitors from 'sections/widget/chart/Visitors';

import ProjectAnalytics from 'sections/widget/chart/ProjectAnalytics';

import ProductOverview from 'sections/widget/chart/ProductOverview';
import TotalIncome from 'sections/widget/chart/TotalIncome';

import LanguagesSupport from 'sections/widget/chart/LanguagesSupport';
import MonthlyReport from 'sections/widget/chart/MonthlyReport';

import IncomeChart from 'sections/dashboard/analytics/IncomeChart';

// assets
import { ArrowDown, ArrowDown2, ArrowUp, Book, Calendar, CloudChange, DocumentDownload, Wallet3 } from 'iconsax-reactjs';

// ==============================|| WIDGET - CHARTS ||============================== //

export default function WidgetChart() {
  const theme = useTheme();
  const [slot, setSlot] = useState('week');
  const [quantity, setQuantity] = useState('By volume');

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleChange = (event, newAlignment) => {
    if (newAlignment) setSlot(newAlignment);
  };

  return (
    <Grid container spacing={GRID_COMMON_SPACING}>
      {/* row 1 */}
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="All Earnings"
          count="$3200"
          iconPrimary={<Wallet3 />}
          percentage={
            <Typography color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowUp size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.vars.palette.primary.main} />
        </EcommerceDataCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="Page Views"
          count="290+"
          color="warning"
          iconPrimary={<Book />}
          percentage={
            <Typography sx={{ color: 'warning.main', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowDown size={16} style={{ transform: 'rotate(-45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.vars.palette.warning.main} />
        </EcommerceDataCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="Total Task"
          count="1468"
          color="success"
          iconPrimary={<Calendar />}
          percentage={
            <Typography sx={{ color: 'success.main', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowUp size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.vars.palette.success.main} />
        </EcommerceDataCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="Download"
          count="$300"
          color="error"
          iconPrimary={<CloudChange />}
          percentage={
            <Typography sx={{ color: 'error.dark', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowDown size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.vars.palette.error.dark} />
        </EcommerceDataCard>
      </Grid>
      {/* row 2 */}
      <Grid size={{ xs: 12, md: 8, lg: 9 }}>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={12}>
            <RepeatCustomerRate />
          </Grid>
          <Grid size={12}>
            <ProjectOverview />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <EcommerceIncome />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 3, height: 1, justifyContent: 'space-between' }}>
              <EcommerceRadial color={theme.vars.palette.primary.main} />
              <EcommerceRadial color={theme.vars.palette.error.dark} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <Stack sx={{ gap: GRID_COMMON_SPACING }}>
          <NewOrders />
          <NewUsers />
          <Visitors />
        </Stack>
      </Grid>
      {/* row 3 */}
      <Grid size={12}>
        <ProjectAnalytics />
      </Grid>
      {/* row 4 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <ProductOverview />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TotalIncome />
      </Grid>
      {/* row 5 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <LanguagesSupport />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <MonthlyReport />
      </Grid>
      {/* row 6 */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={12}>
            <SalesChart />
          </Grid>
          <Grid size={12}>
            <MainCard>
              <Grid container>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}>
                    <Typography variant="h5">Income Overview</Typography>
                    <Stack direction="row" sx={{ alignItems: 'center', mt: 2, color: 'error.main' }}>
                      <ArrowDown2 variant="Bold" style={{ paddingRight: '4px' }} />
                      <Typography>$1,12,900 (45.67%)</Typography>
                    </Stack>
                    <Typography sx={{ color: 'text.secondary', display: 'block' }}>Compare to : 01 Dec 2021-08 Jan 2022</Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack direction="row" sx={{ gap: 1, alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-end' }, mr: 2 }}>
                    <ToggleButtonGroup exclusive onChange={handleChange} value={slot}>
                      <ToggleButton
                        disabled={slot === 'week'}
                        value="week"
                        sx={{ px: 2, py: 0.5, '&.Mui-disabled': { color: 'secondary.main' } }}
                      >
                        Week
                      </ToggleButton>
                      <ToggleButton
                        disabled={slot === 'month'}
                        value="month"
                        sx={{ px: 2, py: 0.5, '&.Mui-disabled': { color: 'secondary.main' } }}
                      >
                        Month
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <Select value={quantity} onChange={handleQuantity} size="small">
                      <MenuItem value="By volume">By Volume</MenuItem>
                      <MenuItem value="By margin">By Margin</MenuItem>
                      <MenuItem value="By sales">By Sales</MenuItem>
                    </Select>
                    <IconButton
                      sx={{
                        color: 'secondary.darker',
                        border: '1px solid',
                        borderColor: 'secondary.400',
                        '&:hover': { backgroundColor: 'transparent' }
                      }}
                    >
                      <DocumentDownload />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ pt: 1 }}>
                <IncomeChart slot={slot} quantity={quantity} />
              </Box>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <StatisticsCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Stack sx={{ gap: GRID_COMMON_SPACING }}>
          <AcquisitionChannels />
          <TransactionCard
            title="Total Balance"
            caption="Apr 01 - Mar 31 (2023)"
            color={theme.vars.palette.primary.main}
            data={[0, 70, 70, 120, 120, 120, 80, 80, 0, 0, 130, 130, 199, 199, 199]}
            amount="650k"
          />
          <TransactionCard
            title="Total Expends"
            caption="Apr 01 - Mar 31 (2023)"
            color={theme.vars.palette.success.main}
            data={[180, 110, 110, 50, 50, 80, 80, 80, 100, 100, 199, 50, 50, 0, 0]}
            amount="510k"
          />
          <TransactionCard
            title="Total Income"
            caption="Apr 01 - Mar 31 (2023)"
            color={theme.vars.palette.error.main}
            data={[70, 199, 199, 130, 130, 130, 0, 140, 140, 80, 80, 20, 70, 70]}
            amount="862k"
          />
          <InviteGoalCard />
        </Stack>
      </Grid>
      {/* row 7 */}
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <TotalCard
          title="Total Revenue"
          amount={24500}
          percentage={12.5}
          color={theme.vars.palette.primary.main}
          data={[20, 40, 30, 50, 45, 60, 55, 70, 65, 80]}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <TotalCard
          title="Subscriptions"
          amount={3240}
          percentage={8.2}
          color={theme.vars.palette.success.main}
          data={[30, 35, 45, 40, 55, 50, 60, 65, 70, 75]}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <TotalCard
          title="Active Users"
          amount={1850}
          percentage={5.8}
          color={theme.vars.palette.warning.main}
          data={[25, 30, 40, 35, 50, 45, 55, 60, 50, 65]}
        />
      </Grid>
      {/* row 8 */}
      <Grid size={{ xs: 12, md: 8 }}>
        <ActivityCard />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <StudentStatesCard />
      </Grid>
      {/* row 9 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomerSatisfaction />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <RevenueAnalytics />
      </Grid>
      {/* row 10 */}
      <Grid size={{ xs: 12, md: 8 }}>
        <MembershipActivity />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <EarningCourseCard />
      </Grid>
      {/* row 11 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <MembershipState />
      </Grid>
    </Grid>
  );
}
