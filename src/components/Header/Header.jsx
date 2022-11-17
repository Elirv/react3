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
                    <li className="gest">
                        Hello guest
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="wishes">heart
                        </Link>
                    </li>
                    <li>
                        <Link to="/shoppingcart">cart
                            <span className="item__total"> 0 </span>
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
};
