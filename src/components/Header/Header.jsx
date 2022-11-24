import "./header.css";
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/logo192.png";
//import { SearchPage } from "../../pages/SearchPage";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import 'boxicons'


export const Header = () => {

    const {user, setUser} = useContext(UserContext)
    
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
                <div>
                {/* <SearchPage /> */}
                </div>
                <ul>
                    <li className="gest">
                        {user ? `Welcome ${user.name}` : []}
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <a href="/" className="bt" onClick={(e) => {
                            e.preventDefault();
                            setUser({})
                            }}>Logout</a>
                    </li>
                    <li>
                        <Link to="wishes"><box-icon name='heart' type='solid' animation='tada' color='#fffbfb' ></box-icon>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shoppingcart"><box-icon name='cart-alt' type='solid' rotate='90' animation='tada' color='#ffffff' ></box-icon>
                            <span className="item__total"> 0 </span>
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
};
