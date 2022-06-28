//import React, { Component } from 'react';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//import './custom.css'

//export default class App extends Component {
//    static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//            <Route path='/fetch-data' component={FetchData} />
//        </Layout>
//    );
//  }
//}



import React, { useState, useEffect } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import PropTypes from 'prop-types';
import { HomeRounded, ComputerRounded, DashboardRounded, InfoRounded } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { StaticRouter } from "react-router-dom";

//import styled from "styled-components";

//const StyledAppBar = styled(AppBar)
//    ` &&
//{
//    background-color: rgb(5, 128, 5);
//    color: #ff99a0;
//    font-size: 1rem;
//    font-weight: 800;
//}
//`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other} >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        //id: `nav-tab-${index}`,
        //'aria-controls': `nav-tabpanel-${index}`,
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TopHeader()  {
    const [value, setValue] = React.useState(0);
    const [pageURL, setPageURL] = React.useState(0);
    const classes = useStyles();

    useEffect(() => {
        //setPageURL("https://localhost:7087/swagger/");
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    //type: prefersDarkMode ? 'dark' : 'light',
                    type: 'dark',
                },
            }),
        //[prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*<div className={classes.root}>*/}
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                    <Tab label="Home" icon={<HomeRounded />} />
                    <Tab label="Send" icon={<ComputerRounded />} />
                    <Tab label="Profile" icon={<DashboardRounded />} />
                    <LinkTab label="스웩" icon={<InfoRounded />} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Route exact path='/' component={Home} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Route path='/' component={Counter} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Route path='/' component={FetchData} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <li><strong><a href='https://localhost:7087/swagger/' target="_blank">스웩</a></strong></li>
            </TabPanel>
            {/*</div>*/}
        </ThemeProvider>
    );
};



//import React from 'react';
//import clsx from 'clsx';
//import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
//import InputBase from '@material-ui/core/InputBase';
//import Badge from '@material-ui/core/Badge';
//import MenuItem from '@material-ui/core/MenuItem';
//import Menu from '@material-ui/core/Menu';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import MailIcon from '@material-ui/icons/Mail';
//import NotificationsIcon from '@material-ui/icons/Notifications';
//import MoreIcon from '@material-ui/icons/MoreVert';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import { createTheme, ThemeProvider } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import SendIcon from '@material-ui/icons/Send';
//import Drawer from '@material-ui/core/Drawer';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
//import List from '@material-ui/core/List';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import { Route } from 'react-router';
//import { Home } from './components/Home';
//import { Button } from '@material-ui/core';

//const drawerWidth = 240;

