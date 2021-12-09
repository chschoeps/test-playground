import React from "react";
import { MyButton } from "./my-button";
import { MyInput } from "./my-input";
import { MyTextField } from "./my-text-field";

type MyFormProps = {

}

type MyFormState = {
    value: string,
    fieldValue: string
}

export class MyForm extends React.Component<MyFormProps, MyFormState> {
    constructor(props: MyFormProps) {
        super(props);
        this.state = {
            value: '',
            fieldValue: ''
        };
      }
    render() {
        return (
            <>
                <MyInput onChange={(e) => this.setName(e)} label="text" value={this.state.value}/>
                <MyButton label="send" onClick={() => this.send()}>send</MyButton>
                <MyTextField text={this.state.fieldValue} />
                <MyTextField text={this.state.value} />
            </>
        )
    }

    setName(e: React.ChangeEvent<HTMLInputElement>) {
        console.log('setName1');
        if(e) {
            console.log('setName: ', e);
            this.setState({value: e.target?.value});
        }
    }

    send() {
        console.log('send1');
        console.log('send: ', this.state.value);
        this.setState({fieldValue: this.state.value});
    }
}