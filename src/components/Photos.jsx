var React = require('react');
var PhotoItem = require('./PhotoItem.jsx');

var imgBox = {
  borderRadius: 0,
  paddingTop: 20,
  paddingBottom: 20,
};

var photos = [
  {
    "id": 1,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 2,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 3,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 4,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 5,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 6,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 7,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  },
  {
    "id": 8,
    "description": "React Logo",
    "src": "https://facebook.github.io/react/img/logo_og.png"
  }
];

var Photos = React.createClass({
  render: function(){
    var photoImages = photos.map(function(photo){
      return(
        <PhotoItem key={photo.id} description={photo.description} src={photo.src} />
      );
    });

    return(
      <div style={imgBox} className="row panel panel-default">
        {photoImages}
      </div>
    );
  }
});

module.exports = Photos;
