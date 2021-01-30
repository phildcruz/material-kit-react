import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    fetch('/data/customer.json', { headers: { 'Content-Type': 'applcation/json' } })
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  });

  console.debug(customers);
  return (
    <Page
      className={classes.root}
      title="Person"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          {customers && <Results customers={customers} />}
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
