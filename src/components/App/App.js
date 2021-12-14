import React,{ useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import './App.css';



function App() {


  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState("")

  const onSubmitHandler= async () => {
    const requestBody = {height,weight}
    try {
      const response = await axios.post('/bmi',requestBody)
      setBmi(response.data.bmi.toFixed(2))
    } catch (error) {
      setBmi("Error Try Again")
    }

  }

  const onResetHandler = ()=>{
    setHeight("")
    setWeight("")
    setBmi("")
  }

  
  return (
    <div className="main">
    <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h3">
            Enter your weight and height to calculate your BMI
          </Typography>
        </Grid>
        <Grid item>
        <TextField
          required
          label="Height (cm)"
          type="number"
          onChange={(e)=>setHeight(e.target.value)}
          value={height}
        />
        </Grid>
        <Grid item>
        <TextField
          required
          label="Weight (kg)"
          type="number"
          onChange={(e)=>setWeight(e.target.value)}
          value={weight}
        />
        </Grid>
        <Grid container item direction="row" justifyContent="center" spacing={2}>
        <Grid item>
        <Button onClick={onSubmitHandler} variant="contained">
           Calculate
        </Button>
        </Grid>
        <Grid item>
        <Button onClick={onResetHandler} variant="contained">
          Reset Values
        </Button>
        </Grid>
        </Grid>
        {
          bmi &&
        <Grid item>
          <Typography variant="body1">You BMI is {bmi}</Typography>
        </Grid>
        }
    </Grid>
    </div>
  );
}


export default App;
