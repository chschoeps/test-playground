import App from './App';
import { mount } from 'enzyme';

test('renders app without error', () => {
  const renderedElement = mount(<App />);
  expect(renderedElement.length).toBe(1);
});
