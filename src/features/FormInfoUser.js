import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const FormInfoUser = (props) => {
  const [nameUser, setNameUser] = useState("");
  const [salary, setSalary] = useState(0);
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("Vietnam");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("Nam");
  const [married, setMarried] = useState("Không");

  const [error, setError] = useState("");

  const optionGender = [{ value: "Nam" }, { value: "Nữ" }];
  const optionMarried = [{ value: "Có" }, { value: "Không" }];

  const handleClickBtnSubmit = () => {
    if (!nameUser || !salary || !date || !region || !gender || !married) {
      return setError("Vui lòng điền đầy đủ thông tin");
    }

    let infoUser = {
      id: 1 + Math.random(),
      nameUser,
      salary,
      date,
      region,
      gender,
      married,
    };

    setError("");
    props.handleListUsersData(infoUser);
  };

  return (
    <div className="container">
      <div className="form-info-user">
        <div className="header">
          <h2>Thông tin khách hàng</h2>
        </div>
        <div className="content">
          <div className="input-wrapper">
            <div className="inner">
              <div className="title-input">Họ và tên</div>
              <Input
                type="text"
                value={nameUser}
                onChange={(e) => setNameUser(e.target.value)}
              />
            </div>
            <div className="inner">
              <div className="title-input">Lương</div>
              <Input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <div className="title-input">Ngày sinh</div>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="inner">
              <div className="title-input">Tỉnh / Thành phố</div>
              <RegionDropdown
                country={country}
                value={region}
                onChange={setRegion}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <div className="title-input">Giới tính</div>
              <Select
                options={optionGender}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="inner">
              <div className="title-input">Kết hôn</div>
              <Select
                options={optionMarried}
                value={married}
                onChange={(e) => setMarried(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <Button
            color="#3498db"
            onClick={handleClickBtnSubmit}
            name="Submit"
          />
        </div>
        <div className="error-message">{error}</div>
      </div>
    </div>
  );
};

export default FormInfoUser;
