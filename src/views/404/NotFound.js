import { useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();

  const handleClickBtn = () => {
    history.push("/");
  };

  return (
    <div className="not-found-container">
      <h4>This Page Isn't Available</h4>
      <button className="btn btn-primary" onClick={handleClickBtn}>
        Go to HomePage
      </button>
    </div>
  );
};
export default NotFound;
