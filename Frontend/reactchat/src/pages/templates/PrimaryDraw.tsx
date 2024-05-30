import { Draw } from '@mui/icons-material'
import React, { useEffect, useState, ReactNode } from 'react'
import { Box, useMediaQuery, Typography,styled } from "@mui/material";
import { useTheme } from '@emotion/react';
import DrawerToggle from '../../components/PrimaryDraw/DrawToggle';
import { easing } from '@mui/material/styles/createTransitions';
import MuiDrawer from "@mui/material/Drawer"
// import styled from '@emotion/styled/macro';

type Props = {
  children: ReactNode;
};


type ChildProps = {
  open: Boolean;
};

type ChildElement = React.ReactElement<ChildProps>;

const PrimaryDraw: React.FC<Props> = ({ children }) => {
  const below600 = useMediaQuery("(max-width:599px)")
  const theme = useTheme()
  const [open, setOpen] = useState(!below600)

  const openedMixin = () => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  })

  const closedMixin = () => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    width: theme.primaryDraw.closed,
  })

  const Drawer = styled(
    MuiDrawer, 
    {}
  )(({ theme, open}) => ({
    width: theme.primaryDraw.width,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(),
      "& . MuiDrawer-paper": openedMixin(),
    }),
    ...(!open && {
      ...closedMixin(),
      "& . MuiDrawer-paper": closedMixin(),
    }),
  }))



  useEffect(() => {
    setOpen(!below600)
  }, [below600])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }




  return (
    <Drawer
     open={open} 
     variant={below600 ? "temporary" : "permanent"}
     PaperProps={{
        sx: {
          mt: `${theme.primaryAppBar.height}px`,
          height: `calc(100vh - ${theme.primaryAppBar.height}px )` ,
          width:  theme.primaryDraw.width,
          }
      }}
      >
      <Box>
        <Box sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 0,
          width: open ? "auto" : "100%",
          }}
        >
          <DrawerToggle 
          open={open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen} />

          

          
        </Box>
        {React.Children.map(children, (child) => {
            return React.isValidElement(child)
            ? React.cloneElement(child as ChildElement, { open })
            : child;
          })}
      </Box>
    </Drawer>

  )
}

export default PrimaryDraw