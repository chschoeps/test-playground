import React from "react";

export type MyInputProps = {
    label?: string,
    value?: string,
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

type MyInputState = {
    inputValue?: string,
}

export class MyInput extends React.Component<MyInputProps, MyInputState> {
    constructor(props: MyInputProps) {
        super(props);
        this.state = {
            inputValue: props.value,
        };
      }
    render() {
        const { 
            label = 'default label',
            value
        } = this.props;
        return (
            <div>
                <label>
                    {label}
                    <input onChange={(e) => this.onInputChange(e)} type="text" name="input-name" placeholder="my input" value={value}></input>
                </label>
            </div>
        )
    }
    onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        // console.log('onInputChange');
        this.props.onChange(e);
        // this.props.value = this.state.inputValue;
    }

}