const EventItem = ( {title,link,image,date})=>{
    return(
        <div className="events-item">
            <div className="events-image">
                <img src={image} alt="slider-su-kien" />
            </div>
            <div className="events-des">
                <h3 className="events-title">{title}</h3>
                <div className="events-arrow-date">
                <a href={link?link:'/'} className="events-arrow">
                    <span className="arrow">
                    <img src="./images/news/arrow-readmore.svg" alt="arrow-readmore" />
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