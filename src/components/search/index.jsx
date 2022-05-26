import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import {
  Col,
  Row,
  Select,
  Form,
  DatePicker,
  TimePicker,
  InputNumber,
  Typography,
} from "antd";

import { PropertySafetyFilled, UserOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Title } = Typography;

function Search(props) {
  const dateFormat = "DD MMM YYYY";
  const timeFormat = "h:mm A";

  const [form] = Form.useForm();
  const history = useHistory();
  const [state, setState] = useState("");

  function submitHandle() {
    setState({
      type: form.getFieldValue("type"),
      date: moment(form.getFieldValue("date")),
      time: moment(form.getFieldValue("time")),
      passanger: form.getFieldValue("passanger"),
    });
    history.push("/result");
  }

  return (
    <div
      className="search-bar"
      style={{ maxWidth: PropertySafetyFilled.width }}
    >
      {props.title === true && <Title level={4}>Pencarianmu</Title>}
      <Form form={form} layout="vertical" onFinish={submitHandle}>
        <Row
          gutter={16}
          style={{ flexFlow: "row nowrap", alignItems: "flex-end" }}
        >
          <Col style={{ width: "100%" }}>
            <Form.Item
              label="Tipe Driver"
              name="type"
              required={false}
              rules={[{ required: true, message: "Pilih Tipe Driver!" }]}
            >
              <Select disabled={props.detail} placeholder="Pilih Tipe Driver">
                <Option value="1">Dengan Supir</Option>
                <Option value="2">Tanpa Supir</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col style={{ width: "100%" }}>
            <Form.Item
              label="Tanggal"
              name="date"
              required={false}
              rules={[{ required: true, message: "Pilih Tanggal" }]}
            >
              <DatePicker
                disabled={props.detail}
                style={{ width: "100%" }}
                placeholder="Pilih Tanggal"
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col style={{ width: "100%" }}>
            <Form.Item
              label="Waktu Jemput/Ambil"
              name="time"
              required={false}
              rules={[{ required: true, message: "Pilih Waktu Jemput/Ambil" }]}
            >
              <TimePicker
                disabled={props.detail}
                style={{ width: "100%" }}
                placeholder="Pilih Waktu"
                use12Hours
                format={timeFormat}
              />
            </Form.Item>
          </Col>
          <Col style={{ width: "100%" }}>
            <Form.Item label="Jumlah Penumpang (optional)" name="passanger">
              <InputNumber
                disabled={props.detail}
                className="input-penumpang"
                style={{ width: "100%" }}
                placeholder="Jumlah Penumpang"
                prefix={<UserOutlined />}
                min={1}
                max={100}
              />
            </Form.Item>
          </Col>
          {props.detail !== true && (
            <Col>
              {props.edit !== true && (
                <button
                  type="sbmit"
                  className="btn-primary"
                  style={{ whiteSpace: "nowrap", marginBottom: "24px" }}
                >
                  Cari Mobil
                </button>
              )}
              {props.edit === true && (
                <button
                  type="sbmit"
                  className="btn-outline"
                  style={{ whiteSpace: "nowrap", marginBottom: "24px" }}
                >
                  Edit
                </button>
              )}
            </Col>
          )}
        </Row>
      </Form>
    </div>
  );
}

export default Search;
