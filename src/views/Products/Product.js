import "./Product.scss";
import sneaker1 from "../../assets/image/sneaker1.jpg";
import sneaker2 from "../../assets/image/sneaker2.jpg";
import sneaker3 from "../../assets/image/sneaker3.jpg";
import sneaker4 from "../../assets/image/sneaker4.jpg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const Product = () => {
  const images = [sneaker1, sneaker2, sneaker3, sneaker4];
  const [currentUpImg, setCurrentUpImg] = useState(sneaker1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleChangeImg = (sneaker) => {
    setCurrentUpImg(sneaker);
    let index = images.findIndex((item) => item === sneaker);
    setPhotoIndex(index);
  };

  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img
              src={currentUpImg}
              alt="sneaker"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="img-down">
            <div className="img-small">
              <img
                src={sneaker1}
                alt="sneaker1"
                onClick={() => handleChangeImg(sneaker1)}
                className={currentUpImg === sneaker1 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sneaker2}
                alt="sneaker2"
                onClick={() => handleChangeImg(sneaker2)}
                className={currentUpImg === sneaker2 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sneaker3}
                alt="sneaker3"
                onClick={() => handleChangeImg(sneaker3)}
                className={currentUpImg === sneaker3 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sneaker4}
                alt="sneaker4"
                onClick={() => handleChangeImg(sneaker4)}
                className={currentUpImg === sneaker4 ? "active" : ""}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">
            Giày tập thể thao nam Super Flexi Anta 812237701
          </div>
          <div className="price">670.000₫</div>
          <div className="size">Size: 40</div>
          <div className="action">
            <label className="quantity">So luong</label>
            <input type="number" min={0} value={0} />
            <div className="abc">
              <button className="buy">Chon mua</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Product;
