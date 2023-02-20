import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiTwotoneStar } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";

import Rating from "../rating/Rating";

import { ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
const Products = () => {
  const id = useParams();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     console.log(data);
  //     setProducts(data.products);
  //   };
  //   fetchProduct();
  // }, []);

  const { products } = useProductContext();

  return (
    <>
      <Container>
        <h3 className="text-dark text-center mt-5">PRODUCTS</h3>
        <Row className="  ">
          {products.map((product, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Card style={{ width: "20rem" }} className="shadow p-3">
                <Link
                  to={`/productsdetail/:id${id}`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img variant="top" src={product.images[0]} />

                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>

                    <ListGroupItem>
                      <Rating value={product.rating} />
                    </ListGroupItem>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Products;
