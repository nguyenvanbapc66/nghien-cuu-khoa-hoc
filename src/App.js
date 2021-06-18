import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import FormInfoUser from "./features/FormInfoUser";
import TableResult from "./features/TableResult";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "./assets/images";

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
      <Navbar className="navbar" expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src={images.logo.default} width="80" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/form">Nhập thông tin</Nav.Link>
            <Nav.Link href="/users">Kết quả cho vay</Nav.Link>
            <NavDropdown title="Thuật toán" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="classifer"
                href="#naive-bayes-classifer"
              >
                Naive Bayes Classifer
              </NavDropdown.Item>
              <NavDropdown.Item
                className="classifer"
                href="#decision-tree-classifer"
              >
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

      <div className="footer-wrapper">
        <div className="footer m-top">
          <div className="inline between">
            <div className="inline contact">
              <div
                className="font-12"
                style={{
                  paddingRight: "10px",
                  borderRight: "1px #cacaca solid",
                }}
              >
                Sơ đồ trang
              </div>
              <div
                className="font-12"
                style={{
                  paddingLeft: "10px",
                }}
              >
                Liên hệ
              </div>
            </div>
            <div className="inline">
              <div className="font-12 spacing-right2">
                Kết nối với chúng tôi
              </div>
              <div className="inline">
                <i className="fab fa-facebook-square spacing-right"></i>
                <i className="fab fa-instagram spacing-right"></i>
                <i className="fab fa-youtube spacing-right"></i>
              </div>
            </div>
          </div>
          <div className="font-12 m-top">
            Bản quyền © 2014 thuộc về Ngân hàng CNTT3 Bank. Bảo lưu mọi quyền
            lợi.
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
