
import './products.css';

export const ProductCard = ({ id, name, description, price, img, addToCart, addWishlist }) => {

    const product = {
        id: id,
        name: name,
        price: price,
        img: img,
        description: description
    };

    return (
        <>
        
        <div key={product.id} className="card Back ContainerCard" style={{ width: 350 }}>
            <img src={img} className="card-img-top" alt="items" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div>
                    <p>{price}€</p>
                    <div className="button btn-group">
                        <button className="btn btn-secondary" onClick={() => { addWishlist(product) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg></button>
                        <button className="btn btn-primary" onClick={() => { addToCart(product) }}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
