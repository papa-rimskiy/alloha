
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {createParticipants} from '../src/redux/actions'

function AddParticipants(props) {
  const [allParticipants, setAllParticipants] = useState([])
  const [name, setName] = useState('')
  const [consumption, setConsumption] = useState()
  
  const onChangeName = (e) => {
    const target = e.target.value;
    setName(target)
  }

  const onChangeConsumption = (e) => {
    const target = e.target.value
    setConsumption(target)
  }

  const addParticipants = () => {
    const a = {name: name, consumption: Number(consumption)}
    setName('')
    setConsumption('')
    //setAllParticipants((prev) => {
    //  return [...prev, a]
    //})
    props.createParticipants(a)
  }

  console.log(allParticipants)
  return (
    <div className='add_participants'>
      <input className='input_name' 
        //onKeyPress={onKeyPressHandler}
        placeholder="Имя участника"
        value={name}
        onChange={(e) => onChangeName(e)}
        />
      <input className='input_consumption'
      //onKeyPress={onKeyPressHandler}
      placeholder="Потраченная сумма"
      value={consumption}
      onChange={(e) => onChangeConsumption(e)}
       />
       <button className='button_add' onClick={addParticipants}>Добавить в список</button>
    </div>
  )
}

const mapDispatchToProps = {
  createParticipants
}

export default connect(null, mapDispatchToProps ) (AddParticipants)