//const useStyles = makeStyles((theme) => ({
//    grow: {
//        flexGrow: 1,
//    },
//    menuButton: {
//        marginRight: theme.spacing(2),
//    },
//    title: {
//        display: 'none',
//        [theme.breakpoints.up('sm')]: {
//            display: 'block',
//        },
//    },
//    appBar: {
//        transition: theme.transitions.create(['margin', 'width'], {
//            easing: theme.transitions.easing.sharp,
//            duration: theme.transitions.duration.leavingScreen,
//        }),
//    },
//    appBarShift: {
//        width: `calc(100% - ${drawerWidth}px)`,
//        marginLeft: drawerWidth,
//        transition: theme.transitions.create(['margin', 'width'], {
//            easing: theme.transitions.easing.easeOut,
//            duration: theme.transitions.duration.enteringScreen,
//        }),
//    },
//    search: {
//        position: 'relative',
//        borderRadius: theme.shape.borderRadius,
//        backgroundColor: alpha(theme.palette.common.white, 0.15),
//        '&:hover': {
//            backgroundColor: alpha(theme.palette.common.white, 0.25),
//        },
//        marginRight: theme.spacing(2),
//        marginLeft: 0,
//        width: '100%',
//        [theme.breakpoints.up('sm')]: {
//            marginLeft: theme.spacing(3),
//            width: 'auto',
//        },
//    },
//    searchIcon: {
//        padding: theme.spacing(0, 2),
//        height: '100%',
//        position: 'absolute',
//        pointerEvents: 'none',
//        display: 'flex',
//        alignItems: 'center',
//        justifyContent: 'center',
//    },
//    inputRoot: {
//        color: 'inherit',
//    },
//    inputInput: {
//        padding: theme.spacing(1, 1, 1, 0),
//        // vertical padding + font size from searchIcon
//        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//        transition: theme.transitions.create('width'),
//        width: '100%',
//        [theme.breakpoints.up('md')]: {
//            width: '20ch',
//        },
//    },
//    sectionDesktop: {
//        display: 'none',
//        [theme.breakpoints.up('md')]: {
//            display: 'flex',
//        },
//    },
//    sectionMobile: {
//        display: 'flex',
//        [theme.breakpoints.up('md')]: {
//            display: 'none',
//        },
//    },
//    hide: {
//        display: 'none',
//    },
//    drawer: {
//        width: drawerWidth,
//        flexShrink: 0,
//    },
//    drawerPaper: {
//        width: drawerWidth,
//    },
//    drawerHeader: {
//        display: 'flex',
//        alignItems: 'center',
//        padding: theme.spacing(0, 1),
//        // necessary for content to be below app bar
//        ...theme.mixins.toolbar,
//        justifyContent: 'flex-end',
//    },
//    content: {
//        flexGrow: 1,
//        padding: theme.spacing(3),
//        transition: theme.transitions.create('margin', {
//            easing: theme.transitions.easing.sharp,
//            duration: theme.transitions.duration.leavingScreen,
//        }),
//        marginLeft: 0,
//    },
//    contentShift: {
//        transition: theme.transitions.create('margin', {
//            easing: theme.transitions.easing.easeOut,
//            duration: theme.transitions.duration.enteringScreen,
//        }),
//        marginLeft: drawerWidth,
//    },
//}));

//export default function PrimarySearchAppBar() {
//    const classes = useStyles();
//    const [anchorEl, setAnchorEl] = React.useState(null);
//    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//    const [open, setOpen] = React.useState(false);

//    const handleDrawerOpen = () => {
//        setOpen(true);
//    };

//    const handleDrawerClose = () => {
//        setOpen(false);
//    };
//    const isMenuOpen = Boolean(anchorEl);
//    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//    const handleProfileMenuOpen = (event) => {
//        setAnchorEl(event.currentTarget);
//    };

//    const handleMobileMenuClose = () => {
//        setMobileMoreAnchorEl(null);
//    };

//    const handleMenuClose = () => {
//        setAnchorEl(null);
//        handleMobileMenuClose();
//    };

//    const handleMobileMenuOpen = (event) => {
//        setMobileMoreAnchorEl(event.currentTarget);
//    };

//    const menuId = 'primary-search-account-menu';
//    const renderMenu = (
//        <Menu
//            anchorEl={anchorEl}
//            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//            id={menuId}
//            keepMounted
//            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//            open={isMenuOpen}
//            onClose={handleMenuClose}
//        >
//            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//        </Menu>
//    );

