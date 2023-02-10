import {
    ButtonContainer, ButtonVariant
} from './styles';

interface ButtonContainerProps {
    variant?: ButtonVariant
    children: string
    props?: any;
    onClick?: any;
}

export function Button({variant = 'primary', children, props, onClick}: ButtonContainerProps) {
    return (
        <ButtonContainer variant={variant} onClick={onClick} {...props}>
            {children}
        </ButtonContainer>
    )
}