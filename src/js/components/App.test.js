import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper = {};

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('should render without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    test('should render with proper content', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
