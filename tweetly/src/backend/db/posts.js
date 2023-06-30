import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
    _id:uuid(),
    content:
      "Nature's beauty",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "adarshbalika@gmail.com",
      text: "Amazing"
    }],
    username: "AbhishekPundir@gmail.com",
    profilePic:"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/31-Mother-64.png",
    userHandler:"abhishekpundir20",
    file:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Mountains",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://media.istockphoto.com/id/597672744/photo/woman-watching-sunrise-over-himalayas-mount-everest-national-park.webp?b=1&s=170667a&w=0&k=20&c=6m_HrRwi8l66lHB3SB8dZCLxPJqvmxWBMM-fXkY4NMw=",
    comments:[  {
      _id: uuid(),
      username: "adarshbalika@gmail.com",
      text: "Great post!"
    }],
    username: "AbhishekPundir@gmail.com",
    profilePic:"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/31-Mother-64.png",
    userHandler:"abhishekpundir20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
