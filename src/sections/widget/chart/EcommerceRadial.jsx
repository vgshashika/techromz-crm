import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useColorScheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ReactApexChart from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import { withAlpha } from 'utils/colorUtils';

// ==============================|| CHART ||============================== //

// chart options
const areaChartOptions = {
  chart: { id: 'ecommerce-radial', type: 'radialBar', background: 'transparent' },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
        background: 'transparent',
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front'
      },
      track: { strokeWidth: '50%' },
      dataLabels: {
        name: { show: false },
        value: { offsetY: 7, fontSize: '20px', fontWeight: '700', show: true }
      }
    }
  }
};

function EcommerceDataChart({ color }) {
  const { colorScheme } = useColorScheme();
  const {
    state: { fontFamily }
  } = useConfig();
  const series = [30];
  const options = useMemo(
    () => ({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [color],
      plotOptions: {
        ...areaChartOptions.plotOptions,
        radialBar: {
          ...areaChartOptions.plotOptions?.radialBar,
          track: { ...areaChartOptions.plotOptions?.radialBar?.track, background: withAlpha(color, 0.5) },
          dataLabels: {
            ...areaChartOptions.plotOptions?.radialBar?.dataLabels,
            value: { ...areaChartOptions.plotOptions?.radialBar?.dataLabels?.value, color: color }
          }
        }
      },
      theme: { mode: colorScheme === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [colorScheme, fontFamily, color]
  );

  return <ReactApexChart options={options} series={series} type="radialBar" height={140} />;
}

// ==============================|| CHART WIDGET - ECOMMERCE RADIAL  ||============================== //

export default function EcommerceRadial({ color }) {
  return (
    <MainCard content={false} sx={{ height: '100%' }}>
      <Stack direction="row" sx={{ gap: 2, alignItems: 'center', height: 1, px: 2 }}>
        <Box sx={{ width: 135 }}>
          <EcommerceDataChart color={color} />
        </Box>
        <Stack>
          <Typography>Total Earning</Typography>
          <Typography variant="subtitle1">$45,890</Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

EcommerceDataChart.propTypes = { color: PropTypes.string };

EcommerceRadial.propTypes = { color: PropTypes.string };
