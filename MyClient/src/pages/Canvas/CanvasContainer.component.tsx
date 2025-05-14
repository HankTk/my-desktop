import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FxContainer} from '../../styles/GlobalStyle'
import FxCommonPageTitle from "../../Container/FxCommon/FxCommonPageTitle";
import FxCommonContainer from "../../Container/FxCommon/FxCommonContainer";
import FxCommonPageMenu from "../../Container/FxCommon/FxCommonPageMenu";
import {INavigate} from '../../@types/navigate';

export function CanvasContainer() {

    const pageTitle = 'Canvas';

    const navigate = useNavigate();
    useEffect (()=> {
        navigate({pathname: '/home/canvas/canvasclock1', search: 'clock'});
    }, [])

    const [showMenu, setToggleMenu] = useState(true);
    const onClickToggle = (e: any) => {
        setToggleMenu(!showMenu);
    }

    const menuData: INavigate[] = [
        {id: '1', route: `/home/canvas/canvasclock1`, title: 'Clock 1',  search: 'clock'},
        {id: '2', route: `/home/canvas/canvasclock2`, title: 'Clock 2',  search: 'clock'},
        {id: '3', route: `/home/canvas/diagram`,    title: 'Diagram',    search: 'diagram'}
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

