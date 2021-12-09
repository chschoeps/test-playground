import React from "react";

type MyInputProps = {
    label?: string,
    value: string,
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class MyInput extends React.Component<MyInputProps> {
    render() {
        const { label = 'default label', onChange } = this.props;
        return (
            <div>
                <label>
                    {label}
                    <input onChange={onChange} type="text" placeholder="my input"></input>
                </label>    
            </div>
        )
    }
}