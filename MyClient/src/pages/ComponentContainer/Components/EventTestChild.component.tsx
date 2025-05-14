import {FxButton} from "../../../components";

// @ts-ignore
export default function EventChild({childToParent}) {
    return (
        <div>
            <FxButton color={'primary'} variant={'contained'} onClick={() => childToParent()}>Click Child</FxButton>
        </div>
    )
}
