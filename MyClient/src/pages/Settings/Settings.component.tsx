import Typography from "@mui/material/Typography";
import {FxContainer, FxContent, FxTitlePage} from '../../styles/GlobalStyle'

export function Settings() {

    return (
        <FxContainer>

            {/* Page Title */}
            <FxTitlePage>
                <Typography variant={'h6'} component="div" sx={{flexGrow: 1}} style={{height: '100%'}}>
                    {'Settings'}
                </Typography>
            </FxTitlePage>

            <FxContent>
            </FxContent>

        </FxContainer>
    )

}

