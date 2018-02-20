import React from 'react';

const AlbumList = (props) => {

  const showList = ({albumList}) => {
    if(albumList) {
      return albumList.map((album, i) => {
        return (
          <img key={i} src={`/images/albums/${album.cover}.jpg`}/>
        )
      })
    }
  }
 
  return(
    <div className="album_list">
     {showList(props)}
    </div>
  )
}

export default AlbumList;