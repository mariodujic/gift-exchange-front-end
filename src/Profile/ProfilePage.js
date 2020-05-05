import React from "react";
import {titleText} from "../_utils";

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setTitle(titleText.profilePage)
  }

  render() {
    return (
        <div>
          <h2>Profile page</h2>
        </div>
    );
  }
}

export {ProfilePage}
