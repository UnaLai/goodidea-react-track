import React, {Component} from "react";
import "../styles/homepage.scss";
import Search from "./components/Search.js";
import MainBooks from "./components/MainBooks.js";
import axios from 'axios';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      displayBookData: []
    };
  }
  getBookData() {
    axios.get('https://bookshelf.goodideas-studio.com/api').then(response => {
      this.setState({bookData: response.data.list, displayBookData: response.data.list});
    })
  }

  searchBook = (e) => {
    const regex = new RegExp(e.target.value, "i");
    let displayBookData = this.state.bookData.filter(book => {
      return book.name.match(regex);
    })
    if (displayBookData.length == 0) {
      displayBookData = ["查無任何書籍"];
    }
    this.setState({displayBookData: displayBookData});
  }
  componentDidMount() {
    this.getBookData();
  }
  render() {
    return (<div className="homepage">
      <div className="banner">
        <h1>天瓏書局 X 好想工作室</h1>
      </div>
      <Search searchBook={this.searchBook}></Search>
      <MainBooks bookData={this.state.displayBookData}></MainBooks>
    </div>);
  }
}

export default Homepage;
