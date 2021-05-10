import React from "react";
import "./directorystyle.scss";
import { sections } from "./directory.data";
import  MenuItems  from "../Menu-items/menu-items.jsx";

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...section }) => (
          <MenuItems key={id} {...section}></MenuItems>
        ))}
      </div>
    );
  }
}

// export default Directory;
