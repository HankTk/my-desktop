import {FxNavBar} from '../../Container'
import {FxContainer, FxContent} from './FxAppContainer.styles'
import {Outlet} from "react-router-dom";

export function FxAppContainer() {

    return (
        <FxContainer>

            {/* Navigation Bar */}
            <FxNavBar title={'Home'}></FxNavBar>

            {/* Content Area */}
            <FxContent>

                <Outlet />

            </FxContent>

        </FxContainer>
    )

}

