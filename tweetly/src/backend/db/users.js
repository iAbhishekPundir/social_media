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
    username: "adarshbalika",
    password: "adarshBalika123",
    email:"adarshbalika@gmail.com",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Pundir",
    username: "abhishekpundir",
    email: "abhishekpundir@gmail.com",
    password: "pundir",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
