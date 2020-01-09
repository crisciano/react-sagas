import React, { Fragment } from 'react'
import{ compose }from 'recompose'

import { obj } from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuUi from '@material-ui/core/Menu';

import { Link } from 'react-router-dom'
import routes from '../../routes'

const styles = {
    root: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
    }
};


const Menu = ({
    classes
}) => {

    const [anchorEl , setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const handleClose = () => { setAnchorEl(null)};
    const handleMenu = event => { setAnchorEl(event.currentTarget) }

    return (
        <div >
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Fragment >
                                <MenuIcon onClick={handleMenu} />
                            </Fragment>
                            {/* <IconButton
                                onClick={handleMenu}>
                            </IconButton> */}
                            <MenuUi
                                id="menu-appbar"
                                elevation={0}
                                getContentAnchorEl={null}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                { routes.map((route, key) => 
                                        <MenuItem  key={key}>
                                            <Link to={route.path}> 
                                                {route.displayName}
                                            </Link> 
                                        </MenuItem> 
                                    )
                                }
                            </MenuUi>

                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

    Menu.prototype = {
    classes: obj
}

export default compose(
    withStyles(styles)
)(Menu)