var React = require('react');

var postBox = {
  borderRadius: 0,
  paddingTop: 20,
  paddingBottom: 20
};

var postImgThumb = {
  maxHeight: 100,
  width: "auto",
  marginRight: 10,
  borderRadius: 5
};

var profileImg ={
  maxWidth: 50,
  height: "auto",
  display: "block",
  margin: "auto",
  marginTop: 20
};

var Post = React.createClass({
  render: function(){
    return(
      <div style={postBox} className="row panel panel-default">
        <div className="col-md-2">
          <img style={profileImg} src={this.props.profilePic} alt="profile picture" />
        </div>
        <div className="col-md-10">
          <h3>{this.props.title}</h3>
          <h5>{this.props.subtitle}</h5>
          <p>{this.props.text}</p>
          <img style={postImgThumb} src={this.props.img1} alt="picture" />
          <img style={postImgThumb} src={this.props.img2} alt="picture" />
          <p><b>{this.props.location}</b></p>
        </div>
      </div>
    );
  }
});

module.exports = Post;
