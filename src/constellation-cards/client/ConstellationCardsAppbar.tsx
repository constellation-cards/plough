import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { map } from "ramda"
import React from "react"

import { presets } from "../default-state"
import { RoomActions } from "./ConstellationCardsGame"

interface ConstellationCardsAppbarProps {
    actions: RoomActions
    children?: React.ReactNode
}

export default ({ actions }: ConstellationCardsAppbarProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const onClickCreate: React.MouseEventHandler<HTMLElement> = (event) => {
        const collectionName = prompt("Enter a name for this spread")
        if (collectionName) {
            actions.createCollectionAction(
                collectionName,
                event.currentTarget.getAttribute("data-preset-name"),
                true
            )
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        CONSTELLATION CARDS
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
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
                            {map(
                                (preset) => (
                                    <MenuItem
                                        key={preset.name}
                                        data-preset-name={preset.name}
                                        onClick={onClickCreate}
                                    >
                                        <Tooltip title={preset.description}>
                                            <Typography textAlign={"center"}>
                                                {preset.name}
                                            </Typography>
                                        </Tooltip>
                                    </MenuItem>
                                ),
                                presets
                            )}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        CONSTELLATION CARDS
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {map(
                            (preset) => (
                                <Tooltip
                                    title={preset.description}
                                    key={preset.name}
                                >
                                    <Button
                                        data-preset-name={preset.name}
                                        onClick={onClickCreate}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {preset.name}
                                    </Button>
                                </Tooltip>
                            ),
                            presets
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
