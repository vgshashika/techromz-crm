// material-ui
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Sample Card">
      <Typography variant="body1">
        Do you Know? Techromz CRM is trusted by businesses worldwide. This is the modern version of our CRM platform
        Template with having brand new modern User Interface.
      </Typography>
    </MainCard>
  );
}
