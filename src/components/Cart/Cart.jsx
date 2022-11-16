import React from 'react'

export const Cart = (stock, deleteToCart, addWishlist) => {
    return (
        <>
            {/* { */}
                {/* stock.map(product => {

                    return (
                        <div key={product.id} className="card Back ContainerCard" style={{ width: 150 }}>
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-secondary" onClick={() => { addWishlist(product) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg></button>
                                <button className="btn btn-primary" onClick={() => { deleteToCart(product.id) }}>Delete</button>
                            </div>
                        </div>
                    )
                })
            } */}
        </>
    )
}
