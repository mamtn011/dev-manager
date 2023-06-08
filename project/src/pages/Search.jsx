import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Search() {
  const { searchResult, searchText } = useContext(ProfileContext);
  return (
    <>
      <h4 className="text-center">Searching for {searchText}... </h4>
      {searchResult && (
        <>
          {searchResult.data.length > 0 ? (
            searchResult.data.map((profile) => (
              <h4 key={profile.id}>
                {`${profile.attributes.firstName} ${profile.attributes.lastName}`}
              </h4>
            ))
          ) : (
            <h4>No result found!</h4>
          )}
        </>
      )}
    </>
  );
}
