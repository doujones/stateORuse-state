import React, { useState } from 'react'

//Functional Components Begin
const useStateExample = () => {
  const [name, setName] = useState('Will')
  const [address, setAddress] = useState('Will')

  return (
    <>
    <h1>{name}</h1>
    <h1>{address}</h1>
    <button onClick ={() => setName('Boswell')}>Set Name to Will</button>
    <button onClick ={() => setAddress('Atlanta')}>Set Address to Atlanta</button>
    </>
    )
}

export default useStateExample
//Functional Components End

//Class Components Begin

export default class componentName extends React.Component {
  constructor(){
    super(props);

    this.state = {
      name: 'Will',
      address: 'Atlanta'
    }
  }

  
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: 'Boswell' })}>
          Will is a playa
        </button>
        <button onClick={() => this.setState({ address: 'Atlanta' })}>
          Will is a playa
        </button>
      </div>
    )
  }
}
// End of Class Components