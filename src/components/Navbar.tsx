import React, { FC, ReactElement } from "react";
import {
    Box,
    Link,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

const Navbar: FC = (): ReactElement => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                color: "black",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "sans-serif"
                        }}
                    >
                        Food Commerce App
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {routes.map((page) => (
                                <Link
                                    key={page.key}
                                    component={NavLink}
                                    to={page.path}
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    style={{
                                        fontFamily: "sans-serif"
                                    }}
                                >
                                    <MenuItem sx={{ fontFamily: "sans-serif"}} style={{ fontFamily: "sans-serif"}} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{ fontFamily: "sans-serif"}} style={{ fontFamily: "sans-serif"}}>{page.title}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                        React Starter App
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                marginLeft: "1rem",
                            }}
                        >
                            {routes.map((page) => (
                                <Link
                                    key={page.key}
                                    component={NavLink}
                                    to={page.path}
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    sx={{ fontSize: "large", marginLeft: "2rem", textTransform: "none", fontFamily: "sans-serif" }}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Link 
                        to={"/shopping-cart"} 
                        color="black"
                        underline="none"
                        variant="button"
                        component={NavLink}
                        sx={{fontFamily: "sans-serif"}}
                    >Shopping Cart</Link>
                    
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Navbar;