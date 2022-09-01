import styled from "styled-components"

export const GobalStyle = 10

interface IButtonProps {
    width: string,
    maxWidth?: string,
    height?: string,
    maxHeight?: string,
    backGroundColor?: string,
    color?: string,
}

export const GlobalButton = styled.button`
    width: ${(props: IButtonProps) => props.width};
    max-width: 209px;
    height: 19%;
    max-height: 52px;

    color: white;
    background-color: ${(props: IButtonProps) => props.backGroundColor? props.backGroundColor : '#e89005'};
`