import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const SearchPage = () => {

    const { dataLS } = useContext(UserContext);

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
            <input text='text' placeholder="Search" value={query} name="filter" onChange={handleInput} />
            <section>
                {dataLS
                    .filter((product) => {
                        if (!query) {
                            return true;
                        } else {
                            const productName = product.name.toLowerCase()
                            return productName.includes(query.toLowerCase())
                        }
                    })
                    .map((name) => {
                        return (
                            {/* <h3>{name}</h3> */ }
                        )
                    })
                }
            </section>
        </>
    )
}
