import { makeStyles } from '@mui/styles';
export default makeStyles(theme => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `10px`,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#D9E1E7',
      },
      '&:hover fieldset': {
        borderColor: '#D9E1E7',
      },
    },
  },
}))