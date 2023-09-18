import "./AddNewProduct.scss";
import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClickButton = () => {
    let object = { name, price, size, color };
  };
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow && (
        <div>
          <div>Add New Product</div>
          <div className="input-product">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Price: </label>
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Size: </label>
            <input
              type="text"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Color: </label>
            <input
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={() => handleClickButton()}>
              Submit
            </button>
          </div>
        </div>
      )}
      <div>
        <span onClick={() => handleShow()}>
          {isShow ? "Hide this form" : "Show this form"}
        </span>
      </div>
    </>
  );
};

export default AddNewProduct;
