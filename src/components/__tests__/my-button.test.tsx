import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { MyButton } from '../my-button';


let renderedElement: ReactWrapper;

const onClickHandlerMock = jest.fn();

const createMyButtonElement = (label?: string | undefined) => <MyButton onClick={onClickHandlerMock} label={label}/>

beforeEach(() => {
    renderedElement = mount(createMyButtonElement('test'));
});

afterEach(() => {
    renderedElement.unmount();
});

describe('MyButton component', () => {
    it('should render without error', () => {
        expect(renderedElement.length).toEqual(1);
    });
    it('should trigger event on click', () => {
        renderedElement
            .find('button')
            .simulate('click');
        expect(onClickHandlerMock).toBeCalled();
    });
    it('should not trigger event when not clicked', () => {
        renderedElement
            .find('button')
            .simulate('mouseover');
        expect(onClickHandlerMock).not.toBeCalled();
    });
    it('should render label like defined in label attribute', () => {
        const buttonTitle = renderedElement.find('button');
        expect(buttonTitle.props().children).toBe('test');
    });
    it('should render the default label text when no label is defined', () => {
        const renderedElement = mount(createMyButtonElement())
        const buttonTitle = renderedElement.find('button');
        expect(buttonTitle.props().children).toBe('default label');
    })
});