
import React from 'react';
import { useState } from 'react';
import img270 from "../../assets/img/product/product11.jpg";


const arr = ['AAAAAA', 'BBBBBBB', 'CCCCCC', 'DDDDDD', 'EEEE', 'FFFFFF', 'GGGGG', 'HHHHHHH', 'IIIIIIII', 'KKKKKKK'];

function TopCategori() {
    const [currentIndex, setCurrentIndex] = useState({
        i1: 0,
        i2: 1,
        i3: 2,
        i4: 3
    })

    let newArr = [...arr];

    let arrMap = [newArr[currentIndex.i1] , newArr[currentIndex.i2] , newArr[currentIndex.i3] , newArr[currentIndex.i4]];

   
    function handlePrev() {
       let newCurrentIndex = {...currentIndex};

       newCurrentIndex.i1 = newCurrentIndex.i1 -1;
       newCurrentIndex.i2 = newCurrentIndex.i2 -1;
       newCurrentIndex.i3 = newCurrentIndex.i3 -1;
       newCurrentIndex.i4 = newCurrentIndex.i4 -1;

       if(newCurrentIndex.i1 < 0){
        newCurrentIndex.i1 = newArr.length - 1;
       }
       if(newCurrentIndex.i2 < 0){
        newCurrentIndex.i2 = newArr.length - 1;
       }
       if(newCurrentIndex.i3 < 0){
        newCurrentIndex.i3 = newArr.length - 1;
       }
       if(newCurrentIndex.i4 < 0){
        newCurrentIndex.i4 = newArr.length - 1;
       }
       console.log(newCurrentIndex)
       setCurrentIndex(newCurrentIndex);
    }

    function handleNext() {
        let newCurrentIndex = {...currentIndex};

        newCurrentIndex.i1 = newCurrentIndex.i1 +1;
        newCurrentIndex.i2 = newCurrentIndex.i2 +1;
        newCurrentIndex.i3 = newCurrentIndex.i3 +1;
        newCurrentIndex.i4 = newCurrentIndex.i4 +1;
 
        if(newCurrentIndex.i1 > newArr.length-1){
         newCurrentIndex.i1 = 0;
        }
        if(newCurrentIndex.i2 > newArr.length - 1){
         newCurrentIndex.i2 = 0;
        }
        if(newCurrentIndex.i3 > newArr.length - 1){
         newCurrentIndex.i3 = 0;
        }
        if(newCurrentIndex.i4 > newArr.length - 1){
         newCurrentIndex.i4 = 0;
        }
        console.log(newCurrentIndex)
        setCurrentIndex(newCurrentIndex);
    }

    return (
        <div className="categorie_banner">
            <div className="container ">
              
                <div className="row">
                    <div className="col-12 position-relative">
                        <div className="categorie_banner_title">
                            <h3>Top Categories</h3>
                        </div>
                        <div className="owl-nav-categori d-flex gap-3">
                            <div className="owl-prev-categori" onClick={() => handlePrev()}><i className="fa fa-angle-left"></i></div>
                            <div className="owl-next-categori" onClick={() => handleNext()}><i className="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row top_categori">
                    {arrMap.map((item, i) => {
                        return (
                            <div className="single_categorie_banner" key={i}>
                                <div className="categorie_banner_thumb">
                                    <img src={img270} alt="" />
                                    <div className="categorie_banner_content">
                                        <h3>{item}</h3>
                                        <ul>
                                            <li><a href="#">PC Gamepads</a></li>
                                            <li><a href="#">Controllers</a></li>
                                            <li><a href="#">Video Game</a></li>
                                            <li><a href="#">Xbox Consoles</a></li>
                                            <li><a href="#">See More</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default TopCategori