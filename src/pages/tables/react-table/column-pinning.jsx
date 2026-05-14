import PropTypes from 'prop-types';
import { useMemo, useState, useRef } from 'react';

// material-ui
import { useColorScheme, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { getCoreRowModel, getPaginationRowModel, flexRender, useReactTable } from '@tanstack/react-table';

// project-imports
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import { CSVExport, StatusPill, TablePagination } from 'components/third-party/react-table';
import makeData from 'data/react-table';

// assets
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs';

import { getImageUrl, ImagePath } from 'utils/getImageUrl';
import { withAlpha } from 'utils/colorUtils';

// ==============================|| ADVANCED PINNING SYSTEM ||============================== //

function ReactTable({ columns, data }) {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  const [columnPinning, setColumnPinning] = useState({
    left: ['role'],
    right: ['status']
  });

  const table = useReactTable({
    data,
    columns,
    state: { columnPinning },
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const colsLeft = table.getLeftLeafColumns();
  const colsCenter = table.getCenterLeafColumns();
  const colsRight = table.getRightLeafColumns();

  const headers = [];

  const TablePane = ({ cols, colRef, type, headerGroups }) => {
    const isCenterEmpty = colsCenter.length === 0;

    if (type === 'center' && isCenterEmpty) return null;

    return (
      <Stack
        direction="column"
        sx={{
          position: 'relative',
          flex: type === 'center' || isCenterEmpty ? '1 1 auto' : '0 0 auto',
          width: type === 'center' || isCenterEmpty ? 'auto' : 'max-content',
          maxWidth: type === 'center' || isCenterEmpty ? 'none' : { xs: '120px', sm: '300px', md: '500px' },
          minWidth: type !== 'center' && !isCenterEmpty ? { xs: '80px', sm: '120px' } : 'auto',
          overflow: 'hidden',
          borderRight: type === 'left' ? `1px solid ${theme.vars.palette.secondary.light}` : 'none',
          borderLeft: type === 'right' ? `1px solid ${theme.vars.palette.secondary.light}` : 'none'
        }}
      >
        <TableContainer ref={colRef}>
          <Table stickyHeader size="small">
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers
                    .filter((header) => cols.map((c) => c.id).includes(header.column.id))
                    .map((header) => (
                      <TableCell
                        key={header.id}
                        align={header.column.columnDef.meta?.align || 'left'}
                        sx={{
                          bgcolor:
                            type === 'left'
                              ? colorScheme === 'dark'
                                ? theme.vars.palette.primary.dark
                                : theme.vars.palette.primary.main
                              : type === 'right'
                                ? colorScheme === 'dark'
                                  ? theme.vars.palette.success.dark
                                  : theme.vars.palette.success.main
                                : colorScheme === 'dark'
                                  ? theme.vars.palette.background.default
                                  : theme.vars.palette.grey[0],
                          color: type === 'left' || type === 'right' ? 'common.white' : undefined
                        }}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} hover>
                  {row
                    .getVisibleCells()
                    .filter((cell) => cols.map((c) => c.id).includes(cell.column.id))
                    .map((cell) => (
                      <TableCell
                        key={cell.id}
                        align={cell.column.columnDef.meta?.align || 'left'}
                        sx={{ whiteSpace: 'nowrap', height: { xs: '60px', sm: '70px' } }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    );
  };

  return (
    <MainCard
      content={false}
      title="Column Pinning"
      secondary={<CSVExport {...{ data: table.getGroupedRowModel().rows.map((row) => row.original), headers, filename: 'grouping.csv' }} />}
    >
      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-end', px: { xs: 1, sm: 3 }, py: 2 }}>
        <Stack
          direction="row"
          sx={{
            overflowX: 'auto',
            flexWrap: 'nowrap',
            pb: 1,
            gap: 1,
            '&::-webkit-scrollbar': { height: 4 },
            '&::-webkit-scrollbar-thumb': { backgroundColor: withAlpha(theme.vars.palette.divider, 0.5), borderRadius: 10 }
          }}
        >
          {table.getAllLeafColumns().map((column) => {
            const isPinned = column.getIsPinned();
            const label = typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;

            return (
              <Chip
                key={column.id}
                variant="combined"
                color={isPinned === 'left' ? 'primary' : isPinned === 'right' ? 'success' : 'secondary'}
                onClick={() => {
                  if (isPinned) column.pin(false);
                }}
                label={
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 0.25 }}>
                    <IconButton
                      size="small"
                      disabled={isPinned === 'left'}
                      onClick={(e) => {
                        e.stopPropagation();
                        column.pin('left');
                      }}
                      sx={{
                        color: isPinned === 'left' ? 'primary.main' : 'text.secondary',
                        '&.Mui-disabled': { color: 'primary.main', opacity: 0.5 }
                      }}
                    >
                      <ArrowLeft2 size={14} />
                    </IconButton>
                    <Typography
                      variant="caption"
                      sx={{
                        px: 0.5,
                        fontWeight: 600,
                        cursor: isPinned ? 'pointer' : 'default',
                        color: isPinned === 'left' ? 'primary.main' : isPinned === 'right' ? 'success.main' : 'text.primary',
                        lineHeight: 1
                      }}
                    >
                      {label}
                    </Typography>
                    <IconButton
                      size="small"
                      disabled={isPinned === 'right'}
                      onClick={(e) => {
                        e.stopPropagation();
                        column.pin('right');
                      }}
                      sx={{
                        color: isPinned === 'right' ? 'success.main' : 'text.secondary',
                        '&.Mui-disabled': { color: 'success.main' }
                      }}
                    >
                      <ArrowRight2 size={14} />
                    </IconButton>
                  </Stack>
                }
              />
            );
          })}
        </Stack>
      </Stack>

      <Stack direction="row">
        {colsLeft.length > 0 && <TablePane cols={colsLeft} colRef={leftRef} type="left" headerGroups={table.getLeftHeaderGroups()} />}
        <TablePane cols={colsCenter} colRef={centerRef} type="center" headerGroups={table.getCenterHeaderGroups()} />
        {colsRight.length > 0 && <TablePane cols={colsRight} colRef={rightRef} type="right" headerGroups={table.getRightHeaderGroups()} />}
      </Stack>
      <Divider />
      <Box sx={{ p: { xs: 1, sm: 2 } }}>
        <TablePagination
          {...{
            setPageSize: table.setPageSize,
            setPageIndex: table.setPageIndex,
            getState: table.getState,
            getPageCount: table.getPageCount
          }}
        />
      </Box>
    </MainCard>
  );
}

// ==============================|| REACT TABLE - COLUMN PINNING ||============================== //

export default function ColumnPinning() {
  const data = useMemo(() => makeData(20), []);

  const columns = useMemo(
    () => [
      {
        header: 'Customer Name',
        accessorKey: 'name',
        cell: ({ row }) => (
          <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
            <Avatar
              alt="Avatar"
              size="sm"
              src={getImageUrl(`avatar-${!row.original.avatar ? 1 : row.original.avatar}.png`, ImagePath.USERS)}
            />
            <Stack>
              <Typography variant="subtitle1">{row.original.fullName}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{row.original.email}</Typography>
            </Stack>
          </Stack>
        )
      },
      { header: 'Age', accessorKey: 'age', meta: { align: 'right' } },
      {
        header: 'Role',
        accessorKey: 'role'
      },
      {
        header: 'Skils',
        accessorKey: 'skills'
      },
      {
        header: 'Visits',
        accessorKey: 'visits',
        meta: { align: 'right' }
      },

      {
        header: 'Country',
        accessorKey: 'country'
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (cell) => <StatusPill status={cell.getValue()} />
      }
    ],
    []
  );

  return <ReactTable {...{ columns, data }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array };
