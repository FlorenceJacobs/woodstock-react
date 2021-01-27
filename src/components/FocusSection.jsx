import bureau from '../img/bureau.jpg'

const FocusSection = ({ children, sectionTitle, buttonTitle, imgSrc, imgClass }) => {
    return (
        <div className="container-fluid focusSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end">
                        <img className="" id={imgClass} src={imgSrc} alt=""/>
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <div className="h5 mt-4 align-self-end">W<span className="woodLine"><span className="woodColor">OO</span></span>D</div>
                        <div className="focusTitle">CREATIVE TEAM</div>
                        <div className="focusSectionTitle">
                            {sectionTitle}
                        </div>
                        <div className="mt-2"></div>
                        {children}
                        <div className="mt-5"></div>
                        <button type="button" className="focusSectionButton">{buttonTitle}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FocusSection