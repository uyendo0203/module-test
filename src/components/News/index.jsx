import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventItem from "./eventItem";

function DynamicSlides() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    const settings2 = {
        className: "settings2",
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: true,
        speed: 300,
        centerPadding: '40px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerPadding: '80px',
            }
        }]
    };

    const [isCheckedA, setIsCheckedA] = useState(true);
    const [isCheckedB, setIsCheckedB] = useState(true);
    const [isCheckedC, setIsCheckedC] = useState(true);
    const [isCheckedD, setIsCheckedD] = useState(true);

    const [arrA, setArrA] = useState([]);
    const [arrB, setArrB] = useState([]);
    const [arrC, setArrC] = useState([]);
    const [arrD, setArrD] = useState([]);


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

    const ismobile = window.innerWidth < 768 ? 3 : 6

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    const getDisplayedArrayAB = () => {
        let mergedArray = []
        if (isCheckedA && isCheckedB) {
            mergedArray = [...arrA, ...arrB]
        } else if (isCheckedA) {
            mergedArray = [...arrA]
        } else if (isCheckedB) {
            mergedArray = [...arrB]
        }
        return mergedArray.length > ismobile ? chunk(mergedArray, ismobile) : [mergedArray]
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
    

    const itemRef1 = useRef()
    const itemRef2 = useRef()
    const itemRef3 = useRef()
    const itemRef4 = useRef()
    const itemRef5 = useRef()
    const itemRef6 = useRef()
    const itemRef7 = useRef()

    useEffect(() => {
        const xarrayA = parseDataFromInput('#items1')
        const xarrayB = parseDataFromInput("#items2")
        const xarrayC = parseDataFromInput("#items3")
        const xarrayD = parseDataFromInput("#items4")

        setArrA(xarrayA)
        setArrB(xarrayB)
        setArrC(xarrayC)
        setArrD(xarrayD)
    }, [])


    // console.log("arrA", arrA)
    // console.log("arrB", arrB)
    // console.log("merge", displayedArrayAB)
    // console.log("arrC", arrC)
    // console.log("arrD", arrD)
    // console.log("merge", displayedArrayCD)

    const parseDataFromInput = (id) => {
        try {
            if (document.querySelector(id)) return JSON.parse(document.querySelector(id).value)
        } catch (error) {
            return []
        }
    }

    return (

        <>
            <input ref={itemRef1} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items1" title='session1 tin dự án' />
            <input ref={itemRef2} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items2" title='session1 tin báo trí' />
            <input ref={itemRef3} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items3" title='session2 tin dự án' />
            <input ref={itemRef4} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items4" title='session2 ảnh tiến độ' />
            <input ref={itemRef5} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items5" title='session3 tài liệu bán hàng' />
            <input ref={itemRef6} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items6" title='session3 pháp lý' />
            <input ref={itemRef7} type="hidden" value='[{"id":1,"name":"Item 1","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":2,"name":"Item 2","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":3,"name":"Item 3","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":4,"name":"Item 4","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"},{"id":5,"name":"Item 5","image":"https:\/\/www.elle.vn\/app\/uploads\/2017\/07\/25\/hinh-anh-dep-1.jpg","link":"http:\/\/dev.caraworld.vn","date":"20\/11\/2024"}]' id="items7" title='session3 chính sách bán hàng' />

            <div className="section-top section-theodong-sukien">
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
                        <label data={isCheckedB ? "checked" : "unchecked"} className="checkbox-label" htmlFor="checkbox-2">
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
                                                        <EventItem key={Math.random(index)} name={slide[0]?.name} image={slide[0]?.image} link={slide[0]?.link} date={slide[0]?.date} />
                                                    }
                                                </div>
                                                <div className="right">
                                                    {
                                                        slide.length > 1 &&
                                                        <EventItem key={Math.random(index)} name={slide[1]?.name} image={slide[1]?.image} link={slide[1]?.link} date={slide[1]?.date} />
                                                    }
                                                    {
                                                        slide.length > 2 &&
                                                        <EventItem key={Math.random(index)} name={slide[2]?.name} image={slide[2]?.image} link={slide[2]?.link} date={slide[2]?.date} />
                                                    }
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                {
                                                    slide.length > 3 &&
                                                    <EventItem key={Math.random(index)} name={slide[3]?.name} image={slide[3]?.image} link={slide[3]?.link} date={slide[3]?.date} />
                                                }
                                                {
                                                    slide.length > 4 &&
                                                    <EventItem key={Math.random(index)} name={slide[4]?.name} image={slide[4]?.image} link={slide[4]?.link} date={slide[4]?.date} />
                                                }
                                                {
                                                    slide.length > 5 &&
                                                    <EventItem key={Math.random(index)} name={slide[5]?.name} image={slide[5]?.image} link={slide[5]?.link} date={slide[5]?.date} />
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="mobile" >
                        <Slider {...settings}>
                            {displayedArrayAB.map((slide, index) => {
                                return (
                                    <div className="events-sliders active" key={index}>
                                        <div className="events-slider">
                                            <div className="top">
                                                {
                                                    slide.length > 0 &&
                                                    <EventItem key={Math.random(index)} name={slide[0]?.name} image={slide[0]?.image} link={slide[0]?.link} date={slide[0]?.date} />
                                                }
                                            </div>
                                            <div className="bottom">
                                                {
                                                    slide.length > 1 &&
                                                    <EventItem key={Math.random(index)} name={slide[1]?.name} image={slide[1]?.image} link={slide[1]?.link} date={slide[1]?.date} />
                                                }
                                                {
                                                    slide.length > 2 &&
                                                    <EventItem key={Math.random(index)} name={slide[2]?.name} image={slide[2]?.image} link={slide[2]?.link} date={slide[2]?.date} />
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
            <div className="section-top section-sukien-tiendo" >
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
                        <div className="slider-center-mode">
                            <Slider {...settings2}>
                                {displayedArrayCD.map((slide, index) => {
                                    return (
                                        <img key={index} src={slide.image} alt="true" />
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DynamicSlides;
