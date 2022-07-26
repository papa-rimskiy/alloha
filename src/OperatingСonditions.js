import React, {useState} from 'react'

function OperatingСonditions() {

  const [validity, setValidity] = useState(false)

  const validityShow = () => {
    setValidity(!validity)
  }

  return (
    <div className='operating_conditions'>
      <div className='operating_conditions_block' onClick={validityShow}>
        Как пользоваться данным чудом?
        <i className={(validity === false) ? "fas fa-chevron-down" : "fas fa-chevron-up"} ></i>
      </div>
      <div className={validity === true ? 'operating_conditions_seen' : 'operating_conditions_invisible'}>
        1) После сходки с друзьями вы порой задаетесь вопросом - кто, кому, сколько должен? Если вы хотите легко распределить потраченные финансы - это приложение для вас!
        <br/>
        2) Просто заполните в таблице имя и сумму, которая была потрачена каждым участником.
        <br/>
        3) После того, как вы заполните всех участников тусовки нажмите на кнопку "посчитать" и будет чудо.
      </div>
    </div>
  )
}

export default OperatingСonditions