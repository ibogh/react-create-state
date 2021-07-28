import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        FullName: "Ghliss Ibrahim",
        Bio: "I am a junior web developper from Tunisia,Gabes. I am 28 years old. I like Basketball and Tennis ",
        Profession: "Web developper",
        imgSrc: "/me.png",
      },
      show: true,
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }
  render() {
    return (
      <div>
        <button
          style={{
            marginTop: "55px",
            backgroundColor: "#C1F4F0",
            fontSize: "large",
            fontWeight: "bold",
            marginLeft: "43%",
          }}
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Show/Hide the profile
        </button>
        <br />
        <br />

        <div
          style={{ color: "black", fontWeight: "normal", textAlign: "center" }}
        >
          I think you are interested in my profile because you have been looking
          at it for{" "}
          <span style={{ color: "blue", fontWeight: "bolder" }}>
            {this.state.count} seconds
          </span>
          .
        </div>
        {this.state.show ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderStyle: "solid",
              borderColor: "blue",
              borderRadius: "17px",
              width: "60%",
              height: "520px",
              margin: "auto",
              backgroundColor: "#F1F2E2 ",
              marginTop: "30px",
            }}
          >
            <h1 style={{ color: "#5D9FA4" }}>
              Name: {this.state.Person.FullName}
            </h1>
            <h4 style={{ color: "#4E787B " }}>{this.state.Person.Bio}. </h4>
            <h2 style={{ color: "#295559  " }}>
              Profession: {this.state.Person.Profession}
            </h2>
            <img
              src={this.state.Person.imgSrc}
              style={{ width: "25%", height: "50%", borderRadius: "17px" }}
              alt="profile"
            />
          </div>
        ) : null}
      </div>
    );
  }
}
