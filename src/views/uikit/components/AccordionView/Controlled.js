import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import arrowIosDownwardFill from '@iconify-icons/eva/arrow-ios-downward-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  heading: {
    flexShrink: 0,
    flexBasis: '33.33%'
  }
}));

// ----------------------------------------------------------------------

function Controlled({ accordions }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {accordions.map(item => (
        <Accordion
          key={item.value}
          expanded={expanded === item.value}
          onChange={handleChange(item.value)}
        >
          <AccordionSummary
            expandIcon={
              <Icon icon={arrowIosDownwardFill} width={20} height={20} />
            }
          >
            <Typography variant="subtitle1" className={classes.heading}>
              {item.heading}
            </Typography>
            <Typography color="textSecondary" noWrap>
              {item.subHeading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default Controlled;
