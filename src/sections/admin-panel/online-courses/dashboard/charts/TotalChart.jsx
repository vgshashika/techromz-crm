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
  chart: { type: 'line', zoom: { enabled: false }, sparkline: { enabled: true }, background: 'transparent' },
  plotOptions: { bar: { borderRadius: 0 } },
  dataLabels: { enabled: false },
  markers: { hover: { size: 5 } },
  tooltip: { x: { show: false } },
  grid: { show: false },
  stroke: { width: 2 }
};

// ==============================|| TOTAL CARD - CHART ||============================== //

export function ToatlChart({ color, data }) {
  const { colorScheme } = useColorScheme();
  const {
    state: { fontFamily }
  } = useConfig();

  const series = [{ name: 'Orders', data }];

  const options = useMemo(
    () => ({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [color],
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [colorScheme, fontFamily, color]
  );

  return <ReactApexChart options={options} series={series} type="line" height={43} />;
}

ToatlChart.propTypes = { color: PropTypes.string, data: PropTypes.array };
