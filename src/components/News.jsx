var React = require('react');
var Post = require('./Post.jsx')

var posts = [
  {
    "id": 1,
    "profilePic": "https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png",
    "title": "Obesity in America",
    "subtitle": "Why are Americans fat?",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices pharetra imperdiet. Vestibulum maximus et quam in vestibulum. Curabitur consectetur sagittis quam non pulvinar. Aliquam erat volutpat. Vivamus sit amet eros convallis, bibendum est at, placerat massa. Duis porta est ligula, eu tristique tellus molestie nec. Cras vitae elementum velit. Sed elementum vitae neque quis convallis. Aliquam placerat diam quis laoreet feugiat. Aenean et sapien urna. Duis lacinia a metus nec luctus. Pellentesque non nunc felis.",
    "img1": "http://www.mealadvisors.com/files/get/path/original/galleries/burger_large.jpg",
    "img2": "http://i.imgur.com/r68g0.jpg?fb",
    "location": "Kentucky, USA"
  },
  {
    "id": 2,
    "profilePic": "http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Film-icon.png",
    "title": "React Native",
    "subtitle": "Building native apps with react",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices pharetra imperdiet. Vestibulum maximus et quam in vestibulum. Curabitur consectetur sagittis quam non pulvinar. Aliquam erat volutpat. Vivamus sit amet eros convallis, bibendum est at, placerat massa. Duis porta est ligula, eu tristique tellus molestie nec. Cras vitae elementum velit. Sed elementum vitae neque quis convallis. Aliquam placerat diam quis laoreet feugiat. Aenean et sapien urna. Duis lacinia a metus nec luctus. Pellentesque non nunc felis.",
    "img1": "https://facebook.github.io/react/img/logo_og.png",
    "img2": "https://www.progville.com/wp-content/uploads/2015/01/react-native-ios-javascript-825x510.jpg",
    "location": "Kullavik, Sweden"
  }
];


var News = React.createClass({
  render: function(){
    var postItems = posts.map(function(post){
      return(
        <Post key={post.id} profilePic={post.profilePic} title={post.title} subtitle={post.subtitle} text={post.text} img1={post.img1} img2={post.img2} location={post.location}/>
      );
    });

    return(
      <div>{postItems}</div>
    );
  }
});

module.exports = News;
