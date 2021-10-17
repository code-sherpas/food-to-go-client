import clsx from 'clsx';
import React from 'react';
import { filter } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import roundClearAll from '@iconify-icons/ic/round-clear-all';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Chip, Typography } from '@material-ui/core';
import { MButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  block: {
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    margin: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.divider}`
  },
  chip: {
    marginLeft: theme.spacing(0.5)
  },
  chipWhite: {
    border: `solid 1px ${theme.palette.grey[500_32]}`,
    '& .MuiChip-deleteIcon': { color: theme.palette.text.disabled }
  },
  label: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(0.75),
    borderRight: `solid 1px ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.neutral
  }
}));

// ----------------------------------------------------------------------

function labelColor(hex) {
  if (hex === '#00AB55') {
    return 'Green';
  }
  if (hex === '#000000') {
    return 'Black';
  }
  if (hex === '#FFFFFF') {
    return 'White';
  }
  if (hex === '#FFC0CB') {
    return 'Pink';
  }
  if (hex === '#FF4842') {
    return 'Red';
  }
  if (hex === '#1890FF') {
    return 'Blue';
  }
  if (hex === '#94D82D') {
    return 'Greenyellow';
  }
  if (hex === '#FFC107') {
    return 'Orange';
  }
}

function labelPriceRange(range) {
  if (range === 'below') {
    return 'Below $25';
  }
  if (range === 'between') {
    return 'Between $25 - $75';
  }
  if (range === 'above') {
    return 'Above $75';
  }
}

ChipFiltered.propTypes = {
  formik: PropTypes.object,
  filters: PropTypes.object,
  isShowReset: PropTypes.bool,
  onResetFilter: PropTypes.func,
  className: PropTypes.string
};

function ChipFiltered({
  formik,
  filters,
  isShowReset,
  onResetFilter,
  className,
  ...other
}) {
  const classes = useStyles();
  const theme = useTheme();
  const { values, handleSubmit, setFieldValue, initialValues } = formik;
  const { gender, category, colors, priceRange, rating } = filters;
  const isShow = values !== initialValues && !isShowReset;

  const handleRemoveGender = value => {
    const newValue = filter(gender, _item => _item !== value);
    handleSubmit();
    setFieldValue('gender', newValue);
  };

  const handleRemoveCategory = () => {
    handleSubmit();
    setFieldValue('category', 'All');
  };

  const handleRemoveColor = value => {
    const newValue = filter(colors, _item => _item !== value);
    handleSubmit();
    setFieldValue('colors', newValue);
  };

  const handleRemovePrice = () => {
    handleSubmit();
    setFieldValue('priceRange', '');
  };

  const handleRemoveRating = () => {
    handleSubmit();
    setFieldValue('rating', '');
  };

  return (
    <div className={clsx(classes.root, className)} {...other}>
      {gender.length > 0 && (
        <div className={classes.block}>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.label}
          >
            Gender:
          </Typography>
          {gender.map(_gender => (
            <Chip
              key={_gender}
              label={_gender}
              size="small"
              onDelete={() => handleRemoveGender(_gender)}
              className={classes.chip}
            />
          ))}
        </div>
      )}

      {category !== 'All' && (
        <div className={classes.block}>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.label}
          >
            Category:
          </Typography>
          <Chip
            size="small"
            label={category}
            onDelete={handleRemoveCategory}
            className={classes.chip}
          />
        </div>
      )}

      {colors.length > 0 && (
        <div className={classes.block}>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.label}
          >
            Colors:
          </Typography>
          {colors.map(color => (
            <Chip
              key={color}
              label={labelColor(color)}
              size="small"
              onDelete={() => handleRemoveColor(color)}
              style={{
                backgroundColor: color,
                color: theme.palette.getContrastText(color)
              }}
              className={clsx(classes.chip, {
                [classes.chipWhite]: color === '#FFFFFF' || color === '#000000'
              })}
            />
          ))}
        </div>
      )}

      {priceRange && (
        <div className={classes.block}>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.label}
          >
            Price:
          </Typography>

          <Chip
            size="small"
            label={labelPriceRange(priceRange)}
            onDelete={handleRemovePrice}
            className={classes.chip}
          />
        </div>
      )}

      {rating && (
        <div className={classes.block}>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.label}
          >
            Rating:
          </Typography>
          <Chip
            size="small"
            label={sentenceCase(rating)}
            onDelete={handleRemoveRating}
            className={classes.chip}
          />
        </div>
      )}

      {isShow && (
        <MButton
          color="error"
          size="small"
          type="button"
          onClick={onResetFilter}
          startIcon={<Icon icon={roundClearAll} />}
        >
          Clear All
        </MButton>
      )}
    </div>
  );
}

export default ChipFiltered;
