import React from 'react'

const BottamSection = ({reef, topref}) => {
 
 
    return (
    <div className='maindivs' ref={reef}>BottamSection
    <span className='btn2' onClick={()=>{
        topref.current?.scrollIntoView({behavior:"smooth"})
    }}>Go to Top</span>
    </div>
  )
}

export default BottamSection