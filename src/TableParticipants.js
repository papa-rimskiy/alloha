import React from 'react'
import { connect } from 'react-redux'

function TableParticipants( { participants }) {

  const sum = participants.map(el => Number(el.consumption)).reduce((acc, num) => acc + num, 0)
  const sortedMambers = participants.sort((a,b) => b.consumption - a.consumption)

  return (
    <div className='table_participants'>
      <table>
      <>
        <tr>
          <th>№</th>
          <th>Имя участник</th>
          <th>Потраченная сумма</th>
          <th>Изменить</th>
          <th>Удалить</th>
        </tr>
        {sortedMambers.map((el,index) => 
        <tr>
          <td className='number_participants'>{index + 1}.</td>
          <td className='name_participants'>{el.name}</td>
          <td className='consumption_participants'>{el.consumption}</td>
          <td className='change_participants'>↻</td>
          <td className='delete_participants'>✘</td>
        </tr>
        )}
        <tr>
          <td colspan="4" >ИТОГО:</td><td className='total'>{sum} ₽</td>
        </tr>
        </>
        
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    participants: state.participants.participants
  }
}

export default connect(mapStateToProps, null) (TableParticipants)