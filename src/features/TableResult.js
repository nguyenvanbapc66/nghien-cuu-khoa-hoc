import React from "react";
import InfoUser from "./InfoUser";

const TableResult = (props) => {
  return (
    <div className="container-table">
      <div className="table-result">
        <div className="header">
          <h2>Bảng kết quả cho vay</h2>
        </div>

        <div className="content">
          {props.listUsers.map((user) => (
            <InfoUser
              key={user.id}
              nameUser={user.nameUser}
              salary={user.salary}
              date={user.date}
              region={user.region}
              gender={user.gender}
              married={user.married}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableResult;
