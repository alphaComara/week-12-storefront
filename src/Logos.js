
import React from "react";
class Logos extends React.Component {
  constructor() {
    super();
    this.state = {
      response: [],
    };
  }
  componentDidMount() {
    this.callApi()
      .then((response) => {
        this.setState({ response });
      })
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("http://localhost:3001/logos");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    let logos = this.state.response
    return (
      <div>
          {logos.map((logo) =>
            <p key={logo._id}>{logo.title}</p>
          )}
      </div>
    );
  }
}
export default Logos;