import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class SearchPage extends Component {
  state = {
    search: "",
    results: []
  };

  searchArticles = query => {
    API.search(query)
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({
          results: res.data.response.docs
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    // const name = "search";
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search);
  };

  saveArticle = key => {
    console.log("ok" + key);
    // API.saveArticle({
    //     headline: this.state.results.res.data.response.docs,
    //     date:this.state.results,
    //     url:this.state.results
    // })
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search For NY Times Articles</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        {this.state.results.map((article, index) => (
          <Row key={index}>
            <Col size="md-12">
              {/* <p>{article.headline.main}</p> */}
              <Card
                heading={article.headline.main}
                url={article.web_url}
                date={article.pub_date}
                saveArticle={this.saveArticle(index)}
                value={index}
              />
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default SearchPage;
