import React from "react";
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from '../../styles/SearchInput'

export default function SearchInput({ onChange, value, name, onKeyUp, onClick }) {
  const classes = useStyles();

  return (
    <TextField
      variant='outlined'
      autoComplete='off'
      name={name}
      value={value}
      onChange={onChange}
      className={classes.root}
      label={'Search'}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={onClick} className={'d-flex align-items-center'} style={{ height: '32px', width: '32px' }}>
              <SearchIcon style={{ color: "#809FB8", fontSize: 20 }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onKeyUp={onKeyUp}
      size='small'
    />
  );
}
