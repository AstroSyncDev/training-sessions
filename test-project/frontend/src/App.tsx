import { ThemeProvider } from "@emotion/react"
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import theme from "./theme"

// function App() {
//   const [counter, setCounter] = useState(1)

//   const handleClick = () => {
//     setCounter(counter + 1)
//     console.log(counter)
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Increase count</button>
//       {counter}
//     </div>
//   )
// }

const HeroSection = () => {
  return (
    <Grid container flexDirection={'column'} minHeight={'70vh'} bgcolor={'green'} justifyContent={'center'} alignItems={'center'}
      gap={3}
    >
      <Grid container flexDirection={'column'} alignItems={'center'} gap={1}>
        <Grid>
          <Typography variant="h4" textAlign={'center'}>live organic for live healthy</Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" textAlign={'center'}>ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR</Typography>
        </Grid>
      </Grid>

      <Grid>
        <Button variant="contained">Purchase</Button>
      </Grid>
    </Grid>
  )
}

const MenuSection = () => {
  return (
    <Grid container flexDirection={'column'} minHeight={'70vh'} alignItems={'center'} justifyContent={'center'} gap={8}>
      <Grid container flexDirection={'column'} alignItems={'center'} gap={1}>
        <Grid>
          <Typography variant="h4" textAlign={'center'}>Organic Food Menu</Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" textAlign={'center'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography>
        </Grid>
      </Grid>

      <Grid>
        <Typography>divider</Typography>
      </Grid>

      <Grid container flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        <Grid size={'grow'} bgcolor={'yellow'}>
          <Typography>Card 1</Typography>
        </Grid>
        <Grid size={'grow'} bgcolor={'yellow'}>
          <Typography>Card 2</Typography>
        </Grid>
        <Grid size={'grow'} bgcolor={'yellow'}>
          <Typography>Card 3</Typography>
        </Grid>
        <Grid size={'grow'} bgcolor={'yellow'}>
          <Typography>Card 4</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

function App() {
  return (
    <Grid container flexDirection={'column'} minHeight={'100vh'} overflow={'auto'}>
      <Grid>
        <HeroSection />
      </Grid>
      <Grid>
        <MenuSection />
      </Grid>
    </Grid>
  )
}


// function Sandwich() {

//   return (
//     <div style={{ padding: 10 }}>
//       <input type="text" onChange={handleInput} />
//       <p>Your name is: {name}</p>
//     </div>
//   )
// }

// function App() {
//   const [name, setName] = useState('')
//   // var name = ''

//   const handleInput = (el) => {
//     console.log(el.target.value)
//     // name = el.target.value
//     setName(el.target.value)
//   }

//   return (
//     <div style={{ padding: 10 }}>
//       <input type="text" onChange={handleInput} />
//       <p>Your name is: {name}</p>
//     </div>
//   )
// }

export default App
