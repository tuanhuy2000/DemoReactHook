import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo/Todo";
import List from "./views/List/List";
import { CountDown, NewCountDown } from "./views/CountDown/CountDown";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "./views/Blog/Blog";
import DetailBlog from "./views/Blog/DetailBlog";
import AddNewBlog from "./views/AddNewBlog/AddNewBlog";
import NotFound from "./views/404/NotFound";
import Product from "./views/Products/Product";
import "react-image-lightbox/style.css";
import OTP from "./views/OTP/OTP";

const App = () => {
  let [name, setName] = useState("huy");
  let [todos, setTodo] = useState([
    { id: 1, name: "aaa" },
    { id: 2, name: "bbb" },
  ]);

  useEffect(() => {
    console.log("run");
  }, [name]);

  const handleClick = () => {
    let todo = { id: 3, name: name };
    setTodo([...todos, todo]);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const deleteTodo = (id) => {
    let curTodo = todos;
    curTodo = curTodo.filter((item) => item.id !== id);
    setTodo(curTodo);
  };

  const onTimeUp = () => {
    alert("time up");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <CountDown onTimeUp={onTimeUp} />
              <span>------------------</span>
              <NewCountDown onTimeUp={onTimeUp} />
            </Route>

            <Route path="/todo">
              <img src={logo} className="App-logo" alt="logo" />

              <input
                type="text"
                value={name}
                onChange={(event) => handleChange(event)}
              />
              <button type="button" onClick={() => handleClick()}>
                click
              </button>
              <Todo todos={todos} deleteTo={deleteTodo} />
            </Route>

            <Route path="/user" exact>
              <List />
            </Route>

            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id" exact>
              <DetailBlog />
            </Route>
            <Route path="/add" exact>
              <AddNewBlog />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/otp">
              <OTP />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
