import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem:'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state
    return (
    <Segment inverted>
      <Menu inverted fluid pointing secondary>
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          position="right"
        />
        <Menu.Item
          name="Stories"
          active={activeItem === "stories"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="About Me"
          active={activeItem === "aboutme"}
          onClick={this.handleItemClick}
        />
      </Menu>
    </Segment>
    );
  }
}
