import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import InfoUser from "./InfoUser";

const TableResult = ({ listUsers, updateListUsers }) => {
  const [nameCustomer, setNameCustomer] = useState("");
  const [newListUsers, setNewListUsers] = useState(listUsers);

  const deleteUser = (id) => {
    const listUsers = [...listUsers];
    const listUsersUpdate = listUsers.filter((user) => id !== user.id);

    updateListUsers(listUsersUpdate);
  };

  const handleSearch = () => {
    let newListUsers = listUsers.filter((user) => {
      return user.nameUser.toLowerCase().includes(nameCustomer.toLowerCase());
    });
    setNewListUsers(newListUsers);
  };

  const onKeyPress = (event) => {
    const { key } = event;
    if (key.toLowerCase() === "enter") {
      handleSearch();
    }
  };

  return (
    <div className="container-table">
      <div className="table-result">
        <div className="header">
          <h2>Bảng kết quả cho vay</h2>
        </div>

        <div className="search-box">
          <Input
            type="text"
            placeholder="Nhập tên khách hàng"
            value={nameCustomer}
            onChange={(e) => {
              setNameCustomer(e.target.value);
            }}
            onKeyPress={(e) => onKeyPress(e)}
          />
          <Button color="#3498db" name="Submit" onClick={handleSearch} />
        </div>

        <div className="content">
          {!newListUsers.length ? (
            <h4
              style={{ textAlign: "center", paddingBottom: 50, color: "red" }}
            >
              Không có tên khách hàng này, vui lòng nhập lại!!!
            </h4>
          ) : (
            newListUsers.map((user) => (
              <InfoUser
                key={user.id}
                id={user.id}
                nameUser={user.nameUser}
                salary={user.salary}
                date={user.date}
                region={user.region}
                gender={user.gender}
                married={user.married}
                collateral={user.collateral}
                paymentMethod={user.paymentMethod}
                purpose={user.purpose}
                yearNumber={user.yearNumber}
                money={user.money}
                deleteUser={deleteUser}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TableResult;
