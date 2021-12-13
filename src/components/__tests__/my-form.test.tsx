import { mount, ReactWrapper } from 'enzyme';
import { MyForm } from '../my-form';

const EXPECTED_INPUT_TEXT = 'test-user-input';

let renderedElement: ReactWrapper;

beforeEach(() => {
    // given
    renderedElement = mount(<MyForm />);
});

afterEach(() => {
    renderedElement.unmount();
});

const simulateInput = (element: ReactWrapper) => {
    element.find('input').simulate('change', { target: { value: EXPECTED_INPUT_TEXT }});
}

describe('MyForm component', () => {
    it('should render without error', () => {
        // when
        simulateInput(renderedElement);
        // then
        expect(renderedElement.length).toEqual(1);
    });
    it('should display input string on user input', () => {
        // when
        simulateInput(renderedElement);
        // then
        const actualText = renderedElement
            .find('MyTextField')
            .at(0)
            .find('div')
            .text();
        expect(actualText).toEqual(EXPECTED_INPUT_TEXT);
    })
    it('should display input string under "send:" on button click', () => {
        // when
        simulateInput(renderedElement);
        renderedElement.find('MyButton').at(0).simulate('click');
        // then
        const actualText = renderedElement
            .find('MyTextField')
            .at(1)
            .find('div')
            .text();
        expect(actualText).toEqual(EXPECTED_INPUT_TEXT);
    })
    it('should clear fields on clear button click', () => {
        // when
        simulateInput(renderedElement);
        renderedElement.find('MyButton').at(0).simulate('click');
        renderedElement.find('MyButton').at(1).simulate('click');
        // then
        const actualText = renderedElement
            .find('MyTextField')
            .at(0)
            .find('div')
            .text();
        const actualSendText = renderedElement
            .find('MyTextField')
            .at(1)
            .find('div');
        expect(actualText).toEqual('');
        expect(actualSendText).toEqual({});
    })
})

