import React, { Component } from "react";
import AddItem from "./addItem";
import ProductItem from "./productItem";

class ProductList extends Component {
  state = {
    AddItemClicked: false,
    ItemLists: [],
  };

  constructor() {
    super();

    localStorage.removeItem("Lists");

    if (localStorage.getItem("Lists") === null) {
      let itemLists = [
        {
          Id: 1,
          Name: "Ruby",
          ImgURL:
            "https://th.bing.com/th/id/OIP.jOk7Vl4RZxy-S_NNN-dZAAHaHa?pid=ImgDet&rs=1",
          Description: "This is a ruby.",
          Price: 1444,
        },
        {
          Id: 2,
          Name: "Emerald",
          ImgURL:
            "https://th.bing.com/th/id/OIP.0el4cWlstkQ9o-QSBAX3XgHaHL?pid=ImgDet&rs=1",
          Description: "This is a emerald.",
          Price: 5560,
        },
        {
          Id: 4,
          Name: "Crystal",
          ImgURL:
            "https://www.esquireme.com/public/images/2020/08/18/Time-Crystals-Dr-Strange-(2).jpg",
          Description: "This is a crystal.",
          Price: 3400,
        },
        {
          Id: 5,
          Name: "Sapphire",
          ImgURL:
            "https://th.bing.com/th/id/OIP.pgq3Q-XdQ_qFTFrX3KtghgHaH5?pid=ImgDet&w=360&h=384&rs=1",
          Description: "This is a sapphire.",
          Price: 5600,
        },
        {
          Id: 3,
          Name: "Diamond",
          ImgURL:
            "https://th.bing.com/th/id/OIP.n1YrXeSw85w0LFGV7poKbAHaF7?pid=ImgDet&w=1000&h=800&rs=1",
          Description: "This is a diamond.",
          Price: 12000,
        },
        {
          Id: 6,
          Name: "Opal",
          ImgURL:
            "https://th.bing.com/th/id/OIP.YeAymVoSYPQYh2VEGa1TcwHaIV?pid=ImgDet&rs=1",
          Description: "This is an opal.",
          Price: 8000,
        },
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
    console.log(item);
    itemLists.push({
      Id: lastId,
      Name: item.ItemName,
      ImgURL:
        item.ImgURL ||
        "https://www.iforium.com/wp-content/uploads/Placeholder-Image-400.png",
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
            return <ProductItem key={"product-item-" + index} data={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
