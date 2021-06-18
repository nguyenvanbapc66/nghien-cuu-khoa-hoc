import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const FormInfoUser = ({ listUsers, updateListUsers }) => {
  const [isLoan, setLoan] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("Vietnam");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("Nam");
  const [married, setMarried] = useState("Không");
  const [collateral, setCollateral] = useState("Tín chấp");
  const [paymentMethod, setPaymentMethod] = useState("Chuyển khoản");
  const [purpose, setPurpose] = useState("Tiêu dùng");
  const [yearNumber, setYearNumber] = useState("");
  const [money, setMoney] = useState("");

  const [error, setError] = useState(false);
  const option = {
    gender: [{ value: "Nam" }, { value: "Nữ" }],
    married: [{ value: "Có gia đình" }, { value: "Chưa gia đình" }],
    collaterals: [
      { value: "Tín chấp" },
      { value: "Phương tiện vận tải" },
      { value: "Bất động sản" },
      { value: "Khác" },
    ],
    paymentMethods: [{ value: "Chuyển khoản" }, { value: "Tiền mặt" }],
    purposes: [
      { value: "Tiêu dùng" },
      { value: "Mua BĐS" },
      { value: "Mua Oto" },
      { value: "Khác" },
    ],
  };

  const notiHandleBtnSubmit = () => {
    setTimeout(() => {
      document.getElementById("modal-success").style.display = "none";
    }, 2000);
    document.getElementById("modal-success").style.display = "block";
  };

  const handleClickBtnSubmit = () => {
    if (
      !nameUser ||
      !salary ||
      !date ||
      !region ||
      !gender ||
      !married ||
      !collateral ||
      !paymentMethod ||
      !purpose ||
      !yearNumber ||
      !money
    ) {
      notiHandleBtnSubmit();
      return setError(true);
    }

    let infoUser = {
      id: 1 + Math.random(),
      loan: (Math.round(Math.random() * 1 + 0) * 1) / 1,
      nameUser,
      salary,
      date,
      region,
      gender,
      married,
      collateral,
      paymentMethod,
      purpose,
      yearNumber,
      money,
    };

    notiHandleBtnSubmit();

    setError(false);
    setLoan(infoUser.loan);
    const data = [...listUsers];
    data.push(infoUser);

    updateListUsers(data);
  };

  const renderTextNotiLoan = (isLoan, nameUser) => {
    return (
      <>
        {isLoan ? (
          <>
            <div className="p-right">
              Chúc mừng <span style={{ fontWeight: "bold" }}>{nameUser}</span>{" "}
              đã được vay
            </div>
          </>
        ) : (
          <>
            <div className="p-right">
              Xin lỗi <span style={{ fontWeight: "bold" }}>{nameUser}</span>{" "}
              chưa đủ tiêu chuẩn để cho vay
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="container">
      <div
        id="modal-success"
        className={
          error || !isLoan
            ? "modal-noti modal-fail"
            : "modal-noti modal-success"
        }
        style={{ display: "none" }}
      >
        {!error ? (
          <span className="inline">
            {renderTextNotiLoan(isLoan, nameUser)}
            <FontAwesomeIcon
              className={isLoan ? "check" : "cancel"}
              icon={isLoan ? faCheckCircle : faTimesCircle}
            />
          </span>
        ) : (
          <span className="inline">
            <div className="p-right">Vui lòng điền đầy đủ thông tin</div>
            <FontAwesomeIcon className="cancel" icon={faTimesCircle} />
          </span>
        )}
      </div>

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
                placeholder="Nhập họ và tên"
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
                options={option.gender}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="inner">
              <div className="title-input">Kết hôn</div>
              <Select
                options={option.married}
                value={married}
                onChange={(e) => setMarried(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <div className="title-input">Tài sản đảm bảo</div>
              <Select
                options={option.collaterals}
                value={collateral}
                onChange={(e) => setCollateral(e.target.value)}
              />
            </div>
            <div className="inner">
              <div className="title-input">Phương thức Trả Lương</div>
              <Select
                options={option.paymentMethods}
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <div className="title-input">Mục đích vay</div>
              <Select
                options={option.purposes}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              />
            </div>
            <div className="inner">
              <div className="title-input">Nhu cầu vay (Năm)</div>
              <Input
                type="number"
                placeholder="Nhập số năm"
                value={yearNumber}
                onChange={(e) => setYearNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <div className="title-input">Giá trị đề nghị vay</div>
              <Input
                type="number"
                placeholder="Nhập số tiền cần vay"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </div>
            <div className="inner"></div>
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
