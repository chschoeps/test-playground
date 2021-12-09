import React from "react";

type MyButtonProps = {
    label?: string,
    onClick(): void;
}

export class MyButton extends React.Component<MyButtonProps> {
    render() {
        const { 
            label = 'default label',
            onClick
        } = this.props;
        return (
            <button onClick={onClick}>{label}</button>
        )
    }
}