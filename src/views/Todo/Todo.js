import AddNewProduct from "../AddNewProduct/AddNewProduct";
import "./Todo.scss";

const Todo = ({ todos, deleteTo }) => {
  return (
    <div className="container">
      <div className="todos-container content-left">
        {todos.map((todo, index) => {
          return (
            <div
              className="todos-child"
              key={index}
              onClick={() => deleteTo(todo.id)}
            >
              {index} {todo.name}
            </div>
          );
        })}
      </div>
      <div className="content-right">
        <AddNewProduct />
      </div>
    </div>
  );
};
export default Todo;
