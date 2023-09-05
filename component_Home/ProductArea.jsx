
import React, { useState } from 'react'

import img250x250 from "../../assets/img/product/product6.jpg"
import img1170x100 from "../../assets/img/banner/bgbanner.jpg"

function ProductArea() {
    const [active, setActive] = useState('New Products');

    function handleActive(e) {
        let act = e.target.innerText;
        console.log(act, 'act');

        setActive(act);
    }
    
    return (
        <>
            <div className="produtc_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_tab_button">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a onClick={handleActive} className={active == "New Products" ? "active" : ''} data-bs-toggle="tab" href="#Products" role="tab" aria-controls="Products" aria-selected="true"> New Products</a>
                                    </li>
                                    <li>
                                        <a onClick={handleActive} className={active == "OnSale" ? "active" : ''} data-bs-toggle="tab" href="#OnSale" role="tab" aria-controls="OnSale" aria-selected="false"> OnSale</a>
                                    </li>
                                    <li>
                                        <a onClick={handleActive} className={active == "Feature Products" ? "active" : ''} data-bs-toggle="tab" href="#Feature" role="tab" aria-controls="Feature" aria-selected="false">Feature Products</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="Products" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-3 mb-2">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a href="product-details.html"><img src={img250x250} alt="" /></a>
                                            <div className="btn_quickview">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="Quick View"><i className="ion-ios-eye"></i></a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_ratting">
                                                <ul>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                </ul>
                                            </div>
                                            <h3><a href="product-details.html">Cuisinart DCC-3200</a></h3>
                                            <div className="product_price">
                                                <span className="current_price">$27.00</span>
                                            </div>
                                            <div className="product_action">
                                                <ul>
                                                    <li className="product_cart"><a href="cart.html" title="Add to Cart">Add to Cart</a></li>
                                                    <li className="add_links"><a href="wishlist.html" title="Add to Wishlist"><i className="ion-ios-heart-outline"></i></a></li>
                                                    <li className="add_links"><a href="compare.html" title="Add to Compare"><i className="ion-loop"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="discount_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="discount_banner_thumb">
                                <a href="#"><img src={img1170x100} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductArea