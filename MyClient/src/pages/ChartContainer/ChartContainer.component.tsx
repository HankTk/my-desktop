// eslint-disable-next-line no-use-before-define
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FxContainer} from '../../styles/GlobalStyle';
import FxCommonPageTitle from "../../Container/FxCommon/FxCommonPageTitle";
import FxCommonContainer from "../../Container/FxCommon/FxCommonContainer";
import FxCommonPageMenu from "../../Container/FxCommon/FxCommonPageMenu";
import {INavigate} from '../../@types/navigate';

export function ChartContainer() {

    const pageTitle = 'Charts';

    const navigate = useNavigate();
    useEffect (()=> {
        navigate({ pathname: '/home/charts/scatter', search: 'Scatter' });
    }, [])

    const [showMenu, setToggleMenu] = useState(true);
    const onClickToggle = (e: any) => {
        setToggleMenu(!showMenu);
    }

    const menuData: INavigate[] = [
        {id: '1', route: `/home/charts/scatter`, title: 'Scatter'},
        {id: '2', route: `/home/charts/line`,    title: 'Line'},
        {id: '3', route: `/home/charts/demo`,    title: 'Demo'},
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

