import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import { Stack, Button, TextField,InputAdornment, Box} from "@mui/material";


function App() {
  return (
    

    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
     
     {/* <Typography variant="h1">Masum Billah</Typography>
      <Typography variant="h2">Masum Billah</Typography>
      <Typography variant="h3">Masum Billah</Typography>
      <Typography variant="h4" component='h1' gutterBottom >Masum Billah</Typography>
      <Typography variant="h5">Masum Billah</Typography>
      <Typography variant="h6">Masum Billah</Typography>
      <Typography variant="subtitle1">Subtitle-1</Typography>
      <Typography variant="subtitle2">Subtitle-1</Typography>
      <Typography variant="body1">In the name of Allah In the name of Allah In the name of Allah </Typography>
      <Typography variant="body2">In the name of Allah In the name of Allah In the name of Allah</Typography>
 */}
    {/* Button */}
      <Button variant="text" href="https://www.google.com" >TEXT</Button>
      <Button variant="contained" >Contained</Button>
      <Button variant="outlined" >Outlined</Button>

    </Stack>
    {/* Button color */}
    <Stack spacing={2} direction='row'>
     <Button variant="contained" color="primary">Primary</Button>
     <Button variant="contained" color="secondary">Secondery</Button>
     <Button variant="contained" color="warning">warning</Button>
     <Button variant="contained" color="error">Error</Button>
     <Button variant="contained" color="info">info</Button>
     <Button variant="contained" color="success">success</Button>
    </Stack>

    {/* Button Size */}
    <Stack display="block" spacing={2} direction="row" >
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Small</Button>
      <Button variant="contained" size="large">Small</Button>
    </Stack>
      
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined">Name</TextField>
        <TextField label="name" variant="filled">Name</TextField>
        <TextField label="name" variant="standard">Name</TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="small secondary" size="small" color="secondary" >Name</TextField>
        
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label ="form Input" required>Name</TextField>
        <TextField label ="Amount" InputProps={{
          startAdornment:<InputAdornment position="start">$</InputAdornment>,
        }}>Name</TextField>
         <TextField label ="Weight" InputProps={{
          endAdornment:<InputAdornment position="end">KG</InputAdornment>,
        }}>Name</TextField>
        <TextField label ="Read Only" InputProps={{readonly:true}}>Name</TextField>
        <TextField label ="password" type="password" helperText="Don not share your password" disabled>Name</TextField>
      </Stack>
    <Box>
      
    </Box>
    </Stack>
    
  );
}

export default App;
