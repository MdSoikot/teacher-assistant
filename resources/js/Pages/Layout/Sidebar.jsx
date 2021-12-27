import { InertiaLink } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
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
    const [open, setOpen] = useState({});
    const [openSecondLevel, setOpenSecondLevel] = useState(true);

    const handleOpen = (item) => {
        setOpen(oldValues => ({
            ...oldValues,
            [item]: !open[item],
        }));
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
                        {/* .........Manage Profile Start.......... */}
                        <ListItem button onClick={() => handleOpen("manage_profile")}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Manage Profile" />
                            {open?.manage_profile ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open?.manage_profile} timeout="auto" unmountOnExit>
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

                        </Collapse>
                        {/* .........Manage Profile End.......... */}

                        {/* .........Manage User Start.......... */}
                        <ListItem button onClick={() => handleOpen("manage_user")}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Manage User" />
                            {open?.manage_user ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open?.manage_user} timeout="auto" unmountOnExit>
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
                                        href={route('pending_user')}
                                    >
                                        <ListItemText primary="Pending User" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                        href={route('approved_user')}
                                    >
                                        <ListItemText primary="Approved User" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* .........Manage User End.......... */}

                        {/* .........Manage Course Start.......... */}
                        <ListItem button onClick={() => handleOpen("manage_course")}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Manage Course" />
                            {open?.manage_course ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open?.manage_course} timeout="auto" unmountOnExit>
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
                                        href={route('view_course')}
                                    >
                                        <ListItemText primary="View Course" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                        href={route('course')}
                                    >
                                        <ListItemText primary="Add Course" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* .........Manage Course End............ */}

                        {/* .........Manage Manage Substitute Teacher Start.......... */}
                        <ListItem button onClick={() => handleOpen("manage_sub_teacher")}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Manage Subs. Teacher" />
                            {open?.manage_sub_teacher ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open?.manage_sub_teacher} timeout="auto" unmountOnExit>
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
                                    //href={route('pending_user')}
                                    >
                                        <ListItemText primary="View Subs. Teacher" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                    //href={route('approved_user')}
                                    >
                                        <ListItemText primary="Add Substitue Teacher" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* .........Manage Substitute Teacher End............ */}

                        {/* .........Generate Report Start.......... */}
                        <ListItem button onClick={() => handleOpen("generate_report")}>
                            <ListItemIcon>
                                <Profile className="sidebar-svg" />
                            </ListItemIcon>
                            <ListItemText primary="Generate Report" />
                            {open?.generate_report ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open?.generate_report} timeout="auto" unmountOnExit>
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
                                    //href={route('pending_user')}
                                    >
                                        <ListItemText primary="Mark Sheet" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                    //href={route('approved_user')}
                                    >
                                        <ListItemText primary="Student List" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                    //href={route('approved_user')}
                                    >
                                        <ListItemText primary="Course Outline" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                    //href={route('approved_user')}
                                    >
                                        <ListItemText primary="Class Routine" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} onClick={handleClickSecondLevel}>
                                    <ListItemIcon>
                                        <StarBorder className="sidebar-svg" />
                                    </ListItemIcon>
                                    <InertiaLink
                                        className="nounderline"
                                    //href={route('approved_user')}
                                    >
                                        <ListItemText primary="Subs. Teacher List" />
                                    </InertiaLink>
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* .........Generate Report End............ */}
                    </List>
                </div>

            </div>
        </div>
    )
}
