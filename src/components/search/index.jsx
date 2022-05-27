import { useState } from "react";
import { useHistory } from "react-router-dom";
import cx from "classnames";
import {
  Col,
  Row,
  Select,
  Form,
  DatePicker,
  TimePicker,
  InputNumber,
} from "antd";

import { PropertySafetyFilled, UserOutlined } from "@ant-design/icons";

const { Option } = Select;

function Search(props) {
  const dateFormat = "DD MMM YYYY";
  const timeFormat = "h:mm A";

  const [form] = Form.useForm();
  const history = useHistory();
  const [overlay, setOverlay] = useState(false);

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

  const focusIn = () => {
    setOverlay(true);
  };

  const focusOut = () => {
    setOverlay(false);
  };

  return (
    <>
      <div className={cx("overlay", !overlay && "hidden")} id="overlay"></div>
      <div
        className="search-bar"
        style={{ maxWidth: PropertySafetyFilled.width }}
      >
        <Form form={form} layout="vertical" onFinish={submitHandle}>
          <Row gutter={16} style={{ alignItems: "flex-end" }}>
            <Col span={24} sm={12} lg={5}>
              <Form.Item
                label="Tipe Driver"
                name="withDriver"
                required={false}
                rules={[{ required: true, message: "Pilih Tipe Driver!" }]}
                onFocus={() => focusIn()}
                onBlur={() => focusOut()}
              >
                <Select disabled={props.detail} placeholder="Pilih Tipe Driver">
                  <Option value="true">Dengan Supir</Option>
                  <Option value="false">Tanpa Supir</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24} sm={12} lg={5}>
              <Form.Item
                label="Tanggal"
                name="date"
                required={false}
                rules={[{ required: true, message: "Pilih Tanggal" }]}
                onFocus={() => focusIn()}
                onBlur={() => focusOut()}
              >
                <DatePicker
                  disabled={props.detail}
                  style={{ width: "100%" }}
                  placeholder="Pilih Tanggal"
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
            <Col span={24} sm={12} lg={5}>
              <Form.Item
                label="Waktu Jemput/Ambil"
                name="time"
                required={false}
                onFocus={() => focusIn()}
                onBlur={() => focusOut()}
                rules={[
                  { required: true, message: "Pilih Waktu Jemput/Ambil" },
                ]}
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
            <Col span={24} sm={12} lg={6}>
              <Form.Item
                label="Jumlah Penumpang (optional)"
                name="capacity"
                onFocus={() => focusIn()}
                onBlur={() => focusOut()}
              >
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
              <Col span={24} lg={3}>
                {props.edit !== true && (
                  <button
                    type="sbmit"
                    className="btn-primary"
                    style={{
                      whiteSpace: "nowrap",
                      marginBottom: "24px",
                      width: "100%",
                    }}
                  >
                    Cari Mobil
                  </button>
                )}
                {props.edit === true && (
                  <button
                    type="sbmit"
                    className="btn-outline"
                    style={{
                      whiteSpace: "nowrap",
                      marginBottom: "24px",
                      width: "100%",
                    }}
                  >
                    Edit
                  </button>
                )}
              </Col>
            )}
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Search;
