import React from "react";
import { MyButton } from "./my-button";
import { MyInput } from "./my-input";
import { MyTextField } from "./my-text-field";
import styled from "styled-components";

const MyFormWrapper = styled.div`
    margin: 10em;
`

type MyFormProps = {

}

type MyFormState = {
    value: string,
    sendValue: string
}

export class MyForm extends React.Component<MyFormProps, MyFormState> {
    constructor(props: MyFormProps) {
        super(props);
        this.state = {
            value: '',
            sendValue: ''
        };
      }
    render() {
        return (
            <MyFormWrapper>
                <MyInput onChange={(e) => this.setName(e)} label="text" value={this.state.value}/>
                <MyButton label="send" onClick={() => this.send()}/>
                <MyButton label="clear" onClick={() => this.clear()}/>
                <MyTextField text={this.state.value} />
                {this.state.sendValue && (<><div>send:</div><MyTextField text={this.state.sendValue} /></>)}
            </MyFormWrapper>
        )
    }

    setName(e: React.ChangeEvent<HTMLInputElement>) {
        // console.log('setName1');
        if(e) {
            // console.log('setName: ', e);
            this.setState({value: e.target.value});
        }
    }

    send() {
        // console.log('send1');
        // console.log('send: ', this.state.value);
        this.setState({sendValue: this.state.value});
    }
    clear() {
        this.setState({value: '', sendValue: ''})
        console.log();
        
    }
}