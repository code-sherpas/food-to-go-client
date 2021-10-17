import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import arrowIosBackFill from '@iconify-icons/eva/arrow-ios-back-fill';
import arrowheadLeftFill from '@iconify-icons/eva/arrowhead-left-fill';
import arrowheadRightFill from '@iconify-icons/eva/arrowhead-right-fill';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  Paper,
  Button,
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: { width: 'auto' },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto',
    boxShadow: theme.shadows[25].z16
  },
  button: {
    margin: theme.spacing(1, 0)
  }
}));

// ----------------------------------------------------------------------

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function SimpleTransferList() {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid
      container
      spacing={4}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
            className={classes.button}
          >
            <Icon icon={arrowheadRightFill} width={18} height={18} />
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
            className={classes.button}
          >
            <Icon icon={arrowIosForwardFill} width={18} height={18} />
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
            className={classes.button}
          >
            <Icon icon={arrowIosBackFill} width={18} height={18} />
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
            className={classes.button}
          >
            <Icon icon={arrowheadLeftFill} width={18} height={18} />
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}

export default SimpleTransferList;
