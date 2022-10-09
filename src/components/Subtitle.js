import React from 'react'

function Subtitle(props) {
  return (
    <div className='subtitle'>
      <div className='subtitle__paragraph'>
        <div className='subtitle__bar'></div>
        <p>{props.subtitle}<span>{props.subtitleSpan}</span></p>
      </div>
    </div>
  )
}

export default Subtitle;
