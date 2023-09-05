

import React, {useState} from 'react';
import img270x450 from "../../assets/img/banner/bgbanner5.jpg";
import img250x250 from "../../assets/img/product/product12.jpg";
import img1170x100 from "../../assets/img/banner/bgbanner6.jpg"

function CameraPhoto() {
    const [active, setActive] = useState('Digital Cameras');

    function handleActive(e) {
        let act = e.target.innerText;
        console.log(act, 'act');

        setActive(act);
    }

    return (
        <>
        <div className="consoles_product">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="consoles_header">
                            <div className="consoles_product_title">
                                <h3>Camera & Photo</h3>
                            </div>
                            <div className="product_tab_button">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a onClick={handleActive} className={active == "Digital Cameras" ? "active" : ''} data-bs-toggle="tab" href="#digital" role="tab" aria-controls="digital" aria-selected="true"> Digital Cameras</a>
                                    </li>
                                    <li>
                                        <a onClick={handleActive} className={active == "DSLR Cameras" ? "active" : ''} data-bs-toggle="tab" href="#dslr" role="tab" aria-controls="dslr" aria-selected="false"> DSLR Cameras </a>
                                    </li>
                                    <li>
                                        <a onClick={handleActive} className={active == "Cameras" ? "active" : ''} data-bs-toggle="tab" href="#cameras" role="tab" aria-controls="cameras" aria-selected="false">  Cameras</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a href="#"><img src={img270x450} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="digital" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-4 mb-2">
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
                                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h3><a href="product-details.html">Nonstick Dishwasher PFOA</a></h3>
                                                <div className="product_price">
                                                    <span className="current_price">$23.00</span>
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
            </div>
        </div>

        <div className="discount_banner section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="discount_banner_thumb">
                                <a href="#"><img src={img1170x100} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CameraPhoto