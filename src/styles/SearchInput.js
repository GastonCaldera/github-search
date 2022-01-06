import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `10px`,
        borderColor: '#03e0a9'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#03e0a9',
      },
      '&:hover fieldset': {
        borderColor: '#03e0a9',
      },
    },
    '& .MuiInputLabel-root': {
      '&.Mui-focused': {
        color: "#03e0a9"
      }
    }

  },
  input: {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    color: "#3E3F42",
    borderRadius: "10px",
    height: "40px",
    marginTop: "0.9px",
  },
}))