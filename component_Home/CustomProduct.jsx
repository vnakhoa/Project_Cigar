

import React from 'react';
import img250x250 from "../../assets/img/product/product24.jpg";

function CustomProduct() {
    return (
        <div className="custom_product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="custom_product_wrapper">
                            <div className="custom_product_title">
                                <h3>recent product</h3>
                            </div>
                            <div className="custom_product_active">
                                <div className="custom_product_list">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a href="product-details.html"><img src={img250x250} alt="" /></a>
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
                                            <h3><a href="product-details.html">Lid Cover Cookware	</a></h3>
                                            <div className="product_price">
                                                <span className="current_price">$28.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="custom_product_wrapper">
                            <div className="custom_product_title">
                                <h3>random products</h3>
                            </div>
                            <div className="custom_product_active">
                                <div className="custom_product_list">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a href="product-details.html"><img src={img250x250} alt="" /></a>

                                        </div>
                                        <div className="product_content">
                                            <div className="product_ratting">
                                                <ul>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                    <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                </ul>
                                            </div>
                                            <h3><a href="product-details.html">classNameic 17-Piece Tool	</a></h3>
                                            <div className="product_price">
                                                <span className="current_price">$24.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="custom_product_wrapper">
                            <div className="custom_product_title">
                                <h3>featured products </h3>
                            </div>
                            <div className="custom_product_active">
                                <div className="custom_product_list">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a href="product-details.html"><img src={img250x250} alt="" /></a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_ratting">
                                                <ul>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-star"></i></a></li>
                                                    <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                    <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                </ul>
                                            </div>
                                            <h3><a href="product-details.html">classNameic 17-Piece Tool	</a></h3>
                                            <div className="product_price">
                                                <span className="current_price">$24.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomProduct