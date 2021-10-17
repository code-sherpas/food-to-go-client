import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Markdown from '~/components/Markdown';
import codeFill from '@iconify-icons/eva/code-fill';
import { DialogAnimate } from '~/components/Animate';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tooltip,
  IconButton,
  DialogTitle,
  DialogContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

// ----------------------------------------------------------------------

CodeSnippets.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string
};

function CodeSnippets({ source, title }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="View Code">
        <IconButton
          onClick={() => setOpen(true)}
          className={classes.button}
          color={open ? 'primary' : 'default'}
        >
          <Icon icon={codeFill} width={20} height={20} />
        </IconButton>
      </Tooltip>

      <DialogAnimate
        fullWidth
        open={open}
        maxWidth="md"
        scroll="paper"
        onClose={() => setOpen(false)}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <Markdown source={source} />
        </DialogContent>
      </DialogAnimate>
    </>
  );
}

export default CodeSnippets;
