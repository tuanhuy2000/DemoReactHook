import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../customize/fetch";
import "./Blog.scss";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();

  const handleBackData = () => {
    history.push("/blog");
  };

  const { list: dataBlog, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );

  return (
    <>
      <div>
        <span onClick={handleBackData}>&lt;---Back</span>
      </div>
      <div className="blog-detail">
        {!loading && dataBlog && (
          <>
            <div className="title">
              Blog id: {id}---{dataBlog.title}
            </div>
            <div className="content">{dataBlog.body}</div>
          </>
        )}
        {loading && <div>loading...</div>}
      </div>
    </>
  );
};

export default DetailBlog;
