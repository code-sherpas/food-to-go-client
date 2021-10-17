import React from 'react';
import Page from '~/components/Page';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HeaderDashboard from '~/components/HeaderDashboard';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  Badge,
  Avatar,
  Container,
  CardContent,
  AvatarGroup
} from '@material-ui/core';
import { MAvatar } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function AvatarView() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Page title="Components | Avatar" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Avatar"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Avatar' }
          ]}
          moreLink="https://next.material-ui.com/components/avatars"
        />

        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Block title="Image avatars">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/avatar_1.jpg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_2.jpg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="/static/images/avatars/avatar_3.jpg"
                  />
                </Block>
              </Grid>

              <Grid item xs={12} md={4}>
                <Block title="Letter avatars">
                  <MAvatar>H</MAvatar>
                  <MAvatar color="primary">N</MAvatar>
                  <MAvatar color="info">OP</MAvatar>
                  <MAvatar color="success">CB</MAvatar>
                  <MAvatar color="warning">ZP</MAvatar>
                  <MAvatar color="error">OH</MAvatar>
                </Block>
              </Grid>

              <Grid item xs={12} md={4}>
                <Block title="Icon avatars">
                  <MAvatar color="primary">
                    <FolderIcon />
                  </MAvatar>
                  <MAvatar color="info">
                    <PageviewIcon />
                  </MAvatar>
                  <MAvatar color="success">
                    <AssignmentIcon />
                  </MAvatar>
                </Block>
              </Grid>

              <Grid item xs={12} md={4}>
                <Block title="Variant">
                  <MAvatar variant="square" color="primary">
                    <FolderIcon />
                  </MAvatar>
                  <MAvatar variant="rounded" color="info">
                    <PageviewIcon />
                  </MAvatar>
                </Block>
              </Grid>

              <Grid item xs={12} md={4}>
                <Block title="Grouped">
                  <AvatarGroup max={4}>
                    <MAvatar
                      alt="Remy Sharp"
                      src="/static/images/avatars/avatar_4.jpg"
                    />
                    <MAvatar color="info">OP</MAvatar>
                    <MAvatar color="success">CB</MAvatar>
                    <MAvatar
                      alt="Cindy Baker"
                      src="/static/images/avatars/avatar_5.jpg"
                    />
                    <MAvatar
                      alt="Agnes Walker"
                      src="/static/images/avatar/4.jpg"
                    />
                    <MAvatar
                      alt="Trevor Henderson"
                      src="/static/images/avatar/5.jpg"
                    />
                  </AvatarGroup>
                </Block>
              </Grid>

              <Grid item xs={12} md={4}>
                <Block title="With badge">
                  <Badge
                    color="primary"
                    badgeContent=" "
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatars/avatar_6.jpg"
                    />
                  </Badge>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    badgeContent={
                      <MAvatar
                        size={24}
                        alt="Travis Howard"
                        src="/static/images/avatars/avatar_7.jpg"
                        sx={{
                          border: `solid 2px ${theme.palette.background.paper}`
                        }}
                      />
                    }
                  >
                    <MAvatar
                      alt="Travis Howard"
                      src="/static/images/avatars/avatar_8.jpg"
                    />
                  </Badge>
                </Block>
              </Grid>

              <Grid item xs={12}>
                <Block title="Sizes">
                  <MAvatar
                    size={24}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_1.jpg"
                  />

                  <MAvatar
                    size={32}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_2.jpg"
                  />

                  <MAvatar
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_3.jpg"
                  />

                  <MAvatar
                    size={48}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_5.jpg"
                  />

                  <MAvatar
                    size={56}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_6.jpg"
                  />

                  <MAvatar
                    size={64}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_7.jpg"
                  />

                  <MAvatar
                    size={80}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_8.jpg"
                  />

                  <MAvatar
                    size={128}
                    alt="Travis Howard"
                    src="/static/images/avatars/avatar_9.jpg"
                  />
                </Block>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default AvatarView;
