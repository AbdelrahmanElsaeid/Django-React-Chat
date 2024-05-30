import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import useAxiosWithInterceptor from "../../helpers/jwtinterceptor";

type SecondaryDrawProps = {
    children: React.ReactNode;
};
const SecondaryDraw = ({ children }: SecondaryDrawProps) => {
    const theme = useTheme();
    

    return ( 
    <Box
        sx={{minWidth: `${theme.secondaryDraw.width}px`,
        height: `calc(100vh - ${theme.primaryAppBar.height}px )` ,
        mt: `${theme.primaryAppBar.height}px`,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: { xs: "none", sm:"block"},
        overflow: "auto", 


}}>
    {children}
</Box>
);
};

export default  SecondaryDraw;