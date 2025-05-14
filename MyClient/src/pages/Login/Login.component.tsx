import Typography from "@mui/material/Typography";
import {FxContainer, FxContent, FxTitlePage} from '../../styles/GlobalStyle'

export function Login() {

    return (
        <FxContainer>

            {/* Page Title */}
            <FxTitlePage>
                <Typography variant={'h6'} component="div" sx={{flexGrow: 1}} style={{height: '100%'}}>
                    {'Login'}
                </Typography>
            </FxTitlePage>

            <FxContent>
            </FxContent>

        </FxContainer>
    )

}

