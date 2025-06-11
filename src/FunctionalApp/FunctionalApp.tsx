import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { UserInformation } from "../types";
import { FunctionalForm } from "./FunctionalForm";

export const FunctionalApp = () => {
  const [userData, setUserData] = useState<UserInformation>();
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userData ? userData : null} />
      <FunctionalForm setUserData={setUserData} />
    </>
  );
};
