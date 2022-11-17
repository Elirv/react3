import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export const CartPage = () => {

  const { stock, dataLS, setDataLS } = useContext(UserContext);
  console.log(stock);
  let interin = JSON.parse(localStorage.getItem('basket'))
  useEffect(() => {
    if (interin) { setDataLS(interin) }
  }, [])
  return (
    <>
      {dataLS.map((data, index) => {
        return ( 
          <div key={index}>
{/* <button className="btn btn-primary" onClick={() => { deleteToCart(product.id) }}>Delete</button> */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  {data.price}
                </Card.Text>
                <Button variant="primary">delete</Button>
              </Card.Body>
            </Card>
          </div>
        );
      }
      )}
    </>
  )
}