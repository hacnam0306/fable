import React,{useContext} from 'react';
import {ProductsContext,actions} from '../../../store'
import styles from './Shop.module.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
const Shop = () => {
  const [state,dispatch] = useContext(ProductsContext);
  console.log(state);
  const handleAddProduct = (product) =>{
      dispatch(actions.addProductToCart(product))
  }
  return (
    <div>
    <div className="text-center">
              <img alt="river" className="rounded mt-5 box-shadow-1" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
             <h1 className={`mt-5 ${styles.fs_bigger} mb-3`}>Shop</h1>
             <h3>Explore all of our hair products available as individual,</h3>
             <h3>rituals or bundles</h3>
      </div>
        <Container fluid>
      <Row className="text-center g-4 mt-5" md={4} sm={2} xs={4}>
      {state.products.map( product =>
                <Row>
               <Col className="m-auto">
                <Card className={`${styles.card_true} mb-3 rounded card_main`} >
                <Row>
                <Card.Img variant="top" className={styles.image} src={product.image_after}  onMouseOut={ e => e.currentTarget.src = product.image_after ? product.image_after : product.image_after}  onMouseOver={ e => e.currentTarget.src = product.image_before ? product.image_before : product.image_after}  alt={product.name} />
                </Row>
                <Row>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                 {  product.fixed_price ?<div>  <p>  From <span className="text-danger"><del> ${product.price.toFixed(2)}</del></span> ${product.fixed_price.toFixed(2)}</p></div>: <p>${product.price.toFixed(2)}</p>}
                  </Card.Text>
                  <button onClick={() =>handleAddProduct(product)} className="btn-buy btn">Add to bag</button>
                </Card.Body>
                </Row>
              </Card>
                </Col>
                </Row>
               
              )}
      </Row>
    </Container>

    </div>
  );
};

export default Shop;