var React = require('react');

var photosThumb = {
  display: "block",
  "margin": "auto",
  maxWidth: "100%",
  height: "auto",
  borderRadius: 5,
  marginBottom: 30
};

var PhotoItem = React.createClass({
  render: function(){
    return(
      <div className="col-md-3">
        <img key={this.props.key} style={photosThumb} src={this.props.src} alt={this.props.description} />
      </div>
    );
  }
});

module.exports = PhotoItem;
