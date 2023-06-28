import React from "react";
import { FollowBar } from "../FollowBar/FollowBar";
import Sidebar from "../Sidebar/Sidebar"
import "./MainContainer.css";
import Navbar from "../NavBar/Navbar";
import { RequiresAuth } from "../../Auth/RequireAuth";
import { CommentBox } from "../CommentBox/CommentBox";
import { useData } from "../../Contexts/Data/DataContext";
import { EditProfile } from "../../Features/Profile/EditProfile";
import { MenuBar } from "../MenuBar/MenuBar";
import { AddPost } from "../AddPost/AddPost";


export const MainContainer = ({ children }) => {
  const {commentToggle,setEditBtn,editBtn, btnAddPost}=useData()
  return (
    <>
      <RequiresAuth>
        <Navbar />
        <div className="mainContainer">
          <div>
            {/* <Sidebar/> */}
            <MenuBar/>
          </div>
          <div> {children}</div>
          {btnAddPost && <AddPost/> }
         {commentToggle && <div className="overComment"><CommentBox/></div>}
         {editBtn && <div className="editBox-bottom"></div>}
         {editBtn && (
        <div className="editBox-Main">
          <EditProfile setEditBtn={setEditBtn} editBtn={editBtn} />
        </div>
      )}
          <div className="dektop-followbar">
            <FollowBar />
          </div>
        </div>
      </RequiresAuth>
    </>
  );
};
