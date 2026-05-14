import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useColorScheme, useTheme } from '@mui/material/styles';

import ReactApexChart from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// chart options
const barChartOptions = {
  chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
  xaxis: { categories: [2018, 2019, 2020, 2021, 2022, 2023], axisTicks: { show: false }, axisBorder: { show: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 3, colors: ['transparent'] },
  grid: { show: false }
};

// ==============================|| VISITOR - CHART ||============================== //

export default function VisitorChart({ data }) {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const {
    state: { fontFamily }
  } = useConfig();

  const textSecondary = theme.vars.palette.text.secondary;
  const successMain = theme.vars.palette.success.main;

  const options = useMemo(
    () => ({
      ...barChartOptions,
      chart: { ...barChartOptions.chart, fontFamily: fontFamily },
      xaxis: { ...barChartOptions.xaxis, labels: { style: { colors: textSecondary } } },
      yaxis: { labels: { style: { colors: textSecondary } } },
      colors: [successMain],
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [colorScheme, textSecondary, successMain, fontFamily]
  );

  return <ReactApexChart options={options} series={data} type="bar" height={233} />;
}

VisitorChart.propTypes = { data: PropTypes.object };
