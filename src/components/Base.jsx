var React = require('react');
var Link = require('react-router').Link

var navStyle = {
  backgroundColor: "#836FFF",
  color: "white",
  paddingBottom: 100
};

var iconBoxStyle = {
  marginTop: 20,
  fontSize: 24
};
var iconLinkMargin = {
  marginRight: 10
};
var marginOffset = {
  marginTop: -100
};
var linkStyle = {
  color: "white",
  textTransform: "uppercase",
  marginLeft: 10
}

var Base = React.createClass({
  render: function(){
    return(
      <div>
        <nav style={navStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div className="col-md-6">
                    <h1>Country News</h1>
                    <h4>Top stories in your country</h4>
                  </div>
                  <div className="col-md-6">
                    <div style={iconBoxStyle} className="icon-box pull-right">
                      <i style={iconLinkMargin} className="fa fa-facebook-square" />
                      <i style={iconLinkMargin} className="fa fa-twitter-square" />
                      <i style={iconLinkMargin} className="fa fa-instagram" />
                      <i style={iconLinkMargin} className="fa fa-linkedin-square" />
                      <i className="fa fa-youtube-square" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-md-offset-8">
                    <div className="pages-box pull-right">
                      <Link style={linkStyle} to={'news'}><b>News</b></Link>
                      <Link style={linkStyle} to={'photos'}><b>Photos</b></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div style={marginOffset} className="col-md-8 col-md-offset-2">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Base;
