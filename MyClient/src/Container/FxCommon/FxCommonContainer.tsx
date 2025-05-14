import {FxContent, FxFullContent} from "../../pages/GoogleMapsContainer/GoogleMapsContainer.styles";
import {FxVBox, FxVBoxMenu} from "../../styles/GlobalStyle";
import {Outlet} from "react-router-dom";
import {Component} from "react";

export default class FxCommonContainer extends Component<{ showMenu: any, menuList: any }> {

    render() {

        const {showMenu, menuList} = this.props;

        const content = (showMenu) ?
            <FxContent>
                <FxVBoxMenu>
                    {menuList}
                </FxVBoxMenu>
                <FxVBox>
                    <Outlet/>
                </FxVBox>
            </FxContent>
            :
            <FxFullContent>
                <FxVBox>
                    <Outlet/>
                </FxVBox>
            </FxFullContent>

        return (
            <>
                {content}
            </>
        )
    }

}

