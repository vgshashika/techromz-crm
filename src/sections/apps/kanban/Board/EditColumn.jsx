import PropTypes from 'prop-types';

// material-ui
import OutlinedInput from '@mui/material/OutlinedInput';

// project-imports
import { editColumn } from 'api/kanban';

// ==============================|| KANBAN BOARD - COLUMN EDIT ||============================== //

export default function EditColumn({ column }) {
  const handleColumnRename = (event) => {
    editColumn({ id: column.id, title: event.target.value, itemIds: column.itemIds });
  };

  return (
    <OutlinedInput
      fullWidth
      value={column.title}
      onChange={handleColumnRename}
      sx={(theme) => ({
        mb: 1.5,
        fontWeight: 500,
        '& input:focus, & input:hover': {
          bgcolor: 'secondary.lighter',
          ...theme.applyStyles('dark', { bgcolor: 'secondary.100' })
        },
        '& input:hover + fieldset': { display: 'block' },
        '& fieldset': { display: 'none' },
        '& input:focus + fieldset': { display: 'block' }
      })}
      slotProps={{ input: { sx: { bgcolor: 'transparent', borderRadius: 1 } } }}
    />
  );
}

EditColumn.propTypes = { column: PropTypes.any };
