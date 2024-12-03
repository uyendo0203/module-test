const EventItem = ({ name, link, image, date }) => {
    return (
        <div className="events-item">
            <div className="events-image">
                <img src={process.env.NODE_ENV === 'development' ? ('http://dev.caraworld.vn/' + image) : image} alt="slider-su-kien" />
            </div>
            <div className="events-des">
                <h3 className="events-title">{name}</h3>
                <div className="events-arrow-date">
                    <a target="_blank" href={link ? link : '/'} className="events-arrow">
                        <span className="arrow">
                            <img src={process.env.NODE_ENV === 'development' ? "http://dev.caraworld.vn/assets/index/images/news/arrow-readmore.svg" : "/assets/index/images/news/arrow-readmore.svg"} alt="arrow-readmore" />
                        </span>
                        <span> Xem thêm</span>
                    </a>
                    <div className="events-date">{date}</div>
                </div>
            </div>
        </div>

    )
}

export default EventItem