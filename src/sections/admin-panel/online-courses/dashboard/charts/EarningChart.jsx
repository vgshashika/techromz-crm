import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useColorScheme, useTheme } from '@mui/material/styles';

import ReactApexChart from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// chart options
const lineChartOptions = {
  chart: { type: 'line', zoom: { enabled: false }, toolbar: { show: false }, background: 'transparent' },
  xaxis: { categories: [2018, 2019, 2020, 2021, 2022, 2023], axisTicks: { show: false }, axisBorder: { show: false } },
  yaxis: { stepSize: 200 },
  plotOptions: { bar: { borderRadius: 0 } },
  dataLabels: { enabled: false },
  tooltip: { x: { show: false } },
  grid: { show: false }
};

// ==============================|| EARNING - CHART ||============================== //

export default function EarningChart({ data }) {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const {
    state: { fontFamily }
  } = useConfig();

  const textSecondary = theme.vars.palette.text.secondary;
  const warningMain = theme.vars.palette.warning.main;

  const options = useMemo(
    () => ({
      ...lineChartOptions,
      chart: { ...lineChartOptions.chart, fontFamily: fontFamily },
      xaxis: { ...lineChartOptions.xaxis, labels: { style: { colors: textSecondary } } },
      yaxis: { ...lineChartOptions.yaxis, labels: { style: { colors: textSecondary } } },
      colors: [warningMain],
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [colorScheme, textSecondary, warningMain, fontFamily]
  );

  return <ReactApexChart options={options} series={data} type="line" height={212} />;
}

EarningChart.propTypes = { data: PropTypes.array };
