import { AppBar, IconButton, Toolbar, Typography, Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react'
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"
import { useEffect, useState } from "react";
import ExploreCategories from "../../components/SecondaryDraw/ExploreCategories";
import AccountButton from "../../components/PrimaryAppBar/AccountButton";

const PrimaryAppBar = () => {
    const theme = useTheme();
    const [sideMenu, setSideMenu] = useState(false);

    const isSmallscreen = useMediaQuery(theme.breakpoints.up('sm'))

    useEffect(() => {
        if (isSmallscreen && sideMenu) {
            setSideMenu(false);
        }
    },[isSmallscreen]);

    const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ){
            return;
    }
        setSideMenu(open);
    };
    
    const list = () => (
        <Box sx={{paddingTop: `${theme.primaryAppBar.height}px`, minWidth: 200}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onkeydown={toggleDrawer(false)}>
                <ExploreCategories />

        </Box>
    )

    return  (
        <AppBar sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.divider}`,

             }}>
            <Toolbar variant="dense" sx={{ 
                height: theme.primaryAppBar.height,
                minHeight: theme.primaryAppBar.height,
                 }}>
                    <Box sx={{ display: {xs: "block", sm: "none"}}}>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2}} onClick={toggleDrawer(false)}>
                            <MenuIcon />

                        </IconButton>
                    </Box>
                    <Drawer anchor="left" open={sideMenu} >
                        {list()}


                    </Drawer>
                    <Link to="/"  underline="none" color="inherit">
                        <Typography
                            varient="h6"
                            noWrap
                            component="div" 
                            sx={{display:{fontWeight: 700, letterSpacing: "-0.5px"}}}
                            >
                            DJChat

                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1}}></Box>
                    <AccountButton />
                 </Toolbar>
        </AppBar>

    )
};

export default PrimaryAppBar;