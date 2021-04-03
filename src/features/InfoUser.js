import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const InfoUser = (props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(true);

  const style = {
    height: "100%",
    marginBottom: "50px",
  };

  const handleBtnDeleteUser = (id) => {
    props.deleteUser(id)
  };

  return (
    <div style={style}>
      <div className="input-wrapper">
        <div className="loan">
          <div className="info">
            <div className="name-user">{props.nameUser}</div>
            <FontAwesomeIcon className="check" icon={faCheckCircle} />
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <Button
                color="#e74c3c"
                name="Delete"
                onClick={() => handleBtnDeleteUser(props.id)}
              />
              <Button
                color="#3498db"
                name="Detail"
                onClick={() => setIsOpenDetail(!isOpenDetail)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={isOpenDetail ? "collapse" : "collapse-in"}>
        <div className="container-form-detail">
          <div className="form-info-user">
            <div className="header">
              <h2>Thông tin khách hàng</h2>
            </div>
            <div className="content">
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Họ và tên</div>
                  <Input value={props.nameUser} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Lương</div>
                  <Input value={props.salary} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Ngày sinh</div>
                  <Input value={props.date} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Tỉnh / Thành phố</div>
                  <Input value={props.region} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Giới tính</div>
                  <Input value={props.gender} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Kết hôn</div>
                  <Input value={props.married} disabled="disabled" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
