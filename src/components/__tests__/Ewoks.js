import React from 'react'
import ReactDOM from 'react-dom'
import Ewoks from '../Ewoks'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const ewoks = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge."
  },
  {
    id: 4,
    name: 'Nub Nub',
    age: 15,
    enjoys:"Setting traps for the imperial troopers"
  }
]

it('Ewoks renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Ewoks ewoks={ewoks} />, div)
})

it("renders ewoks", ()=>{
    const component = mount(<Ewoks ewoks={ewoks} />)
    const headings = component.find('h4 > .ewok-name')
    console.log(headings)
    expect(headings.length).toBe(4)
})
