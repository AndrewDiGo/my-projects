import React, { Component } from "react";

class AddItem extends Component {
  state = {
    ItemName: "",
    Description: "",
    Price: "",
    ErrorMessage: "",
    SuccessMessage: "",
    OnAddItem: this.props.onAddItem,
  };

  handleSaveItem = () => {
    var validation = this.validateFormData(this.state);
    if (validation.IsValid) {
      this.state.OnAddItem({
        ItemName: this.state.ItemName,
        Description: this.state.Description,
        Price: this.state.Price,
      });

      this.setState({
        ItemName: "",
        Description: "",
        Price: "",
        ErrorMessage: "",
        SuccessMessage: "Item saved.",
      });
    } else {
      this.setState({
        ErrorMessage: validation.ErrorMessage,
      });
    }
  };

  validateFormData(formData) {
    let errorMessage = "";
    let isValid = false;

    if (!formData.ItemName) errorMessage = "Item Name is required.";
    else if (!formData.Description)
      errorMessage = "Item Description is required.";
    else if (!formData.Price) errorMessage = "Price is required.";
    else isValid = true;

    return {
      IsValid: isValid,
      ErrorMessage: errorMessage,
    };
  }

  setItemValue(e) {
    let value = e.value;
    switch (e.name) {
      case "item-name":
        this.setState({
          ItemName: value,
        });
        break;
      case "item-description":
        this.setState({
          Description: value,
        });
        break;
      case "item-price":
        this.setState({
          Price: value,
        });
        break;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-12 mb-1">
              <label>Item Name</label>
              <input
                type="text"
                name="item-name"
                value={this.state.ItemName}
                onChange={(event) => {
                  this.setItemValue(event.target);
                }}
                className="form-control"
              />
            </div>
            <div className="col-12 mb-1">
              <label>Description</label>
              <textarea
                name="item-description"
                value={this.state.Description}
                onChange={(event) => {
                  this.setItemValue(event.target);
                }}
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12 mb-2">
              <label>Price</label>
              <input
                type="number"
                name="item-price"
                value={this.state.Price}
                onChange={(event) => {
                  this.setItemValue(event.target);
                }}
                className="form-control"
              />
            </div>
            <div className="col-12 mb-2">
              <button onClick={this.handleSaveItem} className="btn btn-success">
                Save
              </button>
            </div>
            {this.state.ErrorMessage ? (
              <div className="col-12 mb-2">
                <div className="alert alert-danger">
                  {this.state.ErrorMessage}
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.SuccessMessage ? (
              <div className="col-12 mb-2">
                <div className="alert alert-success">
                  <label>{this.state.SuccessMessage}</label>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;
