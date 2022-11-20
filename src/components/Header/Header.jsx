import "./header.css";
import { Link, useSearchParams } from 'react-router-dom'
import Logo from "../../assets/img/logo192.png";
//import { useContext } from "react";
//import { UserContext } from "../../context/UserContext";

export const Header = ({ stock, setStock, dataLS, setDataLS, wishLS, setWishLS }) => {
    //const { stock, setStock, dataLS, setDataLS, wishLS, setWishLS } = useContext(UserContext);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "" //me recoge el valor de la key linea 18//si no hay nada k recoger pasale una string vacia
    //console.log(searchParams); //nos trae un objeto con los values

    const handleInput = ({ target }) => { //e , ahora nos traemos el objeto target desestructuradi accedemos al input
        const value = (target.value)  // ===== const {value} = target
        console.log(target.value);      //tb nos traemos el value
        //setSearchParams(value) value pasa a ser un objeto, lo nrmal es k se llame query, qu nos cambie la url
        setSearchParams({ query: value })
    }
    //useSearchParams

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
                    <input text='text' placeholder="Search" value={query} name="filter" onChange={handleInput} />
                    <section>
                        {dataLS
                        .filter((product) => {
                            if(!query){
                                return true;
                            }else{
                                const productName = product.name.toLowerCase()
                                return productName.includes(query.toLowerCase())
                            }
                        })
                        }
                    </section>
                </div>
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
