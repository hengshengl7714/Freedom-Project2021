class Navbar extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#title">
            <img src="pictures/Logo.png" width="70" height="auto" alt="" loading="lazy" />
             </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#title">Home <span className="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#shop-list">Items</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#question">Question for US</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#contact-heading">Contact for US</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}
class Heading extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="title" class="heading">
        <h1> Adorable Pet Shop</h1>
        <h3> Granting your <i>pet</i> a <strong>comfortable</strong> life</h3>
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
          <li data-target="#carouselIndicators" data-slide-to="3"></li>
        </ol>
        <div Class="carousel-inner">
          <div Class="carousel-item active">
            <img src="pictures/Carousel-1.JPG" Class=" d-block w-100 fit-cover " alt="Carousel-1"></img>
          </div>
          <div Class="carousel-item" >
            <img src="pictures/Carousel-2.JPG" Class=" d-block w-100 fit-cover" alt="Carousel-2"></img>
          </div>
          <div Class="carousel-item">
            <img src="pictures/Carousel-3.JPG" Class=" d-block w-100 fit-cover" alt="Carousel-3"></img>
          </div>
          <div Class="carousel-item">
            <img src="pictures/Carousel-4.JPG" Class=" d-block w-100 fit-cover" alt="Carousel-4"></img>
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
    this.state = {
      listOfItems: [
        {
          id: 'a',
          title: "Bear-strip style shirt",
          description: "Your pet is cute already! A cute suit for your pet to go out will attract more attention.",
          price:12.99,
          image: "pictures/Bear-shirt.JPG",
          alt: "Panda-shirt"
        },
        {
          id: 'b',
          title: "Black Panda shirt",
          description: "Tired of scrambling through stores in search of clothing for your pet? You can buy this product instead! It's great for your pet's comfort and it's warm.",
          price: 8.59,
          image: "pictures/Panda-shirt.JPG",
          alt: "Panda-shirt"
        },
        {
          id: 'c',
          title: "Hawaiian-style",
          description: "Hot Summer is here! The Hawaiian style polo shirt definitely suit your pet and let the pet has a cool summer!!",
          price: 6.99,
          image: "pictures/Hawaiian-style.JPG",
          alt: "Hawaiian-style"
        },
        {
          id: 'd',
          title: "Red-strip hoodie",
          description: "Comfortable casual sport hoodie for the pets. The cloth is adorable for your lovely sweet pet.",
          price: 8.59,
          image: "pictures/Strip-shirt.JPG",
          alt: "Strip-shirt"
        },
        {
          id: 'e',
          title: "Winter Coat",
          description: "Warm coat that gives your pet a warmful winter. Let your pet run around without fearing the coldness.",
          price: 15.99,
          image: "pictures/Dog-coat.JPG",
          alt: "Dog-coat"
        },
        {
          id: 'f',
          title: "Dountbed for pets",
          description: "Ultra soft calming bed for your pet. Made by self-warming Cozy Plush, so your pet will have a warming indoor sleeping.",
          price: 16.99,
          image: "pictures/Dog-nest.JPG",
          alt: "Dog-nest"
        },
        {
          id: 'g',
          title: "Boots for pets",
          description: "soft boot for your pet. Protected pets from coldness and let them run around the park.",
          price: 20.59,
          image: "pictures/Pet-shoe.JPG",
          alt: "Pet-shoe."
        },
        {
          id: 'h',
          title: "Earth Eated Dog Poop bags",
          description: "Guaranteed Leak-proof by having Extra Thick and Strong bags for pets. 15 Bags per Roll.",
          price: 8.99,
          image: "pictures/Pet-bag.JPG",
          alt: "Pet-bag."
        },
      ],
      cartPrice: 0,
      quantity: 0
    }
  }
  Increment = (e) => {
    this.setState({cartPrice: parseFloat(e.target.dataset.price)  + parseFloat(this.state.cartPrice)})
    this.setState({quantity: this.state.quantity + 1})
  }
  Decrement = (e) => {
   // this.state.cartPrice <= 0 ? this.state.cartPrice = 0 : this.state.cartPrice;
   // this.state.quantity <= 0 ? this.state.quantity = 0 : this.state.quantity;
    const diff = parseFloat(this.state.cartPrice) -  parseFloat(e.target.dataset.price)
    if (diff < 0) {
      this.setState({cartPrice: 0})
    }
    else {
      this.setState({cartPrice: diff})
    }
    if (this.state.quantity > 0){
      this.setState({quantity:this.state.quantity - 1})
    }
   // this.setState({cartPrice: (parseFloat(this.state.cartPrice) - parseFloat(e.target.dataset.price))})
    // this.setState({quantity: this.state.quantity - 1})
  }

  render(){
    return(
      <div>
        <h1 class="heading" id="shop-list">Shop</h1>
        <h2 id = "total"> Total: <span class="badge badge-success">${this.state.cartPrice.toFixed(2)}</span><br /> Quantity: <span class="badge badge-warning">{this.state.quantity}</span></h2>
          <div class="container-fluid">
            <div class="row">
              {this.state.listOfItems.map( item => (
                    <div Class="card col-lg-4 col-md-6 col-sm-12" key={item.id}>
                      <img src={item.image} Class="card-img-top" alt={item.alt} />
                      <div Class="card-body">
                        <h5 Class="card-title">{item.title}</h5>
                        <p Class="card-text">{item.description}</p>
                        <h2><span class="badge badge-success">${item.price}</span></h2>
                        <a data-price = {item.price} onClick = {this.Increment} Class="btn btn-primary text-white m-2">+</a>
                        <a data-price = {item.price} onClick = {this.Decrement} Class="btn btn-primary text-white">-</a>
                      </div>
                    </div>
              ))}
            </div>
        </div>
      </div>
    )
  }
}


