import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import FormInfoUser from "./features/FormInfoUser";
import TableResult from "./features/TableResult";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

const App = () => {
  const saveListUsers = JSON.parse(localStorage.getItem("listUsers"));
  const [listUsers, setListUsers] = useState(saveListUsers || []);

  const updateListUsers = (listUsers) => {
    setListUsers(listUsers);
  };

  useEffect(() => {
    localStorage.setItem("listUsers", JSON.stringify(listUsers));
  });

  return (
    <Router>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="/">CNTT3 Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/form">Nhập thông tin</Nav.Link>
            <Nav.Link href="/users">Kết quả cho vay</Nav.Link>
            <NavDropdown title="Thuật toán" id="basic-nav-dropdown">
              <NavDropdown.Item href="#naive-bayes-classifer">
                Naive Bayes Classifer
              </NavDropdown.Item>
              <NavDropdown.Item href="#decision-tree-classifer">
                Decision Tree Classifer
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="App">
        <Switch>
          <Route path="/form">
            <FormInfoUser
              listUsers={listUsers}
              updateListUsers={updateListUsers}
            />
          </Route>
          <Route path="/users">
            <TableResult
              listUsers={listUsers}
              updateListUsers={updateListUsers}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
