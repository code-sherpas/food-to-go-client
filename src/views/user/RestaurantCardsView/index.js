import UserList from './UserList';
import Page from '~/components/Page';
import React, { useEffect } from 'react';
import { PATH_APP } from '~/routes/paths';
import { getRestaurant } from '~/redux/slices/restaurant';
import { useDispatch, useSelector } from 'react-redux';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function RestaurantCardsView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurant);

  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <Page title="Restaurants" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="What's serving today?"
          links={[
            { name: 'Quick Actions', href: PATH_APP.root },
            { name: 'Restaurants' }
          ]}
        />
        <UserList
          users={
            restaurant.restaurant !== null ? restaurant.restaurant.data : []
          }
        />
      </Container>
    </Page>
  );
}

export default RestaurantCardsView;
