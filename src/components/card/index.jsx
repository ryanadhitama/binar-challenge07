import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

// import defaultImage from "../assets/img/car.png";

const { Title } = Typography;

function Card({ car }) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <div className="car-card">
      <img src={car?.image} alt={car?.manufacture} />
      <Title level={4}>
        {car?.manufacture} {car?.model} / {car?.type}
      </Title>
      <span className="price">{numberFormat(car?.rentPerDay)} / Hari</span>
      <p>{car?.description}</p>
      <div className="car-details">
        <span>
          <UserOutlined /> {car?.capacity} orang
        </span>
        <span>
          <SettingOutlined /> {car?.transmission}
        </span>
        <span>
          <CalendarOutlined /> Tahun {car?.year}
        </span>
      </div>
      <Link to={`/detail/${car.id}`}>Pilih Mobil</Link>
    </div>
  );
}

export default Card;
