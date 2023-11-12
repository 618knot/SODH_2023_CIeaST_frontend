import './Button.scss';
import { ReactElement } from 'react';
type ButtonProps = {
    label: string;
    className: string;
    id?: string;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    onClick?: () => void;
};

const Button = (props :ButtonProps) => {
    return (
        <button
            className={`button ${props.className}`}
            id={props.id}
            onClick={props.onClick}
        >
            {props.rightIcon}
            {props.label}
            {props.leftIcon}
        </button>
    );
};

export default Button;