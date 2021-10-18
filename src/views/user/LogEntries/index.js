import React, { useEffect } from 'react';
import FoodItemsList from './FoodItemsList';
import { getfoodItems } from '~/redux/slices/food-items';
import { PATH_APP } from '~/routes/paths';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Page from '~/components/Page';
import { Container, Avatar, Box, Typography } from '@material-ui/core';
import HeaderDashboard from '~/components/HeaderDashboard';
import LoadingScreen from '~/components/LoadingScreen';
import DateDisplay from '~/components/Date/date';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function LogEntryCardsView({ match }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const foodItems = useSelector(state => state.foodItems);

  useEffect(() => {
    dispatch(getfoodItems('Dominoes'));
  }, [dispatch]);

  // console.log(foodItems.foodItems.data);

  return (
    <>
      <Page title="Food Items" className={classes.root}>
        <Container>
          <HeaderDashboard
            heading={`${match.params.restaurantName}'s Food Items`}
            links={[
              { name: 'Quick Actions', href: PATH_APP.root },
              { name: 'Food Items', href: PATH_APP.management.user.foodItems },
              { name: 'Food Items' }
            ]}
          />
          <Box sx={{ ml: 0.5 }} display="flex">
            <Avatar
              sx={{ marginRight: 2 }}
              // src={child.attributes.portraitURL}
            />

            <DateDisplay />
          </Box>
          {foodItems.foodItems ? (
            foodItems.foodItems.data.length > 0 ? (
              <FoodItemsList
                foodItems={foodItems !== null ? foodItems.foodItems.data : []}
              />
            ) : (
              <Box
                sx={{ mt: 8, mb: 2 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ mt: 2, mb: 3 }}>
                  <img
                    src="/static/illustrations/illustration_no_event.svg"
                    alt="illustration"
                  />
                  <Typography
                    sx={{ mt: 3, mb: 2 }}
                    variant={'h5'}
                    color={'textSecondary'}
                    align={'center'}
                  >
                    No daily events to display.
                  </Typography>
                </Box>
              </Box>
            )
          ) : (
            <LoadingScreen></LoadingScreen>
          )}
        </Container>
      </Page>
    </>
  );
}

export default LogEntryCardsView;
