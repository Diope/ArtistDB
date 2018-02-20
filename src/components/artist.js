import React, {Component} from 'react';
import axios from 'axios';

import Header from './Header';
import AlbumList from './AlbumList';

const REQ_URL = `http://localhost:3004/artists`

class Artist extends Component {
  constructor(props){
    super(props)

    this.state = {artist: ""}
  }

  componentDidMount(){
    return axios.get(`${REQ_URL}/${this.props.match.params.id}`)
      .then(resp => resp.data)
      .then((json) => {
        this.setState({artist: json})
      })
  }

  render() {
    const style = {
      background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`
    }
    return (
      <div>
        <Header />
        <div className="artist_bio">
          <div className="avatar">
            <span style={style}></span>
          </div>
          <div className="bio">
            <h3>{this.state.artist.name}</h3>
            <div className="bio_text">
              {this.state.artist.bio}
            </div>
          </div>
          <AlbumList albumList={this.state.artist.albums}/>
        </div>  
      </div>
    )
  }
}

export default Artist;