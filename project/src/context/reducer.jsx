import { ADD, DELETE, UPDATE } from "./action.type";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // add new profile
    case ADD:
      const profileToAdd = {
        id: uuidv4(),
        ...payload,
      };
      return [profileToAdd, ...state];
    // edit profile
    case UPDATE:
      const { dataToUpdatet, id } = payload;
      const profilesAfterEdit = state.map((profile) => {
        if (profile.id === id) {
          return {
            ...profile,
            ...dataToUpdatet,
          };
        } else {
          return profile;
        }
      });
      return [...profilesAfterEdit];
    // delete profile
    case DELETE:
      const remainProfiles = state.filter((el) => el.id !== payload);
      toast.warning("Profile deleted successfully!");
      return [...remainProfiles];
    default:
      return state;
  }
};
