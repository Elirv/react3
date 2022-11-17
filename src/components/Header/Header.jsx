import "./header.css";
import { Link } from 'react-router-dom'
//import "boxicons";
import Logo from "../../assets/img/logo192.png";

export const Header = () => {

    return (
        <>
            <header>
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="icon" width="30" />
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/start">PRODUCTS</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Hello gest</p>
                    </li>
                    <li>
                        <Link className="btn btn-outline-success" type="submit" to="/login">Login</Link>
                    </li>
                </ul><div>
                    <Link to="wishes" className="heart">heart
                        <box-icon
                            name='heart'
                            type='solid'
                            color='#f13838'
                        ></box-icon>
                    </Link>
                    <Link to="/shoppingcart" className="cart">cart
                        <box-icon
                            name="cart-alt"
                            flip="vertical"
                            animation="tada"
                            color="#ffffff"
                        ></box-icon>
                        <span className="item__total"> 0 </span>  {/*k rodee al carrito */}
                    </Link>
                </div>
            </header>
        </>
    );
};
