import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../style/style.css';

export default class DisplayPic extends Component {
  render() {
    return (
      <Image className="bg"
        src='../../images/image.png'
        fluid
      />
    );
  }
}