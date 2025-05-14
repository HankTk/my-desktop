// eslint-disable-next-line no-use-before-define
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FxContainer} from '../../styles/GlobalStyle';
import FxCommonContainer from "../../Container/FxCommon/FxCommonContainer";
import FxCommonPageTitle from "../../Container/FxCommon/FxCommonPageTitle";
import FxCommonPageMenu from "../../Container/FxCommon/FxCommonPageMenu";
import {INavigate} from '../../@types/navigate';

export function GoogleMapsContainer() {

    const pageTitle = 'Google Maps';

    const navigate = useNavigate();
    useEffect (()=> {
        navigate({ pathname: '/home/googlemaps/googlemapsview'});
    }, [])


    const [showMenu, setToggleMenu] = useState(true);
    const onClickToggle = (e: any) => {
        setToggleMenu(!showMenu);
    }

    const menuData: INavigate[] = [
        {id: '1', route: `/home/googlemaps/googlemapsview`, title: 'Google Maps'},
        {id: '2', route: `/home/googlemaps/maps`,           title: 'My Map'}
    ];

    const menuList= <FxCommonPageMenu menuData={menuData}/>

    return (
        <FxContainer>

            {/* Page Title */}
            <FxCommonPageTitle pageTitle={pageTitle} showMenu={showMenu} onClickToggle={onClickToggle}/>

            {/* Page Content */}
            <FxCommonContainer showMenu={showMenu} menuList={menuList}/>

        </FxContainer>
    )

}

