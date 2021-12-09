import React from "react";

type MyTextFieldProps = {
    text: string
}

export class MyTextField extends React.Component<MyTextFieldProps> {
    render() {
        const { text } = this.props;
        return (
            <div>
                 {text}
            </div>
        )
    }
}