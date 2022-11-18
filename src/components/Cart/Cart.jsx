import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './cart.css';

export const Cart = ({ deleteAll }) => {

  const { stock, dataLS, setDataLS } = useContext(UserContext);

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
                  </Card.Body>
                </Card>
              </div>
            );
          }
          )}
        </div>
        <button className="btn btn-primary" onClick={deleteAll}>Delete all</button>
        <div>
          <h1>Total items: </h1>
          <main>50€</main>
          <Link to="/..." className="btn btn-primary">Pay</Link>
          <button className="btn btn-primary" >Delete</button>
        </div>
      </div>
    </>
  )
}
