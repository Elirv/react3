import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../context/UserContext';

export const Wishes = () => {

  const { wishLS } = useContext(UserContext)

  return (
    <>
      <div className='container'>
        <div className="container">
          {wishLS.map((data, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.img} />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.price}€</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })
          }
        </div>
      </div>
    </>
  )
}