import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Profile from '../../Icons/Profile'


import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    nestedSecondLevel: {
        paddingLeft: theme.spacing(8)
    }
}));

export default function Sidebar() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSecondLevel, setOpenSecondLevel] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickSecondLevel = () => {
        setOpenSecondLevel(!openSecondLevel);
    };
    return (
        <div className="sidebar-main">
            <div className='flex col sidebar-main__menu'>
                <div className='flex gap-4'>

                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.root}
                    >
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Manage Profile" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={handleClickSecondLevel}
                                >
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>

                                    <InertiaLink
                                        className="nounderline"
                                        href={route('profile')}
                                    >
                                        <ListItemText primary="My Profile" />
                                    </InertiaLink>

                                    {/* <ListItemText primary="View Profile" /> */}
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <ListItemText primary="Edit Profile" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Manage User" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={handleClickSecondLevel}
                                >
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>

                                    <InertiaLink
                                        className="nounderline"
                                    //href={route('profile')}
                                    >
                                        <ListItemText primary="Pending User" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <ListItemText primary="Approved User" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </div>

            </div>
        </div>
    )
}
