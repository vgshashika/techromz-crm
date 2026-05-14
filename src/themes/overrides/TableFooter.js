// ==============================|| OVERRIDES - TABLE FOOTER ||============================== //

export default function TableFooter(theme) {
  return {
    MuiTableFooter: {
      styleOverrides: {
        root: {
          backgroundColor: theme.vars.palette.secondary.lighter,
          borderTop: `2px solid ${theme.vars.palette.divider}`,
          borderBottom: `1px solid ${theme.vars.palette.divider}`
        }
      }
    }
  };
}
