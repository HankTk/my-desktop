import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FxContainer} from './FxNavBar.styles'
import {FxHBox} from "../FxAppContainer/FxAppContainer.styles";
import {FxDrawerMenu} from '../FxDrawerMenu/FxDrawerMenu.component';
import {FxDrawerSetting} from '../FxDrawerSetting/FxDrawerSetting.component';

type NavBarProps = {
    title: string;
};

export function FxNavBar(props: NavBarProps) {

    return <FxContainer>

        <Box sx={{flexGrow: 1}}>

            <AppBar position="static">

                <Toolbar>
                    <FxHBox>

                        <FxHBox style={{alignItems: 'flex-start'}}>
                            <FxDrawerMenu />
                            <Typography variant={'h6'} component="div" sx={{flexGrow: 1}} style={{height: '100%', paddingTop: '8px'}}>
                                <Link to={`/home`} style={{color: 'white'}}>{'My Dashboard'}</Link>
                            </Typography>
                        </FxHBox>

                        <FxHBox style={{alignItems: 'flex-end'}}>
                            <div style={{width: '100%'}}></div>
                            <FxDrawerSetting />
                        </FxHBox>

                    </FxHBox>

                </Toolbar>

            </AppBar>

        </Box>

    </FxContainer>;

}
