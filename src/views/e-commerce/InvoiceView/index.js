import faker from 'faker';
import React from 'react';
import { sum } from 'lodash';
import Toolbar from './Toolbar';
import Page from '~/components/Page';
import { PATH_APP } from '~/routes/paths';
import { fCurrency } from '~/utils/formatNumber';
import HeaderDashboard from '~/components/HeaderDashboard';
import Scrollbars from '~/components/Scrollbars';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Table,
  Divider,
  TableRow,
  Container,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer
} from '@material-ui/core';
import { MLabel } from '~/@material-extend';

// ----------------------------------------------------------------------

const INVOICE = {
  id: faker.random.uuid(),
  taxes: 5,
  discount: 10,
  status: 'paid',
  invoiceFrom: {
    name: faker.name.findName(),
    address: 'DieSachbearbeiter Choriner Straße 49 10435 Berlin',
    company: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat()
  },
  invoiceTo: {
    name: faker.name.findName(),
    address: 'Keas 69 Str. 15234, Chalandri Athens, Greece',
    company: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat()
  },
  items: [...Array(3)].map(item => {
    return {
      id: faker.random.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.lines(),
      qty: faker.random.number({ min: 1, max: 5 }),
      price: faker.random.number({ min: 4, max: 99, precision: 0.01 })
    };
  })
};

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    padding: theme.spacing(5, 5, 0)
  },
  gridItem: {
    marginBottom: theme.spacing(5)
  },
  tableHead: {
    borderBottom: `solid 1px ${theme.palette.divider}`,
    '& th': {
      backgroundColor: 'transparent'
    }
  },
  row: {
    borderBottom: `solid 1px ${theme.palette.divider}`
  },
  rowResult: {
    '& td': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  }
}));

// ----------------------------------------------------------------------

function InvoiceView() {
  const classes = useStyles();
  const subTotal = sum(INVOICE.items.map(item => item.price * item.qty));
  const total = subTotal - INVOICE.discount + INVOICE.taxes;

  return (
    <Page title="Management | Invoice Details" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Invoice Details"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'E-Commerce', href: PATH_APP.management.eCommerce.root },
            { name: 'Invoice' }
          ]}
        />

        <Toolbar invoice={INVOICE} />

        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Box
                component="img"
                alt="logo"
                src="/static/brand/logo_full.svg"
                sx={{ height: 48 }}
              />
            </Grid>

            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Box sx={{ textAlign: { sm: 'right' } }}>
                <MLabel color="success" sx={{ textTransform: 'uppercase' }}>
                  {INVOICE.status}
                </MLabel>
                <Box sx={{ typography: 'h6', mt: 1 }}>INV-{INVOICE.id}</Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Box
                sx={{ mb: 2, typography: 'overline', color: 'text.disabled' }}
              >
                Invoice from
              </Box>
              <Typography variant="body2">
                {INVOICE.invoiceFrom.name}
              </Typography>
              <Typography variant="body2">
                {INVOICE.invoiceFrom.address}
              </Typography>
              <Typography variant="body2">
                Phone: {INVOICE.invoiceFrom.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Box
                sx={{ mb: 2, typography: 'overline', color: 'text.disabled' }}
              >
                Invoice to
              </Box>
              <Typography variant="body2">{INVOICE.invoiceTo.name}</Typography>
              <Typography variant="body2">
                {INVOICE.invoiceTo.address}
              </Typography>
              <Typography variant="body2">
                Phone: {INVOICE.invoiceTo.phone}
              </Typography>
            </Grid>
          </Grid>

          <Scrollbars>
            <TableContainer component={Box} sx={{ minWidth: 960 }}>
              <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell width={40}>#</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Qty</TableCell>
                    <TableCell align="right">Unit price</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {INVOICE.items.map((row, index) => (
                    <TableRow key={index} className={classes.row}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="left">
                        <Box sx={{ maxWidth: 560 }}>
                          <Typography variant="subtitle2">
                            {row.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            noWrap
                          >
                            {row.description}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="left">{row.qty}</TableCell>
                      <TableCell align="right">
                        {fCurrency(row.price)}
                      </TableCell>
                      <TableCell align="right">
                        {fCurrency(row.price * row.qty)}
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow className={classes.rowResult}>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Box sx={{ mt: 2 }} />
                      <Typography variant="body1">Subtotal</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Box sx={{ mt: 2 }} />
                      <Typography variant="body1">
                        {fCurrency(subTotal)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.rowResult}>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="body1">Discount</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Typography color="error">
                        {fCurrency(-INVOICE.discount)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.rowResult}>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="body1">Taxes</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Typography variant="body1">
                        {fCurrency(INVOICE.taxes)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.rowResult}>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="h6">Total</Typography>
                    </TableCell>
                    <TableCell align="right" width={140}>
                      <Typography variant="h6">{fCurrency(total)}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbars>

          <Box sx={{ mt: 5 }} />
          <Divider />

          <Grid container>
            <Grid item xs={12} md={9}>
              <Box sx={{ py: 3 }}>
                <Typography variant="subtitle2">NOTES</Typography>
                <Typography variant="body2">
                  We appreciate your business. Should you need us to add VAT or
                  extra notes let us know!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ py: 3, textAlign: 'right' }}>
                <Typography variant="subtitle2">Have a Question?</Typography>
                <Typography variant="body2">support@minimals.cc</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  );
}

export default InvoiceView;
