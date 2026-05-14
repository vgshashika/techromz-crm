import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useColorScheme } from '@mui/material/styles';

import ReactApexChart from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// chart options
const areaChartOptions = {
  chart: {
    id: 'new-stack-chart',
    type: 'bar',
    background: 'transparent',
    sparkline: { enabled: true },
    toolbar: { show: false },
    offsetX: -2
  },
  dataLabels: { enabled: false },
  plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
  xaxis: { crosshairs: { width: 1 } },
  tooltip: { fixed: { enabled: false }, x: { show: false } }
};

// ==============================|| CHART - ECOMMERCE DATA CHART ||============================== //

export default function EcommerceDataChart({ color, height }) {
  const { colorScheme } = useColorScheme();

  const {
    state: { fontFamily }
  } = useConfig();

  const series = [{ name: 'Users', data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }];
  const options = useMemo(
    () => ({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [color],
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [color, fontFamily, colorScheme]
  );

  return <ReactApexChart options={options} series={series} type="bar" height={height ? height : 50} />;
}

EcommerceDataChart.propTypes = { color: PropTypes.string, height: PropTypes.number };
