import React from 'react'
import ReactDOM from 'react-dom'
import NewEwok from '../NewEwok'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing',() => {
    const div = document.createElement('div')
    ReactDOM.render(<NewEwok />, div)
})

it('Has a name input', () => {
    const component = mount(<NewEwok />)
    expect(component.find('label#name').text()).toBe("Name")
})

it('has an age input', () => {
    const component = mount(<NewEwok />)
    expect(component.find('label#age').text()).toBe("Age")
})

it('has an enjoys input', () => {
    const component = mount(<NewEwok />)
    expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a button', () => {
    const component = mount(<NewEwok />)
    expect(component.find('button#submit').text()).toBe("Create Ewok Profile")
})
