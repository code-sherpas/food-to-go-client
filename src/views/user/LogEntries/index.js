import React, { useEffect } from 'react';
import LogEntryList from './LogEntryList';
import { getlogEntry } from '~/redux/slices/log-entry';
import { PATH_APP } from '~/routes/paths';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Page from '~/components/Page';
import { Container, Avatar, Box, Typography } from '@material-ui/core';
import HeaderDashboard from '~/components/HeaderDashboard';
import LoadingScreen from '~/components/LoadingScreen';
import DateDisplay from '~/components/Date/date';
import { getChildLogEntries } from '~/api/requests';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function LogEntryCardsView({ match }) {
  const classes = useStyles();
  const children = useSelector(state => state.children);
  const [logEntry, setLogEntry] = React.useState();

  useEffect(() => {
    getChildLogEntries(match.params.childId).then(data => {
      setLogEntry(data);
    });
  }, []);

  return (
    <Page title="Daily Events" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading={children.children.data.map(child =>
            match.params.childId === child.id
              ? `${child.attributes.name}'s Daily Events`
              : ``
          )}
          links={[
            { name: 'Quick Actions', href: PATH_APP.root },
            { name: 'Children', href: PATH_APP.management.user.children },
            { name: 'Daily Events' }
          ]}
        />
        <Box sx={{ ml: 0.5 }} display="flex">
          {children.children.data.map(child =>
            match.params.childId === child.id ? (
              <Avatar
                sx={{ marginRight: 2 }}
                src={child.attributes.portraitURL}
              />
            ) : (
              <></>
            )
          )}
          <DateDisplay />
        </Box>
        {logEntry ? (
          logEntry.data.length > 0 ? (
            <LogEntryList
              logEntry={logEntry !== null ? logEntry.data : []}
              child={children}
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
  );
}

export default LogEntryCardsView;
