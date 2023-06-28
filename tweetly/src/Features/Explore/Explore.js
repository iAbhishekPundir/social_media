import React, { useEffect } from 'react'
import { useData } from '../../Contexts/Data/DataContext';
import { SinglePost } from '../../components/SinglePost/SinglePost';

export const Explore = () => {
  const { dataState: { posts } ,setIsLoading} = useData();

  useEffect(()=>{
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  },[])
  return (
    <div>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} data={post} />)
      }
    </div>
  )
}
