import chaise from '../img/chaise.jpg'
import restaurant from '../img/restaurant.jpg'

const Section = ({ children, sectionTitle, buttonTitle, imgSrc, imgClass }) => {
    return (
        <div className="container section px-md-5">
            <div className="row">
                <div className="col-md-6">
                    <img className={imgClass} src={imgSrc} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="sectionTitle">
                        {sectionTitle}
                    </div>
                    <div className="mt-2"></div>
                    {children}
                    <div className="mt-5"></div>
                    <button className="sectionButton">{buttonTitle}</button>
                </div>
            </div>
        </div>
    )
}

export default Section