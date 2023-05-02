import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import Profile from "../components/profiles/Profile";
export default function Profiles() {
  const { profiles } = useContext(ProfileContext);
  return (
    <>
      <h2 className="text-center">All Profiles</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {profiles.map((profile) => (
          <Profile key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  );
}
