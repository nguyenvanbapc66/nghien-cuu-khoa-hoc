import React, { useState } from "react";
import FormInfoUser from "./features/FormInfoUser";
import TableResult from "./features/TableResult";

const App = () => {
  const [listUsers, setListUsers] = useState([]);

  const handleListUsersData = (User) => {
    const data = [...listUsers];
    data.push(User);
    setListUsers(data);
  };

  return (
    <div className="App">
      <FormInfoUser
        listUsers={listUsers}
        handleListUsersData={handleListUsersData}
      />
      <TableResult listUsers={listUsers} />
    </div>
  );
};

export default App;
