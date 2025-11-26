import React from 'react'

const AboutMe = ({params}) => {
  return (
    <div>dynamic routing page name is - {params.aboutMe} </div>
  )
}

export default AboutMe