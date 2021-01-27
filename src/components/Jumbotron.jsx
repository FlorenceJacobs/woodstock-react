import plancher from '../img/plancher.jpg'
import wood from '../img/wood.jpg'

const Jumbotron = ({ children }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            { children }
            <div className="container-titre row text-center align-items-center justify-content-around mx-0">
                <div>
                    <div className="titre">W<span className="woodLine"><span className="woodColor">OO</span></span>D</div>
                    <div className="titre">STOCK</div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron