import React from "react";

export default class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "Books",
      quantity: "",
      totalCost: 0,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });};
  handleSubmit = (event) => {
    event.preventDefault();
    const { item, quantity } = this.state;
    const prices = { Books: 70, Pencil: 5, Pen: 10 };
    this.setState({
      totalCost: quantity  * prices[item],
    });
  };
  render() {
    return (
      <div style={{border: "1px solid black", padding: "20px", width: "300px",}}>
        <h4 style={{ color: "#68cf48" }}>Item Purchase Form</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Item: </label>
          <select
            name="item"
            value={this.state.item}
            onChange={this.handleChange}>
            <option value="Books">Books</option>
            <option value="Pencil">Pencil</option>
            <option value="Pen">Pen</option>
          </select>
          <br />
          <br />
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={this.state.quantity}
            onChange={this.handleChange}/>
          <br />
          <br />
          <button type="submit">Get Total Cost</button>
        </form>
        <br/>
        <label>Total Cost: </label>
        <input type="text" value={this.state.totalCost} readOnly />
      </div>
    );
  }
}
