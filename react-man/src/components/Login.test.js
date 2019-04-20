import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {

    it('<Login /> should render correctly', () => {
        const component = shallow(<Login />);
        expect(component).toMatchSnapshot();
    })   

    // it('Login Component should display a link for creating new account', () => {
    //     const wrapper = shallow(<Login pass={false} loggedin={false}/>);
    //     expect(wrapper.find('.action-link a[href="/register"]')).toHaveLength(1);
    // })

    // it('Login Component should display a Next button action link for entering password', () => {
    //     const wrapper = shallow(<Login pass={false} loggedin={false}/>);
    //     expect(wrapper.find('.action-button button[value="Next"]')).toHaveLength(1);
    // })



})