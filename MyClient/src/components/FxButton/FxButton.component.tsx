import {ReactNode, ButtonHTMLAttributes} from 'react'
import {Button} from "@mui/material";
import styled from "@emotion/styled";

const TextButton = styled(Button)`
  text-transform: none;
  font-size: 18px;
`;

type ButtonProps = {
    variant: string;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function FxButton(props: ButtonProps) {

    if (props.variant !== '') {
        // @ts-ignore
        return <Button {...props} variant={props.variant} color={props.color}>{props.children}</Button>
    }
    else {
        // @ts-ignore
        return <TextButton {...props} variant={props.variant} color={props.color}>{props.children}</TextButton>
    }

}
