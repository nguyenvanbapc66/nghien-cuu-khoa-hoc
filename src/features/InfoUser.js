import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const InfoUser = ({
  id,
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
  deleteUser,
}) => {
  const [isOpenDetail, setIsOpenDetail] = useState(true);

  const style = {
    height: "100%",
    marginBottom: "50px",
  };

  const handleBtnDeleteUser = (id) => {
    deleteUser(id);
  };

  return (
    <div style={style}>
      <div className="input-wrapper">
        <div className="loan">
          <div className="info">
            <div className="name-user">{nameUser}</div>
            <FontAwesomeIcon className="check" icon={faCheckCircle} />
          </div>
          <div className="input-wrapper">
            <div className="inner">
              <Button
                color="#e74c3c"
                name="Delete"
                onClick={() => handleBtnDeleteUser(id)}
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
                  <Input value={nameUser} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Lương</div>
                  <Input value={salary} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Ngày sinh</div>
                  <Input value={date} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Tỉnh / Thành phố</div>
                  <Input value={region} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Giới tính</div>
                  <Input value={gender} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Kết hôn</div>
                  <Input value={married} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Tài sản đảm bảo</div>
                  <Input value={collateral} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Phương thức Trả Lương</div>
                  <Input value={paymentMethod} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Mục đích vay</div>
                  <Input value={purpose} disabled="disabled" />
                </div>
                <div className="inner">
                  <div className="title-input">Nhu cầu vay (Năm)</div>
                  <Input value={yearNumber} disabled="disabled" />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="inner">
                  <div className="title-input">Giá trị đề nghị vay</div>
                  <Input value={money} disabled="disabled" />
                </div>
                <div className="inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
