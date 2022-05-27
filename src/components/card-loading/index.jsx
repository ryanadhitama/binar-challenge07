import { Row, Col, Skeleton } from "antd";

const CardLoading = () => {
  return (
    <Row gutter={24}>
      {Array(9)
        .fill(1)
        .map((el, i) => (
          <Col span={24} sm={12} lg={8} key={i}>
            <Skeleton active style={{ marginBottom: "50px" }}></Skeleton>
          </Col>
        ))}
    </Row>
  );
};

export default CardLoading;
