class Navbar extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg navbar-light">
          <a Class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#carouselIndicators">Home <span className="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Items</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Review</a>
              </li>
              <li Class="nav-item dropdown active">
                <a Class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Cart
                </a>
                <div Class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a Class="dropdown-item">Quantity</a>
                  <div Class="dropdown-divider"></div>
                  <a Class="dropdown-item">Price</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}
class Carousel extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="carouselIndicators" Class="carousel slide" data-ride="carousel">
        <ol Class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" Class="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div Class="carousel-inner">
          <div Class="carousel-item active">
            <img src="/pictures/Cat1.jpg" Class=" d-block w-100 " alt="Cat1"></img>
          </div>
          <div Class="carousel-item" >
            <img src="/pictures/Cat2.jpg" Class=" d-block w-100" alt="Cat2"></img>
          </div>
          <div Class="carousel-item">
            <img src="/pictures/Cat3.jpg" Class=" d-block w-100" alt="Cat3"></img>
          </div>
        </div>
        <a Class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span Class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span Class="sr-only">Previous</span>
        </a>
        <a Class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span Class="carousel-control-next-icon" aria-hidden="true"></span>
          <span Class="sr-only">Next</span>
        </a>
      </div>
    )
  } 
}
class Items extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div Class="card" inlineStyle="width: 18rem;">
          <img src="..." Class="card-img-top" alt="..."></img>
          <div Class="card-body">
            <h5 Class="card-title">Card title</h5>
            <p Class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" Class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    )
  } 
}
ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<Carousel />, document.getElementById('caro'));
ReactDOM.render(<Items />, document.getElementById('List'));