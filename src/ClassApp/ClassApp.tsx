import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { UserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";

type ClassAppState = {
  userData: UserInformation | null; // null initially or you can set defaults
};

export class ClassApp extends Component<Record<string, never>, ClassAppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  setUserData = (data: UserInformation) => {
    this.setState({ userData: data });
  };

  render() {
    const { userData } = this.state;
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={userData} />
        <ClassForm setUserData={this.setUserData} />
      </>
    );
  }
}
