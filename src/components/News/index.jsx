import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventItem from "./eventItem";

function DynamicSlides() {
    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settings2 = {
        className: "center",
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: true,
        speed: 300,
        // centerPadding: '40px',
        infinite: true,
        autoplaySpeed: 5000,
        // autoplay: true
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
    };

    const settings0 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

    const temp1 = [
        { "id": 1, "name": "Item 1", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 2, "name": "Item 2", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 3, "name": "Item 3", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 4, "name": "Item 4", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 5, "name": "Item 5", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 6, "name": "Item 6", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 7, "name": "Item 7", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
    ]
    const temp2 = [
        { "id": 8, "name": "Item 1", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 9, "name": "Item 2", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 10, "name": "Item 3", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
    ]

    const temp3 = [
        { "id": 1, "name": "Item 1", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 2, "name": "Item 2", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 3, "name": "Item 3", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 4, "name": "Item 4", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
    ]
    const temp4 = [
        { "id": 1, "name": "Item 1", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { "id": 2, "name": "Item 2", "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
    ]

    const [isCheckedA, setIsCheckedA] = useState(true);
    const [isCheckedB, setIsCheckedB] = useState(true);
    const [arrA, setArrA] = useState(temp1);
    const [arrB, setArrB] = useState(temp2);


    const [isCheckedC, setIsCheckedC] = useState(true);
    const [isCheckedD, setIsCheckedD] = useState(true);
    const [arrC, setArrC] = useState(temp3);
    const [arrD, setArrD] = useState(temp4);

    const ismobile = window.innerWidth < 768 ? 3 : 6


    const handleCheckboxAChange = () => {
        setIsCheckedA(!isCheckedA);
    };

    const handleCheckboxBChange = () => {
        setIsCheckedB(!isCheckedB);
    };

    const handleCheckboxCChange = () => {
        setIsCheckedC(!isCheckedC);
    };

    const handleCheckboxDChange = () => {
        setIsCheckedD(!isCheckedD);
    };

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    const getDisplayedArrayAB = () => {
        if (isCheckedA && isCheckedB) {
            const temp = [...arrA, ...arrB]
            const x = temp.length > ismobile ? chunk(temp, ismobile) : temp
            return x;
        } else if (isCheckedA) {
            return arrA.length > ismobile ? chunk(arrA, ismobile) : arrA;
        } else if (isCheckedB) {
            return arrB.length > ismobile ? chunk(arrB, ismobile) : arrB;
        }
        return [];
    };

    const getDisplayedArrayCD = () => {
        if (isCheckedC && isCheckedD) {
            return [...arrC, ...arrD];
        } else if (isCheckedC) {
            return arrC;
        } else if (isCheckedD) {
            return arrD;
        }
        return [];
    };

    const displayedArrayAB = getDisplayedArrayAB();
    const displayedArrayCD = getDisplayedArrayCD();
    console.log({ displayedArrayAB, displayedArrayCD });


    useEffect(() => {
        const items1Array = document.querySelector('#items1').defaultValue
        const items2Array = document.querySelector('#items1').defaultValue

        console.log({items1Array});
        
        setArrA(JSON.parse(items1Array) )
        setArrB(JSON.parse(items2Array))
    }, [])

    useEffect(() => {
        if (arrA) {
            console.log(arrA);
        }
    }, [arrA])


    return (

        <>
            {/* <input type="hidden" defaultValue='[{"id":1,"name":"Item 1","image":"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"}]' id="items1" title="session1 tin dự án" /> */}
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items1" title='session1 tin dự án' />
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items2" title='session1 tin báo trí' />
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items3" title='session2 tin dự án' />
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items4" title='session2 ảnh tiến độ' />
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items5" title='session3 tài liệu bán hàng' />
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items6" title='session3 pháp lý' />
            <input type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items7" title='session3 chính sách bán hàng' />

            <div className="section-top section-theodong-sukien dabuild">
                <div className="heading">
                    <div className="section-text">
                        <h2 className="text-hidden">Theo dòng sự kiện</h2>
                        <img src="./images/news/theo-dong-su-kien.png" alt="Theo dòng sự kiện" />
                    </div>
                    <div className="checkbox_heading">
                        <label className="checkbox-label" htmlFor="checkbox-1">
                            <span>
                                <input className="checkbox-input" checked={isCheckedA} onChange={handleCheckboxAChange} type="checkbox" id="checkbox-1" />
                                <span className="checkbox-icon-wrapper">
                                    <i className="checkbox-icon" />
                                </span>
                            </span>
                            <span className="checkbox-text">TIN DỰ ÁN</span>
                        </label>
                        <label className="checkbox-label" htmlFor="checkbox-2">
                            <span>
                                <input className="checkbox-input" checked={isCheckedB} onChange={handleCheckboxBChange} type="checkbox" id="checkbox-2" />
                                <span className="checkbox-icon-wrapper">
                                    <i className="checkbox-icon" />
                                </span>
                            </span>
                            <span className="checkbox-text">TIN BÁO CHÍ</span>
                        </label>
                    </div>
                </div>
                <div className="container">
                    <div className="desktop">
                        <div className="events-sliders active ">
                            <Slider {...settings}>
                                {displayedArrayAB.map((slide, index) => {
                                    return (
                                        <div className="events-slider" key={index}>
                                            <div className="top">
                                                <div className="big">
                                                    {
                                                        slide.length > 0 &&
                                                        <EventItem key={Math.random(index)} name={slide[0]?.name} image={slide[0]?.image} />
                                                    }
                                                </div>
                                                <div className="right">
                                                    {
                                                        slide.length > 1 &&
                                                        <EventItem key={Math.random(index)} name={slide[1]?.name} image={slide[1]?.image} />
                                                    }
                                                    {
                                                        slide.length > 2 &&
                                                        <EventItem key={Math.random(index)} name={slide[2]?.name} image={slide[2]?.image} />
                                                    }
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                {
                                                    slide.length > 3 &&
                                                    <EventItem key={Math.random(index)} name={slide[3]?.name} image={slide[3]?.image} />
                                                }
                                                {
                                                    slide.length > 4 &&
                                                    <EventItem key={Math.random(index)} name={slide[4]?.name} image={slide[4]?.image} />
                                                }
                                                {
                                                    slide.length > 5 &&
                                                    <EventItem key={Math.random(index)} name={slide[5]?.name} image={slide[5]?.image} />
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="mobile">
                        <Slider {...settings}>
                            {displayedArrayAB.map((slide, index) => {
                                return (
                                    <div className="events-sliders active" key={index}>
                                        <div className="events-slider">
                                            <div className="top">
                                                {
                                                    slide.length > 0 &&
                                                    <EventItem key={Math.random(index)} name={slide[0]?.name} image={slide[0]?.image} />
                                                }
                                            </div>
                                            <div className="bottom">
                                                {
                                                    slide.length > 1 &&
                                                    <EventItem key={Math.random(index)} name={slide[1]?.name} image={slide[1]?.image} />
                                                }
                                                {
                                                    slide.length > 2 &&
                                                    <EventItem key={Math.random(index)} name={slide[2]?.name} image={slide[2]?.image} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="section-top section-sukien-tiendo">
                <div className="heading">
                    <div className="section-text">
                        <h2 className="text-hidden">Sự kiện và tiến độ</h2>
                        <img src="./images/news/su-kien-va-tien-do.png" alt="Sự kiện và tiến độ" />
                    </div>
                    <div className="checkbox_heading">
                        <label className="checkbox-label" htmlFor="checkbox-3">
                            <span>
                                <input className="checkbox-input" checked={isCheckedC} onChange={handleCheckboxCChange} type="checkbox" id="checkbox-3" />
                                <span className="checkbox-icon-wrapper">
                                    <i className="checkbox-icon" />
                                </span>
                            </span>
                            <span className="checkbox-text">TIN DỰ ÁN</span>
                        </label>
                        <label className="checkbox-label" htmlFor="checkbox-4">
                            <span>
                                <input className="checkbox-input" checked={isCheckedD} onChange={handleCheckboxDChange} type="checkbox" id="checkbox-4" />
                                <span className="checkbox-icon-wrapper">
                                    <i className="checkbox-icon" />
                                </span>
                            </span>
                            <span className="checkbox-text">TIN BÁO CHÍ</span>
                        </label>
                    </div>
                </div>
                <div className="container">
                    <div className="center-slider-wrap">

                        <div className="center-slider">
                            {/* <Slider {...settings2}>
                                {displayedArrayCD.map((slide, index) => {
                                    return (
                                            <img key={index} src={slide.image} alt="true" />
                                    )
                                })}
                            </Slider> */}
                            <div className="slider-container">
     
    </div>
                        </div>
                        <div className="arrows">
                            <div className="slidenext slidearrow">
                                <img src="./images/news/slider-arrow-right.svg" alt="bg" />
                            </div>
                            <div className="slideprev slidearrow">
                                <img src="./images/news/slider-arrow-left.svg" alt="bg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <Slider {...settings0}>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                    <div>
                    <h3>5</h3>
                    </div>
                    <div>
                    <h3>6</h3>
                    </div>
                </Slider>
                </div>
            </div>
        </>
    );
}

export default DynamicSlides;
