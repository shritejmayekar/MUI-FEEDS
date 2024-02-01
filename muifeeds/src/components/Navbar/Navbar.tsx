import { CodeOutlined, Mail, MailOutline, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px"

}))
const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    SM DEV
                </Typography>
                <CodeOutlined sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="Search" /></Search>
                <Icons>

                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                <Avatar sx={{width:30,height:30}}>S</Avatar>
                </Icons>

            </StyledToolbar>

        </AppBar>
    )
}

export default Navbar
