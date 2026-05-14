import { useMemo } from 'react';

// material-ui
import { useColorScheme, useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

const pieChartOptions = {
  chart: { type: 'pie', background: 'transparent' },
  tooltip: { enabled: true, fillSeriesColor: true },
  labels: ['Very Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
  legend: { show: false }
};

// ==============================|| DASHBOARD - CUSTOMER SATISFACTION CHART ||============================== //

export default function CustomerSatisfactionChart() {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();
  const series = [66, 50, 40, 30];

  const primaryDark = theme.vars.palette.primary.dark;
  const primary400 = theme.vars.palette.primary[400];
  const primaryLight = theme.vars.palette.primary.light;
  const primary200 = theme.vars.palette.primary[200];
  const textSecondary = theme.vars.palette.text.secondary;
  const backgroundPaper = theme.vars.palette.background.paper;

  const {
    state: { fontFamily }
  } = useConfig();

  const options = useMemo(
    () => ({
      ...pieChartOptions,
      chart: { ...pieChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryDark, primary400, primaryLight, primary200],
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' },
      legend: { labels: { colors: textSecondary } },
      stroke: { colors: [backgroundPaper] }
    }),
    [colorScheme, primaryDark, primary400, primaryLight, primary200, textSecondary, fontFamily, backgroundPaper]
  );
  return <ReactApexChart options={options} series={series} type="pie" height={250} />;
}
