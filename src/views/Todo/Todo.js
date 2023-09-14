const Todo = ({ todos, deleteTo }) => {
  return (
    <div className="todos-container">
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
      <div className="todos-child"></div>
    </div>
  );
};
export default Todo;
