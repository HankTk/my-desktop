import {FxContent, FxHBox} from '../../../styles/GlobalStyle'
import {FxButton} from "../../../components";
import {useState} from "react";

export default function Buttons() {

    const [name, setName] = useState('');
    const onClickButton = (e: any) => {
        // setName(e.target.value);
        setName('Button Clicked: ' + e);
    }

    return (
        <FxContent>
            <FxHBox style={{padding: '20px', justifyContent: 'space-around'}}>
                <FxButton color={'primary'} variant={''}          onClick={(e) => onClickButton('#1')}>No Variant</FxButton>
                <FxButton color={'primary'} variant={'contained'} onClick={(e) => onClickButton('#2')}>Variant Contained</FxButton>
                <FxButton color={'primary'} variant={'outlined'}  onClick={(e) => onClickButton('#3')}>Variant Outline</FxButton>
            </FxHBox>
            <FxHBox style={{padding: '20px', justifyContent: 'space-around'}}>
                <FxButton color={'success'} variant={''}          onClick={(e) => onClickButton('#4')}>No Variant</FxButton>
                <FxButton color={'success'} variant={'contained'} onClick={(e) => onClickButton('#5')}>Variant Contained</FxButton>
                <FxButton color={'success'} variant={'outlined'}  onClick={(e) => onClickButton('#6')}>Variant Outline</FxButton>
            </FxHBox>
            <FxHBox style={{padding: '20px', justifyContent: 'space-around'}}>
                <FxButton color={'error'} variant={''}          onClick={(e) => onClickButton('#7')}>No Variant</FxButton>
                <FxButton color={'error'} variant={'contained'} onClick={(e) => onClickButton('#8')}>Variant Contained</FxButton>
                <FxButton color={'error'} variant={'outlined'}  onClick={(e) => onClickButton('#9')}>Variant Outline</FxButton>
            </FxHBox>

            <hr/>

            <div style={{padding: '16px'}}>
                Input: {name}
            </div>

        </FxContent>
    )
}
