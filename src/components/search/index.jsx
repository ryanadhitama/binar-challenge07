import React from "react";
import { useHistory } from "react-router-dom";

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

  function submitHandle() {
    const time =
      form.getFieldValue("date").format("Y-MM-DD") +
      " " +
      form.getFieldValue("time").format("HH:mm:ss");
    history.push(
      `/cars?withDriver=${form.getFieldValue(
        "withDriver"
      )}&availableAt=${time}&capacity=${form.getFieldValue("capacity")}`
    );
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
              name="withDriver"
              required={false}
              rules={[{ required: true, message: "Pilih Tipe Driver!" }]}
            >
              <Select disabled={props.detail} placeholder="Pilih Tipe Driver">
                <Option value="true">Dengan Supir</Option>
                <Option value="false">Tanpa Supir</Option>
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
            <Form.Item label="Jumlah Penumpang (optional)" name="capacity">
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
