import React from "react";
import "./EditProfile.css";
import profile1 from "../../Assets/profile1.png";
import { useState } from "react";
import { useData } from "../../Contexts/Data/DataContext";
import {
  editUserHandler,
  getUserData,
  postUserData,
} from "../../Services/Data/DataServices";
import { toast } from "react-toastify";
import { AiFillCamera } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export const EditProfile = ({ setEditBtn, editBtn }) => {
  const {
    dataState: { users },
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken");
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const [updatedProfile, setUpdatedProfile] = useState({
    profilePic: loggedInUser.profilePic,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    link: loggedInUser.link,
    bio: loggedInUser.bio,
  });

  const handleClose = () => {
    setEditBtn(!editBtn);
  };

  //   console.log(loggedInUser)

  const avatars = [
    "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/128/15._Astronaut.png",
    "https://cdn2.iconfinder.com/data/icons/avatar-257/128/06.png",
    "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/128/17._Designer.png",
    "https://cdn0.iconfinder.com/data/icons/fashion-avatars/128/Avatar_13.png",
    "https://cdn4.iconfinder.com/data/icons/meta-people-3d-avatars/128/Blue_T-Shirt__Vest_Boy_3d.png",
    "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/male_leader_manager_people_man_boss_avatar-2-64.png",
  ];

  const handleImageUpload = (e) => {
    const selectedImg = e.target.files[0];
    setUpdatedProfile((prev) => ({
      ...prev,
      profilePic: URL.createObjectURL(selectedImg),
    }));
  };

  const handleAvatar = (data) => {
    setUpdatedProfile((prev) => ({ ...prev, profilePic: data }));
  };

  const handleUpdate = () => {
    editUserHandler(updatedProfile, socialToken, dataDispatch);
    setEditBtn(!editBtn);
    toast.success("Post Updated!");
  };

  const updateDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
    // console.log(updatedProfile);
  };

  const { firstName, lastName, link, bio } = updatedProfile;
  return (
    <div className="editMainContainer">
      <div className="editInnerConatainer">
        <div className="updateConatiner">
          <RxCross2
            onClick={handleClose}
            className = "cross-icon pointer"
          />
          <div>
            <p className="avatarinfo">Select Your Avatar</p>
          </div>
          <div className="updateAvatarMain">
            <div className="updateAvatar">
              {avatars.map((data) => (
                <div
                  onClick={() => handleAvatar(data)}
                  className={`imgAvatar ${
                    updatedProfile.profilePic === data && "imgAvatarSelected"
                  }`}
                >
                  <img
                    src={data}
                    alt="img"
                    height={70}
                    width={70}
                    name="profilePic"
                    value={data}
                    onClick={updateDetails}
                  />
                </div>
              ))}
            </div>
            <div className="input-file-container flex align-center">
              <span className="profile-text">Profile</span>

              <label for="file-upload" className="btn-upload">
                <img
                  src={updatedProfile.profilePic}
                  alt=""
                  width="200"
                  className="edit-profile-icon"
                />
                <span className="edit-profile-camera-icon">
                  <AiFillCamera />
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="infoEditContainer">
            <label className="labelUpdateProfile">
              First Name:
              <input
                type="text"
                name="firstName"
                onChange={updateDetails}
                value={firstName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              last Name:
              <input
                type="text"
                name="lastName"
                onChange={updateDetails}
                value={lastName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              Link :
              <input
                type="text"
                name="link"
                onChange={updateDetails}
                value={link}
                className="inputp"
              />
            </label>
            <div className="labelUpdateProfile">
              <label className="labelUpdateProfile">Bio :</label>
              <textarea
                placeholder="bio"
                className="editPost-input"
                onChange={updateDetails}
                name="bio"
                value={bio}
              />
            </div>
          </div>
          <div className="btn-edit-profile-div">
            <button className="updateBtn" onClick={handleUpdate}>
              Update
            </button>
            <button onClick={handleClose} className="updateBtn">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
