import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariant = {
    primary: '#FBA94C',
    secondary: '#8D8D99',
    success: '#00B37E',
    danger: '#AB222E'
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 5px;

    ${props => `background-color: ${buttonVariant[props.variant]}`}
`;