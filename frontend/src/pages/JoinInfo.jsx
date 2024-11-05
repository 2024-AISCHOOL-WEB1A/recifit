

import React from 'react'
import '../assets/css/joinInfo.css'

const JoinInfo = () => {
  return (
    <div>
      <div className='container'>

        <div className='text'>추가정보 입력</div>

        <div className='like-box'>
          <span className='like-text'>선호</span>
          <input type="text" className='like' 
          placeholder='해당 재료가 포함된 레시피를 우선적으로 추천합니다!'/>
        </div>

        <div className='dislike-box'>
          <div className='dislike-text'>비선호</div>
        <input type="text" className='dislike' />
        </div>

        <div className='allergy-box'>
          <div className='allergy-text'>제외</div>
        <input type="text" className='allergy' />
        </div>
      </div>
      
      <button type='submit'>확인</button>
    </div>
  )
}

export default JoinInfo