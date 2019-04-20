import React from 'react';
import { shallow } from 'enzyme';
import InputElem from './InputElem';

describe('<inputElem />', () => {
    it('<InputElem /> should render correctly', () => {
        const component = shallow(<InputElem />);
        expect(component).toMatchSnapshot();
    })

    it('<InputElem /> component should render a username textbox on 1st screen', () => {
        const wrapper = shallow(<InputElem elid="username" eltype="text" fieldname="Username"/>);
        expect(wrapper.find('#username')).toHaveLength(1)
    })

    it('<InputElem /> should render a password element on 2nd screen', () => {
        const wrapper = shallow(<InputElem elid="passwrd" eltype="password" fieldname="Password"/>);
        expect(wrapper.find('#passwrd')).toHaveLength(1);
    })

    it('component should render a legend tag displaying field name when focussed', () => {
        const wrapper = shallow(<InputElem elid="username" eltype="text" fieldname="Username" focus="username"/>)
        expect(wrapper.find('legend')).toHaveLength(1);
    })

    it('component should NOT render a legend tag when blurred', () => {
        const wrapper = shallow(<InputElem elid="username" eltype="text" fieldname="Username" focus="passwrd"/>)
        expect(wrapper.find('legend')).toHaveLength(0);
    })

    it('component should render a placeholder text on text input tag when blurred', () => {
        const wrapper = shallow(<InputElem elid="username" placeholder="Enter username and press Next" eltype="text" fieldname="Username" focus="passwrd"/>)
        expect(wrapper.find('input[placeholder="Enter username and press Next"]')).toHaveLength(1);
    })

})