import React from 'react'

const About = (props) => {
  const {history} = props
  return <div onClick={()=>{history.push('/user/3')}}>About</div>
}

export default About