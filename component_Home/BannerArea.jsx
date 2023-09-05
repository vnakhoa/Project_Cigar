

import React from 'react'

import img470x670 from "../../assets/img/banner/banner5.png"
import img670x210 from "../../assets/img/banner/banner6.png"
import img370x200 from "../../assets/img/banner/banner7.png"
import img270x430 from "../../assets/img/banner/banner9.png"


function BannerArea() {
    return (

        <div className="banner_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a href="#"><img src={img470x670} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-12">
                                <div className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="#"><img src={img670x210} alt="" /></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-7">
                                <div className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="#"><img src={img370x200} alt="" /></a>
                                    </div>
                                </div>
                                <div className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="#"><img src={img370x200} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <div className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="#"><img src={img270x430} alt="" /></a>
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

export default BannerArea