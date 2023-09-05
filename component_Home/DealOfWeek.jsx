

import React from 'react';
import { useState } from 'react';
import img270 from "../../assets/img/product/product11.jpg";

const arr = ['AAAAAA', 'BBBBBBB', 'CCCCCC', 'DDDDDD', 'EEEE', 'FFFFFF', 'GGGGG', 'HHHHHHH', 'IIIIIIII', 'KKKKKKK'];

function DealOfWeek() {
    const [indexDeal, setIndexDeal] = useState({
        i1: 0,
        i2: 1,
        i3: 2,
    })

    let newArr = [...arr];
    let arrMap = [newArr[indexDeal.i1], newArr[indexDeal.i2], newArr[indexDeal.i3]];

    function handlePrev() {
        let newCurrentIndex = {...indexDeal};

       newCurrentIndex.i1 = newCurrentIndex.i1 -1;
       newCurrentIndex.i2 = newCurrentIndex.i2 -1;
       newCurrentIndex.i3 = newCurrentIndex.i3 -1;

       if(newCurrentIndex.i1 < 0){
        newCurrentIndex.i1 = newArr.length - 1;
       }
       if(newCurrentIndex.i2 < 0){
        newCurrentIndex.i2 = newArr.length - 1;
       }
       if(newCurrentIndex.i3 < 0){
        newCurrentIndex.i3 = newArr.length - 1;
       }

       console.log(newCurrentIndex)
       setIndexDeal(newCurrentIndex);
    }

    function handleNext() {
        let newCurrentIndex = {...indexDeal};

       newCurrentIndex.i1 = newCurrentIndex.i1 +1;
       newCurrentIndex.i2 = newCurrentIndex.i2 +1;
       newCurrentIndex.i3 = newCurrentIndex.i3 +1;

       if(newCurrentIndex.i1 > newArr.length - 1){
        newCurrentIndex.i1 = 0;
       }
       if(newCurrentIndex.i2 > newArr.length - 1){
        newCurrentIndex.i2 = 0;
       }
       if(newCurrentIndex.i3 > newArr.length - 1){
        newCurrentIndex.i3 = 0;
       }

       console.log(newCurrentIndex)
       setIndexDeal(newCurrentIndex);
    }



    return (
        <div className="countdown_product">
            <div className="container">
                <div className="countdown_product_inner">
                    <div className="row">
                        <div className="col-12 position-relative">
                            <div className="countdown_product_title">
                                <h3>Deals Of The Weeks</h3>
                            </div>
                            <div class="owl-nav-deal d-flex gap-3">
                                <div class="owl-prev-deal" onClick={() => handlePrev()}><i class="fa fa-angle-left"></i></div>
                                <div class="owl-next-deal" onClick={() => handleNext()}><i class="fa fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex flex-nowrap">
                        {arrMap?.map((item, i) => {
                            return (
                                <div className="countdown_produtc_active col-lg-6" key={i}>
                                    <div className="">
                                        <div className="countdown_produtc_wrapper">
                                            <div className="single_countdown_product">
                                                <div className="countdown_product_thumb">
                                                    <a href="product-details.html"><img src={img270} alt="" /></a>
                                                    <div className="sale_percent">
                                                        <span>15%</span>
                                                    </div>
                                                </div>
                                                <div className="countdown_product_content">
                                                    <div className="countdown_product_ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="ion-star"></i></a></li>
                                                            <li><a href="#"><i className="ion-star"></i></a></li>
                                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <h3><a href="product-details.html">{item}</a></h3>
                                                    <div className="countdown_product_price">
                                                        <span className="old_price">$26.00</span>
                                                        <span className="current_price">$23.00</span>
                                                    </div>
                                                    <div className="countdown_product_desc">
                                                        <p>The Imaginext DC Super Friends Batbot Xtreme is the.</p>
                                                    </div>
                                                    <div className="product_timing">
                                                        <h3>Hurry up!</h3>
                                                        <p>Offer ends in:</p>
                                                        <div data-countdown="2024/12/15"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealOfWeek;