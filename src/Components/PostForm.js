import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",
      title: "",
      body: "",
    };
  }

  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { Id, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="Id"
              value={Id}
              onChange={this.changehandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changehandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changehandler}
            />
          </div>
          <button type="submit">Sumbit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
