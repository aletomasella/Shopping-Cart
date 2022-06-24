import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setStoreItems(data))
      .catch((err) => console.error(err))
      .finally(() => console.log(storeItems));
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems &&
          storeItems.map((item: any) => {
            return (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Store;
