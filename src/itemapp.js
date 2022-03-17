import React from "react";
export default class Itemapp extends React.Component {
  render() {
    return (
      <div>
        <img width="150" src={this.props.src} alt="" />
        <br />
        im {this.props.name} and i have
        <br />
        {this.props.vitaminc} vitaminc and i have
        {this.props.Calories} Calories
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked === true) {
              this.props.funcSelect(Number(this.props.vitaminc));
            } else {
              this.props.funcUnSelect(Number(this.props.vitaminc));
            }
          }}
        />
        <hr />
        <hr />
        <hr />
      </div>
    );
  }
}
