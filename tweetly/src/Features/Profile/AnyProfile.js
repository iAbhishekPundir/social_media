import React, { useEffect } from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
import {useData} from "../../Contexts/Data/DataContext"
import { SinglePost } from "../../components/SinglePost/SinglePost";
import { getFollowHandler, getUnfollowHandler } from "../../Services/Data/DataServices";
import { useParams } from "react-router-dom";

export const AnyProfile = () => {

const {userHandler}=useParams()
const {dataState:{users,posts},dataDispatch,setIsLoading}=useData()

const socialUser = JSON.parse(localStorage.getItem("socialUser"));
const loggedInUser = users?.find(el => el.username === socialUser.username)

const foundUser = users?.find(el => el.userHandler === userHandler);



  const handleFollow = (followUserId, socialToken, dataDispatch) => {
    getFollowHandler(followUserId, socialToken, dataDispatch)
  }

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    getUnfollowHandler(followUserId, socialToken, dataDispatch)
  }
  const socialToken = localStorage.getItem("socialToken")
  const foundUsersPosts = posts?.filter(post => post.username === foundUser?.username)

  useEffect(()=>{
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  },[])

  return (
    <div className="profile-outerContainer">
    <div className="profile-mainContainer">
      <div className="profile-innerContainer">
        <img src={foundUser?.profilePic} alt="img1" className="profile-user-logo" />
        <div>
          <div className="profile-heading">
            <div>
              <h4>{foundUser?.firstName} {foundUser?.lastName}</h4>
              <p>{foundUser?.username}</p>
            </div>
            <div>
              {
                loggedInUser?.following?.some(el => el.username === foundUser?.username)
                ?
                <button onClick={() => handleUnfollow(foundUser?._id, socialToken, dataDispatch)} className='EditBtn'>Unfollow</button>
                :
                <button onClick={() => handleFollow(foundUser?._id, socialToken, dataDispatch)} className='EditBtn'>Follow</button>
            }
            </div>
          </div>
          <div className="margin-top-1">
            <p>An aspiring web developer</p>
          </div>
          <div className="flex space-between margin-top-1">
            <span>{foundUsersPosts.length} Posts</span>{" "}
            <span>{foundUser?.followers.length} Followers</span>{" "}
            <span>{foundUser?.following.length} Following</span>
          </div>
          <div className="profile-link">
            <a href="https://abhishekpundir.netlify.app/" target="_blank" rel="noreferrer">know more about me...</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className='posts'>
        {
            foundUsersPosts?.map(post => <SinglePost key={post.username} data={post} />)
        }
        {
            foundUsersPosts?.length===0 &&
            <div className="anyProfileInner"><div className="bookmarke-heading margin-top-1">{foundUser?.firstName} {foundUser?.lastName} haven't post anything</div>
</div>        }

      </div>
    </div>
  );
};

