import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Empty, Row, Skeleton } from "antd";

import useQuery from "@libs/utils/query";
import { Banner, Card, Container, Search } from "@components";
import { getAsyncData } from "@reducers/api-store";

function Cars() {
  const dispatch = useDispatch();
  const listCarsJson = useSelector((state) => state.api.cars);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = useQuery();

  useEffect(() => {
    dispatch(getAsyncData());
  }, [dispatch]);

  useEffect(() => {
    if (query.get("availableAt") && query.get("withDriver")) {
      setLoading(true);
      setResult([]);

      setTimeout(function () {
        const withDriver = query.get("withDriver").toLowerCase() === "true";
        const capacity = parseInt(query.get("capacity")) || 0;
        const availableAt = new Date(query.get("availableAt"));

        const newList = listCarsJson.filter(function (item) {
          return (
            item.capacity >= capacity &&
            item.withDriver === withDriver &&
            new Date(item.availableAt).getTime() >= availableAt
          );
        });
        setResult(newList);
        setShowResult(true);
        setLoading(false);
      }, 1000);
    } else {
      setShowResult(false);
      setResult([]);
    }
  }, [query, listCarsJson]);

  return (
    <Fragment>
      <Banner hideButton />
      <section className="search-wrapper">
        <Container>
          <Search width={"1047px"} />
        </Container>
      </section>
      <div className="row">
        <section className="car-result-wrapper">
          <Container>
            <Row gutter={24}>
              {loading && (
                <>
                  {Array(9)
                    .fill(1)
                    .map((el, i) => (
                      <Col span={24} sm={12} lg={8} key={i}>
                        <Skeleton
                          active
                          style={{ marginBottom: "50px" }}
                        ></Skeleton>
                      </Col>
                    ))}
                </>
              )}

              {showResult &&
                !loading &&
                result.length > 0 &&
                result.map((car, index) => (
                  <Col span={24} sm={12} lg={8} key={index}>
                    <Card car={car} />
                  </Col>
                ))}
              <Col span={24}>
                {showResult && !loading && result.length < 1 && <Empty />}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fragment>
  );
}

export default Cars;
