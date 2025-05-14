import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FxContainer} from '../../styles/GlobalStyle'
import FxCommonPageTitle from "../../Container/FxCommon/FxCommonPageTitle";
import FxCommonContainer from "../../Container/FxCommon/FxCommonContainer";
import FxCommonPageMenu from "../../Container/FxCommon/FxCommonPageMenu";
import {INavigate} from '../../@types/navigate';

export function WebGLContainer() {

    const pageTitle = 'WebGL';

    const navigate = useNavigate();
    useEffect (()=> {
        navigate({pathname: '/home/webgl/webglview', search: 'basic'});
    }, [])

    const [showMenu, setToggleMenu] = useState(true);
    const onClickToggle = (e: any) => {
        setToggleMenu(!showMenu);
    }

    const menuData: INavigate[] = [
        {id: '1', route: `/home/webgl/webglview`, title: 'Basic', search: 'basic'},
        {id: '2', route: `/home/webgl/webglview`, title: 'Car',   search: 'car'},
        {id: '3', route: `/home/webgl/webglview`, title: 'Color', search: 'color'},
        {id: '4', route: `/home/webgl/webglview`, title: 'Room',  search: 'room'},
        {id: '5', route: `/home/webgl/webgldemo`, title: 'Demo',  search: 'demo'}
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