class ContactUs extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1 class="heading" id="question">Question for US</h1>
        <form>
            <div class="form-row">
              <div class="col m-2">
                <label> First Name</label>
                <input type="text" class="form-control"></input>
              </div>
              <div class="col m-2">
                <label> Last Name</label>
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="form-group m-2">
              <label for="InputEmail1">Email address</label>
              <input type="email" class="form-control" id="InputEmail1"></input>
            </div>  
            <div class="form-group m-2">
              <label for="ControlSelect">Question relating to our product</label>
              <select class="form-control" id="ControlSelect">
                <option> Bear-strip style shirt</option>
                <option> Black Panda shirt</option>
                <option> Hawaiian-style</option>
                <option> Red-strip hoodie</option>
                <option> Winter Coat</option>
                <option> Dountbed for pets </option>
              </select>
            </div>
            <div class="form-group m-2">
            <label for="ControlTextarea">Your Message</label>
            <textarea class="form-control" id="ControlTextarea" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary m-2">Submit</button>
        </form>
      </div>
    )
  }
}
class Contact extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="contact-heading">
        <div>
          <h1 class="heading">Contact</h1>
        </div>
        <div>
          <p id="contact">
          Address: Adorable Pet Shop, Inc 1234 Pet Road Somewhere, NY 11221<br/>
          Phone:(555) 555-1234
          </p>
        </div>
      </div>
    )
  }
}
class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="footer">
        <p>Copyright © 2020   |   Adorable Pet Shop</p>
      </div>
    )
  }
}

class Website extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    quantity: 0,
    cartPrice: 0
    };

  }

  render(){
    return(
      <div>
        <Navbar quantity = {this.state.quantity} price = {this.state.cartPrice} />
        <Heading />
        <Carousel />
        <Items  cartPrice = {this.state.cartPrice}/>
        <ContactUs />
        <Contact />
        <Footer />
      </div>
    )
  }
}
ReactDOM.render(<Website />, document.getElementById('root'));
