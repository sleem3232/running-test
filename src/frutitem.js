import React from "react";
import Itempapp from "./itemapp";

export default class fruititem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  addthevitamin = (vitaminc) => {
    let c = Number(this.state.counter);
    c = c + vitaminc;

    this.setState({ counter: c });
  };

  deletethevitamin = (vitaminc) => {
    let c = Number(this.state.counter);
    c = c - vitaminc;
    this.setState({ counter: c });
  };

  render() {
    return (
      <div>
        <h1>Im fruites list</h1>
        <tr>
          <td>
            {" "}
            <Itempapp
              funcSelect={this.addthevitamin}
              funcUnSelect={this.deletethevitamin}
              src="data:image/jpeg;base64,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"
              name="ananas"
              vitaminc="190"
              Calories="12"
            />
          </td>{" "}
        </tr>
        <td>
          <Itempapp
            funcSelect={this.addthevitamin}
            funcUnSelect={this.deletethevitamin}
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/17F1F/production/_110697089_p06p9bdw.jpg"
            name="orange"
            vitaminc="100"
            Calories="44"
          />
        </td>
        <br />
        <td>
          {" "}
          <Itempapp
            funcSelect={this.addthevitamin}
            funcUnSelect={this.deletethevitamin}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5jqfatCoKE9I4_lbXjTnjsGTucbAJl7oEA&usqp=CAU"
            name="watermelon"
            vitaminc="130"
            Calories="99"
          />
        </td>
        <br />
        <td>
          {" "}
          <Itempapp
            funcSelect={this.addthevitamin}
            funcUnSelect={this.deletethevitamin}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68b0O5wgNnMvg2hrPVjD4cRADRiFNcmXHvQ&usqp=CAU"
            name="Banana"
            vitaminc="160"
            Calories="77"
          />
        </td>
        <br />
        <td>
          {" "}
          <Itempapp
            funcSelect={this.addthevitamin}
            funcUnSelect={this.deletethevitamin}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHKkWHOHSAb3IvzbGc1nYjni0lSFg7xIHyQ&usqp=CAU"
            name="cherry"
            vitaminc="120"
            Calories="15"
          />
          <Itempapp
            funcSelect={this.addthevitamin}
            funcUnSelect={this.deletethevitamin}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZRWwaSPSJ14R7VANv8aAd0yxbq3WDyO7yw&usqp=CAU"
            name="Apple"
            vitaminc="170"
            Calories="54"
          />
        </td>
        <br />
        the vitamin c is {this.state.counter}
        <br />
        signature salim sheene
      </div>
    );
  }
}
