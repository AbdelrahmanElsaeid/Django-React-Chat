import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import PrimaryAppBar from './templates/PrimaryAppBar'
import PrimaryDraw from './templates/PrimaryDraw'
import SecondaryDraw from './templates/SecondaryDraw'
import Main from './templates/Main'

function Home() {
  



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
        <PrimaryAppBar />
          <PrimaryDraw></PrimaryDraw>
          <SecondaryDraw />
          <Main />

    </Box>
  )
}

export default Home