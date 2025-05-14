import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FxContainer,} from '../../styles/GlobalStyle'
import FxCommonPageTitle from "../../Container/FxCommon/FxCommonPageTitle";
import FxCommonContainer from "../../Container/FxCommon/FxCommonContainer";
import FxCommonPageMenu from "../../Container/FxCommon/FxCommonPageMenu";
import {INavigate} from '../../@types/navigate';

export function ComponentContainer() {

    const pageTitle = 'Components';

    const navigate = useNavigate();
    useEffect (()=> {
        navigate({ pathname: '/home/components/button', search: 'Buttons' });
    }, [])

    const [showMenu, setToggleMenu] = useState(true);
    const onClickToggle = (e: any) => {
        setToggleMenu(!showMenu);
    }

    const menuData: INavigate[] = [
        {id: '1', route: `/home/components/button`,    title: 'Buttons'},
        {id: '2', route: `/home/components/card`,      title: 'Cards'},
        {id: '3', route: `/home/components/textfield`, title: 'TextInputs'},
        {id: '4', route: `/home/components/daterange`, title: 'DateRange'},
        {id: '5', route: `/home/components/eventtest`, title: 'Event Test'}
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

