import React from 'react';
import Page from '~/components/Page';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import { remToPx } from '~/utils/formatFontSize';
import useBreakpoints from '~/hooks/useBreakpoints';
import HeaderDashboard from '~/components/HeaderDashboard';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Container,
  Typography,
  CardHeader,
  CardContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const TYPOGRAPHYS = [
  { name: 'h1. Heading', variant: 'h1' },
  { name: 'h2. Heading', variant: 'h2' },
  { name: 'h3. Heading', variant: 'h3' },
  { name: 'h4. Heading', variant: 'h4' },
  { name: 'h5. Heading', variant: 'h5' },
  { name: 'h6. Heading', variant: 'h6' },
  {
    name:
      'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: 'subtitle1'
  },
  {
    name:
      'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: 'subtitle2'
  },
  {
    name:
      'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: 'body1'
  },
  {
    name:
      'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: 'body2'
  },
  { name: 'caption text', variant: 'caption' },
  { name: 'overline text', variant: 'overline' },
  { name: 'Button', variant: 'button' }
];

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(3)
  },
  row: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3)
    }
  },
  rowContent: {
    width: '100%',
    maxWidth: 720
  }
}));

// ----------------------------------------------------------------------

function GetFontInfo({ name, theme, breakpoints }) {
  const key = theme.breakpoints.up(breakpoints === 'xl' ? 'lg' : breakpoints);
  const getFont = theme.typography[name][key]
    ? theme.typography[name][key]
    : theme.typography[name];
  const fontSize = remToPx(getFont.fontSize);
  const lineHeight = theme.typography[name].lineHeight * fontSize;
  const fontWeight = theme.typography[name].fontWeight;
  const letterSpacing =
    theme.typography[name].letterSpacing !== undefined
      ? theme.typography[name].letterSpacing
      : '';

  return `size: ${fontSize} / l-height: ${lineHeight} / weight: ${fontWeight} ${letterSpacing &&
    `/ spacing: ${letterSpacing}`}`;
}

function TypographyView() {
  const classes = useStyles();
  const theme = useTheme();
  const breakpoints = useBreakpoints();

  return (
    <Page title="Foundations | Typography" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Typography"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Foundations', href: PATH_APP.foundations.root },
            { name: 'Typography' }
          ]}
          moreLink="https://next.material-ui.com/components/typography"
        />

        <Card className={classes.margin}>
          <CardHeader title="Default Text" />
          <CardContent>
            {TYPOGRAPHYS.map(font => (
              <Block key={font.variant} className={classes.row}>
                <div className={classes.rowContent}>
                  <Typography variant={font.variant} gutterBottom>
                    {font.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <GetFontInfo
                      name={font.variant}
                      theme={theme}
                      breakpoints={breakpoints}
                    />
                  </Typography>
                </div>
              </Block>
            ))}
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Colors Text" />
          <CardContent>
            <Block className={classes.row}>
              <div className={classes.rowContent}>
                <Typography variant="subtitle1" gutterBottom>
                  Text primary
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel
                  dui. Pellentesque auctor neque nec urna. Sed cursus turpis
                  vitae tortor. Curabitur suscipit suscipit tellus.
                </Typography>
              </div>
            </Block>

            <Block className={classes.row}>
              <div className={classes.rowContent}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  color="textSecondary"
                >
                  Text secondary
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel
                  dui. Pellentesque auctor neque nec urna. Sed cursus turpis
                  vitae tortor. Curabitur suscipit suscipit tellus.
                </Typography>
              </div>
            </Block>

            <Block className={classes.row}>
              <div className={classes.rowContent}>
                <Box sx={{ color: 'text.disabled' }}>
                  <Typography variant="subtitle1" gutterBottom>
                    disabled
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel
                    dui. Pellentesque auctor neque nec urna. Sed cursus turpis
                    vitae tortor. Curabitur suscipit suscipit tellus.
                  </Typography>
                </Box>
              </div>
            </Block>

            <Block className={classes.row}>
              <div className={classes.rowContent}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  primary
                </Typography>
                <Typography variant="body2" color="primary">
                  Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel
                  dui. Pellentesque auctor neque nec urna. Sed cursus turpis
                  vitae tortor. Curabitur suscipit suscipit tellus.
                </Typography>
              </div>
            </Block>

            <Block className={classes.row}>
              <div className={classes.rowContent}>
                <Typography variant="subtitle1" color="error" gutterBottom>
                  error
                </Typography>
                <Typography variant="body2" color="error">
                  Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel
                  dui. Pellentesque auctor neque nec urna. Sed cursus turpis
                  vitae tortor. Curabitur suscipit suscipit tellus.
                </Typography>
              </div>
            </Block>

            {['info', 'warning'].map(color => (
              <Block key={color} className={classes.row}>
                <div className={classes.rowContent}>
                  <Box sx={{ color: `${color}.main` }}>
                    <Typography variant="subtitle1" gutterBottom>
                      {color}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel
                      dui. Pellentesque auctor neque nec urna. Sed cursus turpis
                      vitae tortor. Curabitur suscipit suscipit tellus.
                    </Typography>
                  </Box>
                </div>
              </Block>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default TypographyView;
