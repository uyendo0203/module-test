import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventItem from "./eventItem";

import AOS from 'aos';


function DynamicSlides() {

    AOS.init();


    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [sliderTargetValue, setSliderTargetValue] = useState({
        value: 0,
        min: 0,
        max: 0
    });
    let sliderRef = useRef(null);

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
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
        autoplay: false,
        afterChange: () => afterChangeSlider(),
        beforeChange: (current, next) => beforeChangeSlider(next),
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerPadding: '50px',
            }
        }]
    };

    const [styleBgs, setstyleBgs] = useState(0)

    const afterChangeSlider = () => {
        setUpdateCount(updateCount + 1)
    }
    const beforeChangeSlider = (next) => {
        setSlideIndex(next)
        setSliderTargetValue({
            ...sliderTargetValue,
            value: next,
        })
    }

    const sliderRangeChange = (e) => {
        let targetValue = e.target.value;
        sliderRef.slickGoTo(targetValue)

        let valueInput = {
            value: parseInt(targetValue),
            min: parseInt(e.target.min),
            max: parseInt(e.target.max),
        }

        setSliderTargetValue({
            ...sliderTargetValue,
            ...valueInput,
        })

    }

    useEffect(() => {
        const numberPercent = (sliderTargetValue.value - sliderTargetValue.min) * 100 / (sliderTargetValue.max - sliderTargetValue.min)
        setstyleBgs(numberPercent + '% 100%')

    }, [sliderTargetValue])

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
        setstyleBgs("0% 100%")
        setSliderTargetValue({
            ...sliderTargetValue,
            value: 0
        })
        setSlideIndex(0)

    };

    const handleCheckboxDChange = () => {
        setIsCheckedD(!isCheckedD);
        setstyleBgs("0% 100%")
        setSliderTargetValue({
            ...sliderTargetValue,
            value: 0
        })
        setSlideIndex(0)
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

    const parseDataFromInput = (id) => {
        try {
            if (document.querySelector(id)) return JSON.parse(document.querySelector(id).value)
        } catch (error) {
            return []
        }
    }

    const sliderCDIssue = ()=>{
        let result='';
        if(displayedArrayCD.length === 3 ){
            result = 'other-3'
        }else if(displayedArrayCD.length == 2){
            result = 'other-2'
        }else if(displayedArrayCD.length == 1){
            result = 'other-1'
        }else{
            result =''
        }

        return result
    }


    return (

        <>
            {
                process.env.NODE_ENV === 'development' ?
                    <>
                        <input type="hidden" value='[{"id":5,"name":"Cam Ranh \u0111\u1ee9ng tr\u01b0\u1edbc c\u01a1 h\u1ed9i tr\u1edf th\u00e0nh th\u1ee7 ph\u1ee7 du l\u1ecbch m\u1edbi c\u1ee7a Vi\u1ec7t Nam","type":"new","description":null,"image":"\/assets\/temp\/1badfa3352a4a9116af7b31854bee28e_1733028020.jpg","created_at":"2024-11-30 17:18:34","updated_at":"2024-12-01 04:40:21","link":"https:\/\/dantri.com.vn\/bat-dong-san\/cam-ranh-dung-truoc-co-hoi-tro-thanh-thu-phu-du-lich-moi-cua-viet-nam-20241113152409664.htm?fbclid=IwY2xjawGyJw9leHRuA2FlbQIxMQABHeqxnt4A4b49Q1aJd1nHZevhQKERUvfqOelfDJN7d44exlHpZGSOyP6gVA_aem_1UdfmBAWjmje6B-fetebbg","date":"30\/11\/2024"},{"id":4,"name":"\u0022M\u1ed9t \u0111i\u1ec3m \u0111\u1ebfn - tr\u1ecdn th\u1ebf gi\u1edbi\u0022 - m\u1ea3nh gh\u00e9p \u0111\u1ec3 Cam Ranh h\u00fat kh\u00e1ch","type":"new","description":null,"image":"\/assets\/temp\/f37c6bd635cc84eb89e16224c56d6790_1733027990.jpg","created_at":"2024-11-30 17:18:20","updated_at":"2024-12-01 04:39:58","link":"https:\/\/dantri.com.vn\/bat-dong-san\/mot-diem-den-tron-the-gioi-manh-ghep-de-cam-ranh-hut-khach-20241118134838284.htm?fbclid=IwY2xjawGyJvlleHRuA2FlbQIxMQABHa0boT0e8C-GudEbTXW54oxKJlUfu67yBTMVnbKIjx_EvhrbN-4V3wNV9w_aem_MEmhflvGd3ncJd_Ik_F_Sg","date":"30\/11\/2024"}]' id="items1" title='session1 tin dự án' />
                        <input type="hidden" value='[{"id":8,"name":"Si\u00eau \u0111\u00f4 th\u1ecb bi\u1ec3n CaraWorld kh\u1edfi \u0111\u1ed9ng, th\u1ebf h\u1ec7 th\u1ee7 l\u0129nh ti\u1ebfp theo c\u1ee7a ng\u00e0nh b\u1ea5t \u0111\u1ed9ng s\u1ea3n ch\u00ednh th\u1ee9c l\u1ed9 di\u1ec7n","type":"post","description":null,"image":"\/assets\/temp\/c0aa735de309ec2fd26f022d191b7676_1733028073.jpg","created_at":"2024-12-01 04:41:21","updated_at":"2024-12-01 04:41:21","link":"https:\/\/plo.vn\/sieu-do-thi-bien-caraworld-khoi-dong-the-he-thu-linh-tiep-theo-cua-nganh-bat-dong-san-chinh-thuc-lo-dien-post817566.html","date":"01\/12\/2024"},{"id":7,"name":"Kh\u00e1nh H\u00f2a t\u0103ng tr\u01b0\u1edfng m\u1ee9c \u0111\u1ed9 quan t\u00e2m, kh\u01a1\u0309i \u0111\u00f4\u0323ng chu k\u1ef3 m\u1edbi c\u1ee7a th\u1ecb tr\u01b0\u1eddng","type":"post","description":null,"image":"\/assets\/temp\/de009fbcce4b3ff12dc651e29d791360_1733028052.jpg","created_at":"2024-12-01 04:41:00","updated_at":"2024-12-01 04:41:00","link":"https:\/\/tuoitre.vn\/khanh-hoa-tang-truong-muc-do-quan-tam-khoi-dong-chu-ky-moi-cua-thi-truong-20241107125434511.htm?fbclid=IwY2xjawGyJzNleHRuA2FlbQIxMQABHU0gAWx_ZwMf4F5iO2hRUj2n3BddWbP1UhF2w0hkjNWyU63xD1jurQaWmg_aem_-XC8DbhE7JHVUh1fnTlrSA","date":"01\/12\/2024"},{"id":6,"name":"CaraWorld: Si\u00eau \u0111\u00f4 th\u1ecb bi\u1ec3n s\u00e1t c\u1ea1nh s\u00e2n bay qu\u1ed1c t\u1ebf Cam Ranh s\u1eafp ra m\u1eaft","type":"post","description":null,"image":"\/assets\/temp\/cb21c07e27fbafe5a8dc8ffd532842ea_1733028033.jpg","created_at":"2024-11-30 17:18:50","updated_at":"2024-12-01 04:40:41","link":"https:\/\/thanhnien.vn\/caraworld-sieu-do-thi-bien-sat-canh-san-bay-quoc-te-cam-ranh-sap-ra-mat-185241111143110258.htm?fbclid=IwY2xjawGyJyJleHRuA2FlbQIxMQABHa7U3GzjtnJj6WZw3CrTYhxzUGXGgpdNdiEkM6A9k2NWsOq8nihZwG4E2g_aem_97OVumGBitOWLlFgiiK5tw","date":"30\/11\/2024"},{"id":3,"name":"CaraWorld t\u1ea1o ti\u1ebfng vang l\u1edbn tr\u00ean th\u1ecb tr\u01b0\u1eddng b\u1ea5t \u0111\u1ed9ng s\u1ea3n Cam Ranh","type":"post","description":null,"image":"\/assets\/temp\/c029c5d5d2162333e050f3f02a35bb06_1733027974.jpg","created_at":"2024-11-30 17:18:07","updated_at":"2024-12-01 04:39:36","link":"https:\/\/thanhnien.vn\/caraworld-tao-tieng-vang-lon-tren-thi-truong-bat-dong-san-cam-ranh-18524112018534358.htm","date":"30\/11\/2024"},{"id":2,"name":"KN Cam Ranh h\u1ee3p t\u00e1c 6 ng\u00e2n h\u00e0ng h\u1ed7 tr\u1ee3 ng\u01b0\u1eddi vay mua nh\u00e0","type":"post","description":null,"image":"\/assets\/temp\/98c74fb3b2a4b0d02512d048de862a31_1733027801.png","created_at":"2024-11-30 17:17:40","updated_at":"2024-12-01 04:38:16","link":"https:\/\/vnexpress.net\/kn-cam-ranh-hop-tac-6-ngan-hang-ho-tro-nguoi-vay-mua-nha-4818754.html?fbclid=IwY2xjawGyJsFleHRuA2FlbQIxMQABHdKXkHoQzkevQtdJedWubILpD1BmvuMqQyzzCT1VAy-PIY_DfgQOnsIr9A_aem_xUPtvjxUgSbqpGDmnuPsEg","date":"30\/11\/2024"}]' id="items2" title='session1 tin báo trí' />
                        <input type="hidden" value='[{"id":8,"name":"H\u00ecnh \u1ea3nh 4","type":"new","description":null,"image":"\/assets\/temp\/55aa884044be306d56e0d98b3042b4f3_1732987202.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:20:03","updated_at":"2024-11-30 17:20:03","date":"30\/11\/2024"},{"id":7,"name":"H\u00ecnh \u1ea3nh 3","type":"new","description":null,"image":"\/assets\/temp\/9d4e0f3fdecff2d72c9e4cf82d7215fb_1732987189.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:19:50","updated_at":"2024-11-30 17:19:50","date":"30\/11\/2024"},{"id":6,"name":"H\u00ecnh \u1ea3nh 2","type":"new","description":null,"image":"\/assets\/temp\/18a53dc47372bb1768f7275a4e36e38e_1732987174.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:19:34","updated_at":"2024-11-30 17:19:34","date":"30\/11\/2024"},{"id":5,"name":"H\u00ecnh \u1ea3nh 1","type":"new","description":null,"image":"\/assets\/temp\/9586dce04923f747acb22840ef597e67_1732987150.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:19:10","updated_at":"2024-11-30 17:19:10","date":"30\/11\/2024"}]' id="items3" title='session2 tin dự án' />
                        <input type="hidden" value='[{"id":10,"name":"TI\u1ebfn \u0111\u1ed9 2","type":"post","description":null,"image":"\/assets\/temp\/9501492141cac9bd5b7f7959b89a4b5e_1733064274.jpg","link":"http:\/\/dev.caraworld.vn\/","created_at":"2024-12-01 14:44:35","updated_at":"2024-12-01 14:44:35","date":"01\/12\/2024"},{"id":9,"name":"\u1ea2nh ti\u1ebfn \u0111\u1ed9","type":"post","description":null,"image":"\/assets\/temp\/03c5e95e17594b6fc7c95288dc6e451d_1732987219.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:20:20","updated_at":"2024-11-30 17:20:20","date":"30\/11\/2024"}]' id="items4" title='session2 ảnh tiến độ' />

                        <input type="hidden" value='[{"id":6,"name":"B\u1ea3n \u0111\u1ed3 Sitetour","description":null,"image":"\/assets\/temp\/e126edd1280ae1102110491001b5c922_1733041520.jpg","link":"https:\/\/drive.google.com\/drive\/folders\/1mdxUtHjjEOKwEtul4b0sM8V6ldX_SdSp?usp=drive_link","created_at":"2024-12-01 08:25:20","updated_at":"2024-12-01 08:25:26"},{"id":5,"name":"B\u1ea3n \u0111\u1ed3 Sitetour","description":null,"image":"\/assets\/temp\/0abb28478f28853bcc8e6a9efe25d872_1733041501.jpg","link":"https:\/\/drive.google.com\/drive\/folders\/1mdxUtHjjEOKwEtul4b0sM8V6ldX_SdSp?usp=drive_link","created_at":"2024-12-01 08:25:02","updated_at":"2024-12-01 08:25:08"},{"id":4,"name":"B\u1ea3n \u0111\u1ed3 Sitetour","description":null,"image":"\/assets\/temp\/9f422a8e0b03d2cae09c601051c4a77a_1733036932.jpg","link":"https:\/\/drive.google.com\/drive\/folders\/1mdxUtHjjEOKwEtul4b0sM8V6ldX_SdSp?usp=drive_link","created_at":"2024-12-01 07:05:09","updated_at":"2024-12-01 07:08:53"},{"id":3,"name":"T\u1edd g\u1eadp","description":null,"image":"\/assets\/temp\/0913701daa857f8633d0769a1b16ad92_1732987260.jpg","link":"https:\/\/drive.google.com\/drive\/folders\/1sQArcBXYQRkhkfT0pzXTZmvuZH8oVxSz?usp=drive_link","created_at":"2024-11-30 17:21:02","updated_at":"2024-12-01 07:04:23"},{"id":2,"name":"Standee","description":null,"image":"\/assets\/temp\/e98d85146bce4e2c637d67436e750732_1732987246.jpg","link":"https:\/\/drive.google.com\/drive\/folders\/1-40Ayq8Z3NWrQ7BKuo2D-359MoDUmLmq?usp=drive_link","created_at":"2024-11-30 17:20:47","updated_at":"2024-12-01 07:04:02"},{"id":1,"name":"T\u1edd r\u01a1i","description":null,"image":"\/assets\/temp\/8fe8d5c00693ab882f6b71c39eb3b6ea_1733036925.jpg","link":"https:\/\/drive.google.com\/file\/d\/1hksWrP_HNCBu34u5nW1XDwIVNbKTe3xv\/view?usp=drive_link","created_at":"2024-11-30 17:20:33","updated_at":"2024-12-01 07:08:46"}]' id="items5" title='session3 tài liệu bán hàng' />
                        <input type="hidden" value='[{"id":3,"name":"Ph\u00e1p l\u00fd 3","description":null,"image":"\/assets\/temp\/195fa588468320542e0139c4f9a6723b_1732987305.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:21:46","updated_at":"2024-11-30 17:21:46"},{"id":2,"name":"Ph\u00e1p l\u00fd 2","description":null,"image":"\/assets\/temp\/3bda996f94afd88aa6aae3cc37191b71_1732987295.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:21:37","updated_at":"2024-11-30 17:21:37"},{"id":1,"name":"Ph\u00e1p l\u00fd 1","description":null,"image":"\/assets\/temp\/97e4efc5d4555cac1337ffa5b2e5dc09_1732987282.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:21:25","updated_at":"2024-11-30 17:21:25"}]' id="items6" title='session3 pháp lý' />
                        <input type="hidden" value='[{"id":3,"name":"Ch\u00ednh s\u00e1ch b\u00e1n h\u00e0ng 3","description":null,"image":"\/assets\/temp\/dd4a05c2202ccddbf936f33a41521538_1732987350.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:22:34","updated_at":"2024-11-30 17:22:34"},{"id":2,"name":"Ch\u00ednh s\u00e1ch b\u00e1n h\u00e0ng 2","description":null,"image":"\/assets\/temp\/159ef06ab308f8cae0a2ec9f0811f1ca_1732987337.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:22:18","updated_at":"2024-11-30 17:22:18"},{"id":1,"name":"Ch\u00ednh s\u00e1ch b\u00e1n h\u00e0ng 1","description":null,"image":"\/assets\/temp\/6bc779ccb14b73ea80e1c26e9a72b7fa_1732987318.jpg","link":"https:\/\/dev.caraworld.vn\/tin-tuc","created_at":"2024-11-30 17:21:58","updated_at":"2024-11-30 17:21:58"}]' id="items7" title='session3 chính sách bán hàng' />

                    </> : ''
            }

            <div className="section-top section-theodong-sukien">
                <div className="heading" data-aos="fade-up" data-aos-duration="1000">
                    <div className="section-text">
                        <h2 className="text-hidden">Theo dòng sự kiện</h2>
                        <img src={process.env.NODE_ENV === 'development' ? "http://dev.caraworld.vn/assets/index/images/news/theo-dong-su-kien.png" : "/assets/index/images/news/theo-dong-su-kien.png"} alt="Theo dòng sự kiện" />
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
                <div className="container" data-aos="fade-up" data-aos-duration="1500" data-delay="2000">
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
                <div className="heading" data-aos="fade-up" data-aos-duration="1000">
                    <div className="section-text">
                        <h2 className="text-hidden">Sự kiện và tiến độ</h2>
                        <img src={process.env.NODE_ENV === 'development' ? "http://dev.caraworld.vn/assets/index/images/news/su-kien-va-tien-do.png" : "/assets/index/images/news/su-kien-va-tien-do.png"} alt="Sự kiện và tiến độ" />
                    </div>
                    <div className="checkbox_heading">
                        <label className="checkbox-label" htmlFor="checkbox-3">
                            <span>
                                <input className="checkbox-input" checked={isCheckedC} onChange={handleCheckboxCChange} type="checkbox" id="checkbox-3" />
                                <span className="checkbox-icon-wrapper">
                                    <i className="checkbox-icon" />
                                </span>
                            </span>
                            <span className="checkbox-text">Hình Sự Kiện</span>
                        </label>
                        <label className="checkbox-label" htmlFor="checkbox-4">
                            <span>
                                <input className="checkbox-input" checked={isCheckedD} onChange={handleCheckboxDChange} type="checkbox" id="checkbox-4" />
                                <span className="checkbox-icon-wrapper">
                                    <i className="checkbox-icon" />
                                </span>
                            </span>
                            <span className="checkbox-text">Hình tiến độ</span>
                        </label>
                    </div>
                </div>
                <div className="container" data-aos="fade-up" data-aos-duration="1500" data-delay="2000">
                    <div className="center-slider-wrap">
                        <div className="slider-center-mode">
                            {
                                displayedArrayCD.length > 3 ?
                                    <Slider ref={slider => { sliderRef = slider }} {...settings2}>
                                        {displayedArrayCD.map((slide, index) => {
                                            return (
                                                <img key={index} src={process.env.NODE_ENV === 'development' ? ('http://dev.caraworld.vn/' + slide.image) : slide.image} alt="true" />
                                            )
                                        })}
                                    </Slider>
                                    : <div className={`other-way ${sliderCDIssue()}`}>
                                        {displayedArrayCD.map((slide, index) => {
                                            return (
                                                <img key={index} src={process.env.NODE_ENV === 'development' ? ('http://dev.caraworld.vn/' + slide.image) : slide.image} alt="true" />
                                            )
                                        })}
                                    </div>
                            }
                            <div className={`slider-center-mode-range ${displayedArrayCD.length < 4 && 'hidden'}`}>
                                {
                                    displayedArrayCD.length > 3 ?
                                        <input
                                            onChange={e => sliderRangeChange(e)}
                                            value={slideIndex}
                                            type="range"
                                            min={0}
                                            max={displayedArrayCD.length - 1}
                                            style={{ 'backgroundSize': styleBgs }}
                                        /> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DynamicSlides;
