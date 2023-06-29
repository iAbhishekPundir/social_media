import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    userHandler: "adarshBalika123",
    profilePic: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/31-Mother-64.png",
    link: "https://aadarshbalika.netlify.app/",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Pundir",
    username: "abhishekpundir@gmail.com",
    password: "pundir",
    userHandler: "abhishekpundir123",
    profilePic:"https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/male_leader_manager_people_man_boss_avatar-2-64.png",
    link:"https://abhishekpundir.netlify.app/",
    bio: "Hope is a waking dream",
    bookmarks: [],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bruce",
    lastName: "Wayne",
    username: "brucewayne@gmail.com",
    password: "bruceWayne123",
    userHandler: "bruceWayne123",
    profilePic: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-64.png",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Smith",
    username: "johnsmith@gmail.com",
    password: "johnSmith123",
    userHandler: "johnSmith123",
    profilePic: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Henry",
    lastName: "Cavill",
    username: "henrycavill@gmail.com",
    password: "henryCavill123",
    userHandler: "henryCavill123",
    profilePic: "https://cdn0.iconfinder.com/data/icons/IS_hallowen_social/128/su_superman.png",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Kritika",
    lastName: "Singh",
    username: "kritikasingh@gmail.com",
    profilePic: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-64.png",
    password: "kritikaSingh123",
    userHandler: "kritikaSingh123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Peter",
    lastName: "Parker",
    username: "peterparker@gmail.com",
    password: "peterParker123",
    profilePic: "https://cdn4.iconfinder.com/data/icons/superhero/400/spiderman.png",
    userHandler: "peterParker123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
  
];
