const Contact = () => {
    return (
        <div className="container contact">
            <div className="row">
                <div className="col">
                    <h2 className="sectionTitle">CONTACT US</h2>
                </div>
                <div className="row d-flex">
                    <form action="#" method="POST">
                        <input className="col-6 contactInput" type="text" name="firstName" placeholder="FIRST NAME"/>
                        <input className="col-6 contactInput" type="text" name="lastName" placeholder="LAST NAME"/>   
                        <input className="col-12 contactInput" type="email" name="email" placeholder="MAIL ADDRESS"/>
                        <textarea className="col-12 contactInput" rows="10" name="message" placeholder="MESSAGE">
                        </textarea>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact