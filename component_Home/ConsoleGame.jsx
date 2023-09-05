

import React, {useState} from 'react';
import img270x450 from "../../assets/img/banner/banner2.png"
import img250x250 from "../../assets/img/product/product21.jpg"
import img570x180 from "../../assets/img/banner/bgbanner3.jpg"

function ConsoleGame() {
    const [active, setActive] = useState('PC Gamepads');

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
                                <h3>Consoles & Games</h3>
                            </div>
                            <div className="product_tab_button">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a onClick={handleActive} className={active == "PC Gamepads" ? "active" : ''} data-bs-toggle="tab" href="#Gamepads" role="tab" aria-controls="Gamepads" aria-selected="true"> PC Gamepads</a>
                                    </li>
                                    <li>
                                        <a onClick={handleActive} className={active == "Controllers" ? "active" : ''} data-bs-toggle="tab" href="#Control" role="tab" aria-controls="Control" aria-selected="false"> Controllers</a>
                                    </li>
                                    <li>
                                        <a onClick={handleActive} className={active == "Video Game" ? "active" : ''} data-bs-toggle="tab" href="#Game" role="tab" aria-controls="Game" aria-selected="false">  Video Game</a>
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
                            <div className="tab-pane fade show active" id="Gamepads" role="tabpanel">
                                <div className="row">

                                    <div className="consoles_product_active">
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
        </div>

        <div className="home_banner_sction">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="#"><img src={img570x180} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="#"><img src={img570x180} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ConsoleGame