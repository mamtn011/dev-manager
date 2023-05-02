import { createContext, useState, useReducer } from "react";

import { ADD, DELETE, UPDATE } from "./action.type";
import { reducer } from "./reducer";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  // declaring initial profiles
  const initialProfiles = [
    {
      id: "1",
      firstName: "Abul",
      lastName: "Hossen",
      email: "abhcd@gmail.com",
      designation: "Web Designer",
      gender: "Male",
      photo: "https://images.unsplash.com/photo-1513152697235-fe74c283646a",
      dateOfBirth: new Date(),
      bio: "Something about me",
    },
    {
      id: "2",
      firstName: "Abul",
      lastName: "Hossen",
      email: "abscd@gmail.com",
      designation: "Web Designer",
      gender: "Male",
      photo: "https://images.unsplash.com/photo-1609010697446-11f2155278f0",
      dateOfBirth: new Date(),
      bio: "Something about me",
    },
    {
      id: "3",
      firstName: "Abul",
      lastName: "Hossen",
      email: "abjcd@gmail.com",
      designation: "Web Designer",
      gender: "Male",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      dateOfBirth: new Date(),
      bio: "Something about me",
    },
    {
      id: "4",
      firstName: "Abul",
      lastName: "Hossen",
      email: "abkcd@gmail.com",
      designation: "Web Designer",
      gender: "Male",
      photo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
      dateOfBirth: new Date(),
      bio: "Something about me",
    },
  ];

  // store profiles in state
  const [profiles, dispatch] = useReducer(reducer, initialProfiles);

  // delete profile click event handler
  const deleteProfile = (id) => {
    dispatch({ type: DELETE, payload: id });
  };
  // add profile function
  const addProfile = (profile) => {
    dispatch({ type: ADD, payload: profile });
  };
  // edit profile function
  const editProfile = (dataToUpdatet, id) => {
    dispatch({ type: UPDATE, payload: { dataToUpdatet, id } });
  };

  const value = {
    profiles,
    editProfile,
    addProfile,
    deleteProfile,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
