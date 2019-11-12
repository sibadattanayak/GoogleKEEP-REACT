import React from 'react';
import {
    shallow,
    mount
} from 'enzyme';
import Registration from '../pages/registration';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
// let wrapper=mount(<RegisterComponent.WrappedComponent/>)
let wrapper = shallow(<Registration />)

/**
 * describe what we are testing 
 **/
describe('Registration', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
        expect(wrapper.exists()).toBe(true)
    })
    /**
     * within the RegisterComponent components describe function
     **/
    it('renders a firstName input', () => {
        expect(wrapper.find('[name="firstName"]').length).toEqual(1)
    })
    it('renders a lastName input', () => {
        expect(wrapper.find('[name="lastName"]').length).toEqual(1)
    })
    
    it('renders a email input', () => {
        expect(wrapper.find('[name="email"]').length).toEqual(1)
    })
   
    
    /**
     * within the RegisterComponent components describe function
     **/
    describe('firstName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            wrapper.find('[name="firstName"]').simulate('change', {
                target: {
                    name: 'firstName',
                    value: 'Sibadatta'
                }
            });
            expect(wrapper.state('firstName')).toEqual('Sibadatta');
        })
    })
    describe('lastName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            wrapper.find('[name="lastName"]').simulate('change', {
                target: {
                    name: 'lastName',
                    value: 'Nayak'
                }
            });
            expect(wrapper.state('lastName')).toEqual('Nayak');
        })
    })
    
    
    describe('email input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            wrapper.find('[name="email"]').simulate('change', {
                target: {
                    name: 'email',
                    value: "shibadattanayak@gmail.com"
                }
            });
            expect(wrapper.state('email')).toEqual('shibadattanayak@gmail.com');
        })
    })
    
})