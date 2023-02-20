import React, { useEffect, useState } from "react";
import {
  Row,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Col,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/productContext";

const Productdetail = () => {
  const { id } = useParams();

  const { products } = useProductContext();
  console.log(products);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const newProduct = products.filter((product) => product.id == id);
    // setSingleProduct(...newProduct);
    console.log(newProduct);
  }, []);
  // const { title, images, price, description } = singleProduct;
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate("/cart");
  };
  return (
    <>
      {/* <Container>
        <Link className="btn btn-dark my-3 rounded-0  " to="/">
          GO BACK
        </Link>

        <div>
          <h3>{title}</h3>
        </div>
        <Row>
          <Col md={6}>{images && <Image src={images[0]} alt={title} />}</Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{title}</h2>
              </ListGroup.Item>

              <ListGroup.Item>price : ${price}</ListGroup.Item>
              <ListGroup.Item>Description : {description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>$fiv</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* {countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col className="pt-2">Qty</Col>
                    <Col>
                      <Form.Control>
                        <option value="1"></option>
                        <option value="1"></option>
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )} */}
      {/* 
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    type="button"
                    className="btn-block w-100 bg-dark border-0 rounded-0"
                    // disabled={countInStock === 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Productdetail;
