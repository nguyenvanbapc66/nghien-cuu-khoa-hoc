import React from "react";
import InfoUser from "./InfoUser";

const TableResult = (props) => {

  const deleteUser = (id) => {
    console.log(id);
    const listUsers = [...props.listUsers];
    const listUsersUpdate = listUsers.filter((user) => id !== user.id);

    props.updateListUsers(listUsersUpdate);
  };

  return (
    <div className="container-table">
      <div className="table-result">
        <div className="header">
          <h2>Bảng kết quả cho vay</h2>
        </div>

        <div className="content">
          {!props.listUsers
            ? ""
            : props.listUsers.map((user) => (
                <InfoUser
                  key={user.id}
                  id={user.id}
                  nameUser={user.nameUser}
                  salary={user.salary}
                  date={user.date}
                  region={user.region}
                  gender={user.gender}
                  married={user.married}
                  deleteUser={deleteUser}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default TableResult;
