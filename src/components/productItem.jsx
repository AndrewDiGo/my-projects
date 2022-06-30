import React from "react";

function ProductItem(props) {
  const item = props.data;

  return (
    <div className="col-md-4 col-sm-6 col-xs-12 p-3 stone-container">
      <div className="row">
        <div className="col-6">
          <h3>{item.Name}</h3>
        </div>
        <div className="col-6">
          <h6 className="text-end">{"PHP " + item.Price.toFixed(2)}</h6>
        </div>
        <div className="col-12 text-center">
          <img
            src={item.ImgURL}
            className="img-thumbnail"
            style={{ height: "220px", width: "250px" }}
          />
        </div>
        <div className="col-12 mt-2">
          <p>{item.Description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
