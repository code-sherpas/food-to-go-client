import clsx from 'clsx';
import React from 'react';
import faker from 'faker';
import { orderBy } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import heartFill from '@iconify-icons/eva/heart-fill';
import { fShortenNumber } from '~/utils/formatNumber';
import trophyFilled from '@iconify-icons/ant-design/trophy-filled';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Avatar,
  CardHeader,
  Typography,
  CardContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const AUTHORS = [
  {
    name: faker.name.findName(),
    favourite: faker.random.number(),
    avatar: '/static/images/avatars/avatar_2.jpg'
  },
  {
    name: faker.name.findName(),
    favourite: faker.random.number(),
    avatar: '/static/images/avatars/avatar_3.jpg'
  },
  {
    name: faker.name.findName(),
    favourite: faker.random.number(),
    avatar: '/static/images/avatars/avatar_4.jpg'
  }
];

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    display: 'flex',
    alignItems: 'center',
    '&:not(:first-child)': { marginTop: theme.spacing(3) }
  },
  listItemIcon: {
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.08)
  },
  top2: {
    color: theme.palette.info.main,
    backgroundColor: alpha(theme.palette.info.main, 0.08)
  },
  top3: {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.08)
  }
}));

// ----------------------------------------------------------------------

function AuthorItem({ author, index }) {
  const classes = useStyles();

  return (
    <div className={classes.listItem}>
      <Avatar alt={author.name} src={author.avatar} />
      <Box className={classes.rowInfo} sx={{ ml: 2, flexGrow: 1 }}>
        <Typography variant="subtitle2">{author.name}</Typography>
        <Box
          sx={{
            mt: 0.5,
            display: 'flex',
            component: 'span',
            alignItems: 'center',
            color: 'text.secondary'
          }}
        >
          <Icon
            icon={heartFill}
            width={16}
            height={16}
            style={{ marginRight: 4 }}
          />
          <Typography variant="caption">
            {fShortenNumber(author.favourite)}
          </Typography>
        </Box>
      </Box>

      <div
        className={clsx(classes.listItemIcon, {
          [classes.top2]: index === 1,
          [classes.top3]: index === 2
        })}
      >
        <Icon icon={trophyFilled} width={20} height={20} />
      </div>
    </div>
  );
}

TopAuthors.propTypes = {
  className: PropTypes.string
};

function TopAuthors({ className, ...other }) {
  const classes = useStyles();
  const displayAuthor = orderBy(AUTHORS, ['favourite'], ['desc']);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="Top Authors" />
      <CardContent>
        {displayAuthor.map((author, index) => (
          <AuthorItem key={author.name} author={author} index={index} />
        ))}
      </CardContent>
    </Card>
  );
}

export default TopAuthors;
