import { useMemo } from 'react';

// material-ui
import { useColorScheme, useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';

// chart options
const redialBarChartOptions = {
  chart: {
    background: 'transparent'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '75%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 5
        }
      }
    }
  },
  labels: ['Vimeo']
};

// ==============================|| TOP CARD - RADIAL BAR CHART ||============================== //

export default function ProfileRadialChart() {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();
  const mode = colorScheme;

  const textPrimary = theme.vars.palette.text.primary;
  const primary = theme.vars.palette.primary.main;
  const grey0 = theme.vars.palette.background.paper;

  const series = useMemo(() => [30], []);
  const options = useMemo(
    () => ({
      ...redialBarChartOptions,
      colors: [primary],
      plotOptions: {
        radialBar: {
          ...redialBarChartOptions.plotOptions.radialBar,
          track: {
            ...redialBarChartOptions.plotOptions.radialBar.track,
            background: grey0
          },
          dataLabels: {
            ...redialBarChartOptions.plotOptions.radialBar.dataLabels,
            value: {
              ...redialBarChartOptions.plotOptions.radialBar.dataLabels.value,
              fontSize: '1rem',
              fontWeight: 600,
              color: textPrimary
            }
          }
        }
      },
      theme: { mode: mode === ThemeMode.DARK ? 'dark' : 'light' }
    }),
    [mode, grey0, textPrimary, primary]
  );

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" width={136} height={136} />
    </div>
  );
}
