import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Trekking",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "John",
          lastName: "Smith",
          username: "johnsmith@gmail.com",
          password: "johnSmith123",
          userHandler: "johnSmith123",
          profilePic:
            "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
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
          profilePic:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-64.png",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Henry",
          lastName: "Cavill",
          username: "henrycavill@gmail.com",
          password: "henryCavill123",
          userHandler: "henryCavill123",
          profilePic:
            "https://cdn0.iconfinder.com/data/icons/IS_hallowen_social/128/su_superman.png",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "henrycavill@gmail.com",
        text: "Awesome",
      },
    ],
    username: "abhishekpundir@gmail.com",
    profilePic:
      "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler: "abhishekpundir20",
    file: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    createdAt: new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Adventure",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "John",
          lastName: "Smith",
          username: "johnsmith@gmail.com",
          password: "johnSmith123",
          userHandler: "johnSmith123",
          profilePic:
            "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png",
          bookmarks: [],
          followers: [],
          following: [],
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
          profilePic:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-64.png",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Henry",
          lastName: "Cavill",
          username: "henrycavill@gmail.com",
          password: "henryCavill123",
          userHandler: "henryCavill123",
          profilePic:
            "https://cdn0.iconfinder.com/data/icons/IS_hallowen_social/128/su_superman.png",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "brucewayne@gmail.com",
        text: "Great post!",
      },
      {
        _id: uuid(),
        username: "johnsmith@gmail.com",
        text: "❤❤",
      },
    ],
    username: "abhishekpundir@gmail.com",
    profilePic:
      "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler: "abhishekpundir20",
    file: "https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    createdAt: new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Peace",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "John",
          lastName: "Smith",
          username: "johnsmith@gmail.com",
          password: "johnSmith123",
          userHandler: "johnSmith123",
          profilePic:
            "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
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
          profilePic:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-64.png",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Henry",
          lastName: "Cavill",
          username: "henrycavill@gmail.com",
          password: "henryCavill123",
          userHandler: "henryCavill123",
          profilePic:
            "https://cdn0.iconfinder.com/data/icons/IS_hallowen_social/128/su_superman.png",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "henrycavill@gmail.com",
        text: "☮☮",
      },
    ],
    username: "abhishekpundir@gmail.com",
    profilePic:
      "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler: "abhishekpundir20",
    file: "https://media.istockphoto.com/id/1413996657/photo/fit-and-active-man-doing-yoga-meditating-and-relaxation-exercise-on-the-beach-calm-peaceful.webp?b=1&s=170667a&w=0&k=20&c=KQ4Hz55FY5opEeGUdHXzeEX0Q14ShL7lmioCOTwfAYE=",
    createdAt:new Date(2022, 11, 9, 11, 10, 18),
  updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Be grateful",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    comments:[  {
      _id: uuid(),
      username: "johnsmith@gmail.com",
      text: "awesome!"
    }],
    username: "peterparker@gmail.com",
    profilePic:"https://cdn4.iconfinder.com/data/icons/superhero/400/spiderman.png",
    userHandler:"peterParker123",
    createdAt:formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "😊😊",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    comments:[  {
      _id: uuid(),
      username: "johnsmith@gmail.com",
      text: "awesome!"
    }],
    username: "peterparker@gmail.com",
    profilePic:"https://cdn4.iconfinder.com/data/icons/superhero/400/spiderman.png",
    userHandler:"peterParker123",
    createdAt:formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Thunder",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    comments:[  {
      _id: uuid(),
      username: "johnsmith@gmail.com",
      text: "awesome!"
    }],
    username: "brucewayne@gmail.com",
    profilePic:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-64.png",
    userHandler:"bruceWayne123",
    createdAt:formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "✌✌",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    comments:[  {
      _id: uuid(),
      username: "johnsmith@gmail.com",
      text: "awesome!"
    }],
    username: "kritikasingh@gmail.com",
    profilePic:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-64.png",
    userHandler:"kritikaSingh123",
    createdAt:formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  }
];
