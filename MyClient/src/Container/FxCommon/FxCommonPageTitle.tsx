import {FxTitlePage} from "../../styles/GlobalStyle";
import {Component} from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

export default class FxCommonPageTitle extends Component<{ pageTitle: string, showMenu: any, onClickToggle: any }> {

    render() {

        const {pageTitle, showMenu, onClickToggle} = this.props;

        const toggleIcon = (showMenu) ? <ChevronLeft/> : <ChevronRight/>

        return (
            <FxTitlePage>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={onClickToggle}
                    style={{position: 'relative', top: '-10px'}}>
                    {toggleIcon}
                </IconButton>
                <Typography
                    variant={'h6'}
                    component="div"
                    sx={{flexGrow: 1}}
                    style={{height: '100%', marginLeft: '16px'}}>
                    {pageTitle}
                </Typography>
            </FxTitlePage>
        )
    }

}

