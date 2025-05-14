import {FxLinkButtonPrimary} from "../../styles/GlobalStyle";
import {Component} from "react";
import {Link} from "react-router-dom";

export default class FxCommonPageMenu extends Component<{ menuData: any }> {

    render() {

        const {menuData} = this.props;

        const pageMenu = menuData.map((item: any)=>
            <FxLinkButtonPrimary>
                <Link
                    style={{color: '#1976d2'}}
                    to={{ pathname: item.route, search: `${item.search}` }}
                    key={item.id}>
                    {item.title}
                </Link>
            </FxLinkButtonPrimary>
        )

        return (
            <>
                {pageMenu}
            </>
        )
    }

}

