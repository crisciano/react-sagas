import React, { Fragment } from 'react'
import{ compose }from 'recompose'

import { obj, bool } from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuUi from '@material-ui/core/Menu';

import { Link, useHistory } from 'react-router-dom'
import routes from '../../routes/routes'

import withRedux from '../../redux/withRedux'

const styles = {
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
};


const Menu = ({
    classes,
    isAuthenticated
}) => {

    const [anchorEl , setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const handleClose = () => { setAnchorEl(null)};
    const handleMenu = event => { setAnchorEl(event.currentTarget) }
    const history = useHistory();

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
                                    route.visible ?
                                        <MenuItem  key={key}>
                                            <Link to={route.path}> 
                                                {route.displayName}
                                            </Link> 
                                        </MenuItem> 
                                    : null
                                    )
                                }
                            </MenuUi>

                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        {
                            !isAuthenticated ?
                                <Button color="inherit" onClick={() => history.push('login') }>Login</Button>
                                :null
                        }
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

Menu.prototype = {
    classes: obj,
    isAuthenticated: bool
}

export default compose(
    withStyles(styles),
    withRedux(state=> ({ isAuthenticated: state.user.isAuthenticated}) )
)(Menu)