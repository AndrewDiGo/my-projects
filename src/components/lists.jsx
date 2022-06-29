import React, { Component } from "react";
import AddItem from "./addItem";

class List extends Component {
  state = {
    AddItemClicked: false,
    ItemLists: [],
  };

  constructor() {
    super();

    if (localStorage.getItem("Lists") === null) {
      let itemLists = [
        { Id: 1, Name: "Ruby", Description: "This is a ruby.", Price: 1444 },
        {
          Id: 2,
          Name: "Emerald",
          Description: "This is a emerald.",
          Price: 5560,
        },
        {
          Id: 4,
          Name: "Crystal",
          Description: "This is a crystal.",
          Price: 3400,
        },
        {
          Id: 5,
          Name: "Sapphire",
          Description: "This is a sapphire.",
          Price: 5600,
        },
        {
          Id: 3,
          Name: "Diamond",
          Description: "This is a diamond.",
          Price: 12000,
        },
        { Id: 6, Name: "Opal", Description: "This is an opal.", Price: 8000 },
      ];
      localStorage.setItem("Lists", JSON.stringify(itemLists));
    }
  }

  componentDidMount() {
    this.setState({
      ItemLists: JSON.parse(localStorage.getItem("Lists")),
    });
  }

  addNewItem = (item) => {
    let itemLists = JSON.parse(localStorage.getItem("Lists"));

    let lastId = [...itemLists].sort((a, b) => b.Id - a.Id)[0].Id + 1;

    itemLists.push({
      Id: lastId,
      Name: item.ItemName,
      Description: item.Description,
      Price: parseInt(item.Price),
    });

    itemLists = [...itemLists].sort((a, b) => a.Id - b.Id);

    localStorage.setItem("Lists", JSON.stringify(itemLists));

    this.setState({
      ItemLists: itemLists,
    });
  };

  handleAddItem = () => {
    this.setState({
      AddItemClicked: !this.state.AddItemClicked,
    });
  };
  data;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mt-5 mb-2 col-12">
            <button onClick={this.handleAddItem} className="btn btn-primary">
              {this.state.AddItemClicked ? "Hide Form" : "Add Item"}
            </button>
          </div>
        </div>
        {this.state.AddItemClicked ? (
          <AddItem onAddItem={this.addNewItem} />
        ) : (
          ""
        )}
        <div className="row">
          <div className="mt-4 mb-4 col-12">
            <h3>Featured Stones</h3>
          </div>
        </div>
        <div className="row">
          {this.state.ItemLists.map((item, index) => {
            return (
              <div
                className="col-4 p-3 stone-container"
                key={"stones-" + index}
              >
                <div className="row">
                  <div className="col-6">
                    <h3>{item.Name}</h3>
                  </div>
                  <div className="col-6">
                    <h5 className="text-end">
                      {"PHP " + item.Price.toFixed(2)}
                    </h5>
                  </div>
                  <div className="col-12 mt-5">
                    <p>{item.Description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
