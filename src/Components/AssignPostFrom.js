import axios from "axios";
import React, { Component } from "react";

class AssignPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      Search: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api?results=50")
      .then((response) => {
        console.log(response);
        this.setState({ results: response.data.results });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }
  updateSearch(event) {
    this.setState({ Search: event.target.value });
  }

  render() {
    const { results, errorMsg, search } = this.state;
    let results1 = results.filter((post) => {
      return (
        post.name.first
          .toLowerCase()
          .indexOf(this.state.Search.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <h2>List Of Post Request Data:-</h2>
        <div className="d-flex">
          <input
            value={search}
            onChange={this.updateSearch.bind(this)}
            type="search"
            placeholder="Search"
            className="form-control me-2 "
            aria-label="Search"
          />
        </div>
        <br></br>
        {results1
          ? results1.map((post, index) => (
              <div key={index}>
                {`${post.name.title} ${post.name.first} ${post.name.last}`}
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default AssignPostForm;
