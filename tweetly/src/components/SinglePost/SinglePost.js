import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import {
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaEdit, FaRegComment, FaTrash } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import {
  addCommentHandle,
  deleteCommentHandle,
  deletePostHandle,
  getBookMark,
  getDislikeData,
  getRemoveBookmarkData,
  getlikeData,
} from "../../Services/Data/DataServices";
import { useData } from "../../Contexts/Data/DataContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";

export const SinglePost = ({ data, showComment }) => {
  const [menuBtn, setMenuBtn] = useState(false);
  const {
    dataState: { users },
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
    commentText,
    setCommentText,
    commentToggle,
    setCommentToggle,
    setCommentId,
  } = useData();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(
    ({ username }) => username === socialUser.username
  );
  const isBookmark = loggedInuser?.bookmarks?.includes(data?._id);
  const handleLike = () => {
    getlikeData(data._id, dataDispatch, socialToken);
  };
  const handledisLike = () => {
    getDislikeData(data._id, dataDispatch, socialToken);
  };
  const btnLike = data?.likes?.likedBy?.some(
    (ele) => ele.username === socialUser.username
  );

  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    const viewUser = userHandler === socialUser.userHandler;

    if (!viewUser) {
      navigate(`/profile/${userHandler}`);
    } else {
      navigate(`/profile`);
    }
  };
  const handleBookmark = () => {
    getBookMark(dataDispatch, socialToken, data?._id, socialUser.username);
    toast.success("Added To Bookmark!");
  };
  const handleRemoveBookmark = () => {
    getRemoveBookmarkData(
      dataDispatch,
      socialToken,
      data?._id,
      socialUser.username
    );
    toast.success("Removed from Bookmark!");
  };

  const handleProductDetailClick = (postId) => {
    navigate(`/post/${data.id}`);
  };

  const handleDeleteComment = (commentId, commentData) => {
    deleteCommentHandle(
      data?._id,
      commentId,
      commentData,
      socialToken,
      dataDispatch
    );
    setCommentText("");
  };

  const handleDeletePost = (postId) => {
    deletePostHandle(postId, dataDispatch, socialToken);
    setMenuBtn(!menuBtn);
    toast.success("Post Deleted successful!");
  };

  const handleEditPost = (postId) => {
    dataDispatch({ type: "EDIT_POST", payload: postId });
    setBtnAddPost(!btnAddPost);
    setMenuBtn(!menuBtn);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://tweetly.netlify.app/post/${data?.id}`
    );

    toast.success("Copied To Clipboard");
  };

  const handleMenuClick = () => {
    setMenuBtn(!menuBtn);
  };

  const handleCommentEnable = () => {
    setCommentId(data._id);
    setCommentToggle(!commentToggle);
  };
  const  handleBack=()=>{
    setBtnAddPost(false)
    navigate("/")
  }
  
  const userDetails = users?.find((el) => el.username === data.username);
  const formattedCreatedAt = new Date(data?.createdAt).toLocaleDateString();
  const createTime= new Date(data?.createdAt).toLocaleTimeString();



  return (
    <div className="singlePost-MainContainer">
      <div className="singlepost-innerContainer">
        <div className="flex--singlepost-justify">
          <div className="flex--singlepost">
          {showComment && <div>
            <IoMdArrowRoundBack
              className="logo-back-addPost"
              onClick={handleBack}
            />
          </div>}
            <div className="flex-uploadimgg">
              <img
                src={userDetails?.profilePic}
                alt="profile1"
                className="single-profile-photo"
                onClick={() => handleClick(userDetails?.userHandler)}
              />
            </div>

            <div className="flex-edit-delete">
              <span className="single-profile-userName pointer" onClick={() => handleClick(userDetails?.userHandler)}>
                {userDetails?.firstName} {userDetails?.lastName}
                
              </span>
              <p className="single-profile-userId pointer" onClick={() => handleClick(userDetails?.userHandler)}>@{userDetails?.userHandler}</p>
              <p className="single-profile-date-time ">{formattedCreatedAt} {createTime}</p>
            </div>
          </div>
          <div>
            {socialUser.username===userDetails?.username && <div className="setting">
              {menuBtn ? (
                <RxCross2
                  onClick={() => setMenuBtn(!menuBtn)}
                  className="setting-icon"
                />
              ) : (
                <CiMenuKebab
                  onClick={handleMenuClick}
                  className="setting-icon"
                />
              )}
            </div>}
            {menuBtn && (
              <div className="btn-postEdit">
                <button
                  className="post-delete"
                  onClick={() => handleDeletePost(data?._id)}
                >
                  <AiOutlineDelete />
                </button>
                <button
                  className="post-edit"
                  onClick={() => handleEditPost(data?._id)}
                >
                  <FaEdit />
                </button>
              </div>
            )}
          </div>
        </div>
        <p
          className="text-comment-box"
          onClick={() => handleProductDetailClick(data?._id)}
        >
          {data?.content}
        </p>
        <div
          className="flex-uploadimgg"
          onClick={() => handleProductDetailClick(data?._id)}
        >
          {data?.file && (
            <img src={data?.file} alt="Uploaded" className="main-img" />
          )}
        </div>
        {/* */}

        <div className="btn-single-profile">
          {btnLike ? (
            <span
              className="btn-like-single-profile liked icon"
              onClick={handledisLike}
            >
              <AiFillHeart />
              {data?.likes.likeCount}
            </span>
          ) : (
            <span className="btn-like-single-profile icon" onClick={handleLike}>
              <AiOutlineHeart />
              {data?.likes?.likeCount}
            </span>
          )}
          {/* <BsBookmarkFill onClick={handleRemoveBookmark} /> */}
          <>
            {isBookmark ? (
              <span
                className="btn-like-single-profile liked"
                onClick={handleRemoveBookmark}
              >
                <BsBookmarkFill />
              </span>
            ) : (
              <span
                className="btn-like-single-profile"
                onClick={handleBookmark}
              >
                <BsBookmark />
              </span>
            )}{" "}
          </>

          <p className="btn-like-single-profile" onClick={handleCommentEnable}>
            <FaRegComment />
            {data?.comments?.length}
          </p>
          <p className="btn-like-single-profile" onClick={handleShare}>
            <BiShareAlt />
          </p>
        </div>
        {!showComment && <p className="allComments flex  pointer" onClick={() => handleProductDetailClick(data?._id)} >view {data?.comments?.length} comments</p>}

        {showComment && (
          <div>
            {data?.comments?.map((comment) => {
              const currentUser = users?.find(
                (user) => user?.username === comment?.username
              );
              const deleteOnlyYoursCmnt=socialUser?.username===comment?.username
              return (
                <div className="comments-added">
                  <img
                    src={currentUser?.profilePic}
                    alt="img1"
                    className="single-profile-photo-comment"
                  />
                  <div className="comments-add-by-user">
                    <div className="deleteFlex">
                      <p className="user-name">
                        {currentUser?.firstName} {currentUser?.lastName}
                      </p>
                  {deleteOnlyYoursCmnt &&    <FaTrash
                        className="delete-icon"
                        onClick={() =>
                          handleDeleteComment(comment._id, comment.text)
                        }
                      />}
                    </div>
                    <p className="comment-text">{comment?.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
