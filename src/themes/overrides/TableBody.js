// ==============================|| OVERRIDES - TABLE BODY ||============================== //

export default function TableBody(theme) {
  const hoverStyle = {
    '&:hover': {
      backgroundColor: theme.vars.palette.secondary.lighter
    }
  };

  return {
    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor: theme.vars.palette.background.paper,
          '& .MuiTableRow-root': {
            ...hoverStyle
          }
        }
      }
    }
  };
}
