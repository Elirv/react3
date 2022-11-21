import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './cart.css';

export const Cart = ({ deleteAll, deleteOne, totalCart}) => {

  const { dataLS } = useContext(UserContext);

  return (
    <>
      <div className='container'>
        <div className="container">
          {dataLS.map((data, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.img} />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.price}€</Card.Text>
                    <button className="btn btn-primary" onClick={() => { deleteOne(index) }}>Delete</button>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          )}
        </div>
        <div className='gen'>
          <h1>Total items: </h1>
          <main>{totalCart}€</main>
          <div className='btn-group '>
          <button className="btn btn-primary" onClick={deleteAll}>Delete all</button>
          <Link to="/..." className="btn btn-primary">Pay</Link>
          </div>
        </div>
      </div>
    </>
  )
}
