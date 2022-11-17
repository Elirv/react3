import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import '../components/ProductsContainer/container.css'
import '../components/Counter/counter.css'

export const CartPage = ({deleteToCart}) => {

  const { stock, dataLS, setDataLS } = useContext(UserContext);
  console.log(stock);
  let interin = JSON.parse(localStorage.getItem('basket'))
  useEffect(() => {
    if (interin) { setDataLS(interin) }
  }, [])
  return (
    <>
      <div className="container">
        {dataLS.map((data, index) => {
          return (
            <div key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.price}€</Card.Text>
                  <button className="btn btn-primary" onClick={() => { deleteToCart({/*product.id*/}) }}>Delete</button> 
                </Card.Body>
              </Card>
            </div>
          );
        }
        )}
      </div>
    </>
  )
}