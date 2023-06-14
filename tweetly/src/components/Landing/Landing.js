import React from 'react'
import "./Landing.css"
export const Landing = () => {
  return (
    <>
        <div class="flex flex-row flex-center h-full w-full " style={{"gap": "10rem"}}>
      <div class="flex flex-column flex-space-between " style={{"height": "70vh", "width": "25rem"}}>
        <h2 class="fw-black txt-xl"><span class="primary-color">My</span> Website</h2>
        <div class="flex flex-column " style={{"gap": "1.2rem"}}>
          <h2 class="txt-xs">
            <span class="txt-l grey-color">FOLLOW</span> PEOPLE AROUND THE GLOBE
          </h2>
          <h2 class="txt-xs">
            <span class="txt-l grey-color">CONNECT</span> WITH YOUR FRIENDS
          </h2>
          <h2 class="txt-xs">
            <span class="txt-l grey-color">SHARE</span> WHAT YOU THINKING
          </h2>
        </div>
        <div>
            <button class="primary-bg w-full p-s secondary-color border-none outline-none txt-s">Join Now</button>
            <p class="primary-color txt-s txt-center mt-xs">Already have an account?</p>
        </div>
      </div>
      <div class="grey-bg" style={{"height": "70vh", "width": "30rem"}}></div>
    </div>
    </>
  )
}
