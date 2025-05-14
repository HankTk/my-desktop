import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link } from "react-router-dom";
import {INavigate} from "../../@types/navigate";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export function FxDrawerMenu() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const openInNewTab = (url: string, name: string | undefined) => {
        window.open(url, name, 'width=1700, height=1024, left=600, top=300');
    };
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const linkItems: INavigate[] = [
        {id: '1', route: `http://developer.mozilla.org/en-US/`, title: 'MDN', name: 'mdn'},
        {id: '2', route: `http://clarity.design/`, title: 'Clarity', name: 'clarity'},
        {id: '3', route: `http://react.dev/`, title: 'React', name: 'react'},
        {id: '4', route: `https://github.com/sudheerj/reactjs-interview-questions`, title: 'Interview', name: 'interview'},
        {id: '5', route: `https://www.electronjs.org/`, title: 'Electron', name: 'electron'},
    ];

    const linkMenu =
        linkItems.map((linkItem, index) => (
            <ListItem key={linkItem.id} disablePadding>
                <ListItemButton style={{color: 'blue'}}
                onClick={() => openInNewTab(linkItem.route, linkItem.name)}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={linkItem.title} />
                </ListItemButton>
            </ListItem>
        ));

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }} style={{height: 'calc(100vh - 290px)'}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>

            <List>

                <ListItem disablePadding component={Link} to={`/home/components`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Component'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding component={Link} to={`/home/charts`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Charts'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding component={Link} to={`/home/youtube`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'YouTube'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding component={Link} to={`/home/webgl`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'WebGL'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding component={Link} to={`/home/googlemaps`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Google Maps'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding component={Link} to={`/home/accounts`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Accounts'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding component={Link} to={`/home/canvas`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Canvas'} />
                    </ListItemButton>
                </ListItem>

            </List>

            <Divider />

            <List>
                <ListItem disablePadding component={Link} to={`/home/external/tetris`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Tetris'} />
                    </ListItemButton>
                </ListItem>

                {/* Link Menu */}
                {linkMenu}

            </List>

        </Box>
    );

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={toggleDrawer('left', true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    );

}
