// eslint-disable-next-line no-use-before-define
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FxContainer} from '../../styles/GlobalStyle';
import FxCommonPageTitle from "../../Container/FxCommon/FxCommonPageTitle";
import FxCommonContainer from "../../Container/FxCommon/FxCommonContainer";
import FxCommonPageMenu from "../../Container/FxCommon/FxCommonPageMenu";
import {INavigate} from '../../@types/navigate';
export function YouTubeContainer() {

    const pageTitle = 'YouTube';

    const navigate = useNavigate();
    useEffect (()=> {
        navigate({ pathname: '/home/youtube/player', search: 'qwuCqhBe1FQ' });
    }, [])

    const [showMenu, setToggleMenu] = useState(true);
    const onClickToggle = (e: any) => {
        setToggleMenu(!showMenu);
    }

    const menuData: INavigate[] = [
        {id: 'qwuCqhBe1FQ', route: `/home/youtube/player`, search: 'qwuCqhBe1FQ', title: '2 Dan Test'},
        {id: '48o4pDH9qLI', route: `/home/youtube/player`, search: '48o4pDH9qLI', title: '1, Suburi 1-7'},
        {id: 'oEAfknT8KUo', route: `/home/youtube/player`, search: 'oEAfknT8KUo', title: '2, Happo Giri'},
        {id: 'G7uxWyg2BH0', route: `/home/youtube/player`, search: 'G7uxWyg2BH0', title: '3, Kumitati'},
        {id: 'p0XKjgeO85Y', route: `/home/youtube/player`, search: 'p0XKjgeO85Y', title: '4, 31 Jo Kata'},
        {id: 'EnTOiv1-ZoQ', route: `/home/youtube/player`, search: 'EnTOiv1-ZoQ', title: '5, Jo Suburi'},
        {id: 'oYM5jLdAV68', route: `/home/youtube/player`, search: 'oYM5jLdAV68', title: '6, Kumi Jo'},
        {id: 'oUCghSil7Iw', route: `/home/youtube/player`, search: 'oUCghSil7Iw', title: '7, Buki Dori'},
        {id: 'fzZRnH7ecOI', route: `/home/youtube/player`, search: 'fzZRnH7ecOI', title: '8, Sensei Explaining'},
        {id: 'bO7JCY5N_6Y', route: `/home/youtube/player`, search: 'bO7JCY5N_6Y', title: '9, Jiyu waza, 2 attachers'},
        {id: 'sFTf4QlS5GQ', route: `/home/youtube/player`, search: 'sFTf4QlS5GQ', title: 'a, Kaiten Nage Review'},
        {id: 'j6yKSoS0_Xc', route: `/home/youtube/player`, search: 'j6yKSoS0_Xc', title: 'b, Hiji Dori'}
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

