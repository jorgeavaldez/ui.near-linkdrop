import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '16px 72px auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  topbar: {
    gridArea: 'a',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #00000020',
  },
  closeIcon: {
    height: 36,
    width: 36,
    color: theme.palette.text.primary,
    margin: '0 8px',
  },
  body: {
    gridArea: 'b',
    width: '100%',
    minWidth: 680,
    maxWidth: 900,
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export const useStyles = makeStyles(styles, { name: 'Campaign' });
