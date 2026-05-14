import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useTheme, useColorScheme } from '@mui/material/styles';

import ReactApexChart from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// chart options
const areaChartOptions = {
  chart: {
    id: 'invoice-state',
    toolbar: { show: false },
    sparkline: { enabled: true },
    background: 'transparent'
  },
  dataLabels: { enabled: false },
  stroke: { width: 1, curve: 'smooth' },
  grid: { show: false },
  yaxis: { show: false },
  tooltip: {
    x: { show: false },
    y: {
      formatter(val) {
        return `$ ${val}`;
      }
    }
  }
};

// ==============================|| INVOICE - CHART ||============================== //

export default function InvoiceChart({ color, data }) {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();
  const {
    state: { fontFamily }
  } = useConfig();

  const backgroundPaper = theme.vars.palette.background.paper;

  const series = [{ name: 'Sales', data: data }];

  const options = useMemo(
    () => ({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [color.main],
      fill: {
        gradient: {
          colorStops: [
            [
              { offset: 0, color: color.main, opacity: 0.25 },
              { offset: 100, color: backgroundPaper, opacity: 0 }
            ]
          ]
        }
      },
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [colorScheme, fontFamily, color, backgroundPaper]
  );

  return <ReactApexChart options={options} series={series} type="area" height={72} />;
}

InvoiceChart.propTypes = { color: PropTypes.any, data: PropTypes.array };
