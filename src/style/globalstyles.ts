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
    width: ${(props: IButtonProps) => props.width? props.width: 'auto'};
    max-width: ${(props: IButtonProps) => props.maxWidth? props.maxWidth: 'auto'};
    height: ${(props: IButtonProps) => props.height? props.height: 'auto'};
    max-height: ${(props: IButtonProps) => props.maxHeight? props.maxHeight: 'auto'};

    color: ${(props: IButtonProps) => props.color? props.color: 'white'};
    background-color: ${(props: IButtonProps) => props.backGroundColor? props.backGroundColor : '#e89005'};
`