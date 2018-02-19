import React, {Component} from 'react';
import axios from 'axios';

import Banner from './Banner';
import ArtistList from './ArtistList';

const ARTIST_URL = "http://localhost:3004/artists"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: ''
    }
  }

  componentDidMount(){
    return axios.get(ARTIST_URL)
      .then(resp => resp.data)
      .then(json => {
        this.setState({artists:json})
      })
  }


  render() {
    return (
      <div>
        <Banner></Banner>
        <ArtistList allArtists={this.state.artists}></ArtistList>
      </div>
    )
  }
}

export default Home;