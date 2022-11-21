import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './wish.css';

export const Wishes = ({deleteAll, deleteOne}) => {

  const { wishLS } = useContext(UserContext)

  return (
    <>
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
                  <button className="btn btn-primary" onClick={() => { deleteOne(index) }}>Delete</button>
                </Card>
              </div>
            );
          })
          }
        </div>
        <button className="btn-group btn btn-primary"><Link to='/start'>Return</Link></button>
    </>
  )
}