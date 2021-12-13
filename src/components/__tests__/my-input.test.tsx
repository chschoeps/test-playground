import { mount, ReactWrapper } from 'enzyme';
import { MyInput } from '../my-input';

const EXPECTED_LABEL = 'test-label';
const EXPECTED_VALUE = 'test-value';
const EXPECTED_INPUT_VALUE = 'test-input-value';
const DEFAULT_LABEL_TEXT = 'default label';

const onChangeHandlerMock = jest.fn();

const createMyInputElement = (
    onChange: jest.Mock<any, any> | jest.Mock<any, [event: any]>,
    label?: string,
    value?: string
) => <MyInput value={value} onChange={onChange} label={label}/>

let renderedElement: ReactWrapper;

beforeEach(() => {
    renderedElement = mount(createMyInputElement(onChangeHandlerMock, EXPECTED_LABEL, EXPECTED_VALUE));
});

afterEach(() => {
    renderedElement.unmount();
});

describe('MyInput component', () => {
    it('should render without error', () => {
        expect(renderedElement.length).toEqual(1);
    });
    it('should render a given value', () => {
        const nativeInput = renderedElement.find('input');
        const actualValue = nativeInput.getDOMNode().getAttribute('value');
        expect(actualValue).toEqual(EXPECTED_VALUE);
    })
    it('should take a user text input', () => {
        const onChangeHandlerMock = jest.fn((event) => event.target.value);
        const renderedElement = mount(createMyInputElement(onChangeHandlerMock));
        renderedElement
            .find('input')
            .simulate('change', { target: { value: EXPECTED_INPUT_VALUE } })
        expect(onChangeHandlerMock).toHaveReturnedWith(EXPECTED_INPUT_VALUE);
    })
    it('should render the default label text when no label is defined', () => {
        const renderedElement = mount(createMyInputElement(onChangeHandlerMock, undefined, EXPECTED_VALUE))
        const actualLabel = renderedElement
            .find('label')
            .text();
        expect(actualLabel).toBe(DEFAULT_LABEL_TEXT);
    })

});