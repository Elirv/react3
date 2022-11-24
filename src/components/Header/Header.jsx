import "./header.css";
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/img/logo192.png";
//import { SearchPage } from "../../pages/SearchPage";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


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
