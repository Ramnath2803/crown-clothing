import React from "react";
import "./directorystyle.scss";
import {sections} from "./directory.data"
import { MenuItems } from "../Menu-items/menu-items";

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections
      
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItems key={section.id} title={section.title} img={section.imageUrl}></MenuItems>
        ))}
      </div>
    );
  }
}

// export default Directory;
