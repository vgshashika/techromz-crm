import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useColorScheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// third-party
import { Droppable, Draggable } from '@hello-pangea/dnd';

// project-imports
import AddItem from './AddItem';
import AlertColumnDelete from './AlertColumnDelete';
import EditColumn from './EditColumn';
import Items from './Items';
import IconButton from 'components/@extended/IconButton';

import { deleteColumn, useGetBacklogs } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import { withAlpha } from 'utils/colorUtils';

// assets
import { Trash } from 'iconsax-reactjs';

// column drag wrapper
function getDragWrapper(isDragging, draggableStyle, theme, radius, themeContrast) {
  return {
    minWidth: 250,
    border: '1px solid',
    borderColor: theme.vars.palette.divider,
    borderRadius: radius,
    userSelect: 'none',
    height: '100%',
    ...(themeContrast && { boxShadow: theme.vars.customShadows.z1 }),
    ...draggableStyle
  };
}

// column drop wrapper
function getDropWrapper(isDraggingOver, colorScheme, theme, radius) {
  const bgcolor = colorScheme === ThemeMode.DARK ? theme.vars.palette.background.default : theme.vars.palette.secondary[200];
  const bgcolorDrop =
    colorScheme === ThemeMode.DARK ? theme.vars.palette.text.disabled : withAlpha(theme.vars.palette.secondary.light, 0.65);

  return {
    background: isDraggingOver ? bgcolorDrop : bgcolor,
    padding: '8px 16px 14px',
    width: 'auto',
    borderRadius: radius
  };
}

// ==============================|| KANBAN BOARD - COLUMN ||============================== //

export default function Columns({ column, index }) {
  const {
    state: { themeContrast }
  } = useConfig();
  const { backlogs } = useGetBacklogs();
  const { colorScheme } = useColorScheme();
  const columnItems = column.itemIds.map((itemId) => backlogs?.items.filter((item) => item.id === itemId)[0]);

  const handleColumnDelete = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleClose = (status) => {
    setOpen(false);
    if (status) {
      deleteColumn(column.id);
      openSnackbar({
        open: true,
        message: 'Column deleted successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',
        severity: 'success'
      });
    }
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Box
          component="div"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={(theme) => ({ ...getDragWrapper(snapshot.isDragging, provided.draggableProps.style, theme, `12px`, themeContrast) })}
        >
          <Droppable droppableId={column.id} type="item">
            {(providedDrop, snapshotDrop) => (
              <Box
                component="div"
                ref={providedDrop.innerRef}
                {...providedDrop.droppableProps}
                sx={(theme) => ({ ...getDropWrapper(snapshotDrop.isDraggingOver, colorScheme, theme, `12px`) })}
              >
                <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                  <Grid size="grow">
                    <EditColumn column={column} />
                  </Grid>
                  <Grid sx={{ mb: 1.5 }}>
                    <Tooltip title="Delete Column">
                      <IconButton
                        onClick={handleColumnDelete}
                        aria-controls="menu-simple-card"
                        aria-haspopup="true"
                        color="error"
                        size="small"
                      >
                        <Trash variant="Bold" />
                      </IconButton>
                    </Tooltip>
                    <AlertColumnDelete title={column.title} open={open} handleClose={handleClose} />
                  </Grid>
                </Grid>
                {columnItems.map((item, i) => (
                  <Items key={i} item={item} index={i} />
                ))}
                {providedDrop.placeholder}
                <AddItem columnId={column.id} />
              </Box>
            )}
          </Droppable>
        </Box>
      )}
    </Draggable>
  );
}

Columns.propTypes = { column: PropTypes.any, index: PropTypes.number };
