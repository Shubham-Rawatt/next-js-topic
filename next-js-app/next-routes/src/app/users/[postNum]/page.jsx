import React from 'react'

const PageId = async({params}) => {
    const postNumber = await params
  return (
    <div>PageId is {postNumber.postNum}</div>
  )
}

export default PageId