//    const mobileMenuId = 'primary-search-account-menu-mobile';
//    const renderMobileMenu = (
//        <Menu
//            anchorEl={mobileMoreAnchorEl}
//            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//            id={mobileMenuId}
//            keepMounted
//            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//            open={isMobileMenuOpen}
//            onClose={handleMobileMenuClose}
//        >
//            <MenuItem>
//                <IconButton aria-label="show 4 new mails" color="inherit">
//                    <Badge badgeContent={4} color="secondary">
//                        <MailIcon />
//                    </Badge>
//                </IconButton>
//                <p>Messages</p>
//            </MenuItem>
//            <MenuItem>
//                <IconButton aria-label="show 11 new notifications" color="inherit">
//                    <Badge badgeContent={11} color="secondary">
//                        <NotificationsIcon />
//                    </Badge>
//                </IconButton>
//                <p>Notifications</p>
//            </MenuItem>
//            <MenuItem onClick={handleProfileMenuOpen}>
//                <IconButton
//                    aria-label="account of current user"
//                    aria-controls="primary-search-account-menu"
//                    aria-haspopup="true"
//                    color="inherit"
//                >
//                    <AccountCircle />
//                </IconButton>
//                <p>Profile</p>
//            </MenuItem>
//        </Menu>
//    );
//    //const theme = useTheme();
//    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//    const theme = React.useMemo(
//        () =>
//            createTheme({
//                palette: {
//                    type: 'dark',
//                },
//            }),
//        [prefersDarkMode],
//    );
//    return (
//        <div className={classes.grow}>
//            <ThemeProvider theme={theme}>
//                <CssBaseline />
//                    <AppBar position="fixed"
//                        className={clsx(classes.appBar, {
//                            [classes.appBarShift]: open,
//                        })} >
//                <Toolbar>
//                    <IconButton
//                                edge="start"
//                                className={clsx(classes.menuButton, open && classes.hide)}
//                                color="inherit"
//                                aria-label="open drawer"
//                                onClick={handleDrawerOpen} >
//                                <MenuIcon />
//                    </IconButton>
//                    <Typography className={classes.title} variant="h6" noWrap>
//                        Material-UI
//                    </Typography>
//                    <div className={classes.search}>
//                        <div className={classes.searchIcon}>
//                            <SearchIcon />
//                        </div>
//                        <InputBase
//                            placeholder="Search…"
//                            classes={{
//                                root: classes.inputRoot,
//                                input: classes.inputInput,
//                            }}
//                            inputProps={{ 'aria-label': 'search' }} />
//                        </div>
//                        <div className={classes.grow}>
//                            {/*<button color="default" > TEXT*/}
//                            {/*    <onclick>  </onclick>*/}
//                            {/*</button>*/}
//                        </div>
//                    <div className={classes.sectionDesktop}>
//                        <IconButton aria-label="show 4 new mails" color="inherit">
//                            <Badge badgeContent={4} color="secondary">
//                                <MailIcon />
//                            </Badge>
//                        </IconButton>
//                        <IconButton aria-label="show 17 new notifications" color="inherit">
//                            <Badge badgeContent={17} color="secondary">
//                                <NotificationsIcon />
//                            </Badge>
//                        </IconButton>
//                        <IconButton
//                            edge="end"
//                            aria-label="account of current user"
//                            aria-controls={menuId}
//                            aria-haspopup="true"
//                            onClick={handleProfileMenuOpen}
//                            color="inherit"
//                        >
//                            <AccountCircle />
//                        </IconButton>
//                    </div>
//                    <div className={classes.sectionMobile}>
//                        <IconButton
//                            aria-label="show more"
//                            aria-controls={mobileMenuId}
//                            aria-haspopup="true"
//                            onClick={handleMobileMenuOpen}
//                            color="inherit"
//                        >
//                            <MoreIcon />
//                        </IconButton>
//                    </div>
//                </Toolbar>
//            </AppBar>
//            {/*{renderMobileMenu}*/}
//                    {/*        {renderMenu}*/}
//                    <Drawer
//                        className={classes.drawer}
//                        variant="persistent"
//                        anchor="left"
//                        open={open}
//                        classes={{
//                            paper: classes.drawerPaper,
//                        }}
//                    >
//                        <div className={classes.drawerHeader}>
//                            <IconButton onClick={handleDrawerClose}>
//                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                            </IconButton>
//                        </div>
//                        <Divider />
//                        <List>
//                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                                <ListItem button key={text}>
//                                    {/*<onClick>{<Route exact path='/' component={Home} />}</onClick>*/}
//                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                    <ListItemText primary={text} />
//                                </ListItem>
//                            ))}
//                        </List>
//                        <Divider />
//                        <List>
//                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                                <ListItem button key={text}>
//                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                    <ListItemText primary={text} />
//                                </ListItem>
//                            ))}
//                        </List>
//                    </Drawer>
//                    <main
//                    className={clsx(classes.content, {
//                        [classes.contentShift]: open,
//                        })}
//                    >
//                    <div className={classes.drawerHeader} />
//                    <Typography paragraph>
//                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//                            donec massa sapien faucibus et molestie ac.
//                        </Typography>
//                        <Typography paragraph>
//                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
//                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
//                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
//                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
//                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
//                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
//                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
//                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
//                        </Typography>
//                    </main>
//                {/*</CssBaseline>*/}
//            </ThemeProvider>
//        </div>
//    );
//}
