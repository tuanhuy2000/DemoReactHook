import useFetch from "../../customize/fetch";

const List = () => {
  "https://reqres.in/api/users?page=2";

  const { list, loading } = useFetch(
    "https://reqres.in/api/users?page=2",
    true
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.avatar}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
