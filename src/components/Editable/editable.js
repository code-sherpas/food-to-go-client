import React from 'react';
import {
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  IconButton,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import checkIfEmpty from '~/utils/validation';

const useStyles = makeStyles(theme => ({
  root: {},
  iconButton: {
    marginRight: 0
  },
  errorText: {
    color: 'red',
    opacity: 0.7
  }
}));

function Editable({ logEntry }) {
  const classes = useStyles();
  const [editMode, setEditMode] = React.useState(false);
  const [editedLogEntry, setEditedLogEntry] = React.useState(logEntry);
  const [showError, setShowError] = React.useState(false);

  const handleEditModeClick = () => {
    setEditMode(true);
  };

  const handleEditModeSaveClick = () => {
    if (checkIfEmpty(editedLogEntry)) {
      setShowError(true);
    } else {
      setEditMode(false);
      setShowError(false);
    }
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={1}
      >
        <ListItem sx={{ p: 1 }}>
          <ListItemText>
            {editMode ? (
              <TextField
                fullWidth={true}
                value={editedLogEntry}
                defaultValue={logEntry}
                onChange={e => setEditedLogEntry(e.target.value)}
              >
                {logEntry}{' '}
                {showError ? (
                  <Typography
                    align="center"
                    sx={{ mt: 2 }}
                    className={classes.errorText}
                  >
                    Field cannot be empty
                  </Typography>
                ) : (
                  <></>
                )}
              </TextField>
            ) : (
              <p fullWidth={true} value={editedLogEntry}>
                {editedLogEntry}
              </p>
            )}
          </ListItemText>

          {editMode ? (
            <Button sx={{ ml: 2 }} onClick={handleEditModeSaveClick}>
              Save
            </Button>
          ) : (
            <ListItemIcon className={classes.iconButton} sx={{ m: 0 }}>
              <IconButton onClick={handleEditModeClick}>
                <EditIcon />
              </IconButton>
            </ListItemIcon>
          )}
        </ListItem>
      </Box>
      {showError ? (
        <Typography align="center" sx={{ mt: 1 }} className={classes.errorText}>
          Field cannot be empty
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Editable;
