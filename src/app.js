import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Navbar from './components/navbar';
import DisplayPic from './components/displaypic';
import Posts from './components/pages/posts';

class App extends Component {
  render() {
    return (
      <Grid celled container>
        <Grid.Row verticalAlign="top">
          <Grid.Column>
            <Navbar/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column>
            <DisplayPic/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column>
            <Posts/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App;
