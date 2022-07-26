import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

function Calculation( {participants}) {
const [all, setAll] = useState([])
const [sup,setSup] = useState([])

useEffect(() => {
  const sasai = structuredClone(participants)
  setSup(sasai)
},[participants])

  const sum = participants.map(el => Number(el.consumption)).reduce((acc, num) => acc + num, 0)
  const average = sum / participants.length
  console.log(average, 'average')
  console.log(sum, 'sum')

  const plusik = () => {
    const lala = [...sup]
    const kaka = []
    const paka = []
    if (lala.length === 0) return lala 
    if (sup[0].consumption - (average - sup[sup.length - 1].consumption)  > average ) {
      const nameDebtor = sup[sup.length - 1].name
      const money = average - sup[sup.length - 1].consumption
      const nameReceiving = sup[0].name
      lala[0].consumption = lala[0].consumption - money
      lala.splice(lala.length-1, 1)
      kaka.push({nameDebtor: nameDebtor, money: money, nameReceiving: nameReceiving})
      console.log(lala)
      console.log(kaka)
      //setAll(prev => {return [...prev, {nameDebtor: nameDebtor, money: money, nameReceiving: nameReceiving}]})
      //setSup(lala)
    } else if (sup[0].consumption - ( average - sup[sup.length - 1].consumption) < average) {
      const nameDebtor = sup[sup.length - 1].name
      const money = sup[0].consumption - average 
      const nameReceiving = sup[0].name
      lala.splice(0,1)
      lala[lala.length - 1].consumption = money + lala[lala.length - 1].consumption
      setAll(prev => {return [...prev, {nameDebtor: nameDebtor, money: money, nameReceiving: nameReceiving}]})
      setSup(lala)
    } else{
      const nameDebtor = sup[sup.length - 1].name
      const money = average - sup[sup.length - 1].consumption
      const nameReceiving = sup[0].name
      lala.splice(0,1)
      lala.splice(lala.length-1, 1)
      setAll(prev => {return [...prev, {nameDebtor: nameDebtor, money: money, nameReceiving: nameReceiving}]})
      setSup(lala)
    }
    
    
  }

  const sasai = () => {
    
      plusik()

  }

  console.log(all, 'posle funct') 
  console.log(sup, 'SUp')


  return (
    <div className='calculation'>
      <div className='calculation_content'>
        <h2 onClick={() => sasai()}>Ярик должен Стефану 200р</h2>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    participants: state.participants.participants
  }
}

export default connect(mapStateToProps, null) (Calculation)
