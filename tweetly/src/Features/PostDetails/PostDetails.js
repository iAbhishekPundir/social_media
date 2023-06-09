import React from 'react'

import { useParams } from 'react-router-dom'
import { useData } from '../../Contexts/Data/DataContext'
import { SinglePost } from '../../components/SinglePost/SinglePost'



export const PostDetails = () => {
  const {dataState:{posts}}=useData()
    const {_id}=useParams()


  
const postDeatils=posts?.find((post)=>post.id.toString()===_id.toString())

  return (
    <div>
    <SinglePost data={postDeatils} showComment/>
    </div>
  )
}