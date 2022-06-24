import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) =>
        data.map(
          (item: {
            id: number;
            title: string;
            price: number;
            category: { name: string };
            images: [string];
          }) => {
            return {
              id: item.id,
              title: item.title,
              price: item.price,
              category: item.category.name,
              image: item.images[0],
            };
          }
        )
      )
      .then((dataFilter) => setStoreItems(dataFilter))
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
