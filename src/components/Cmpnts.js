// import Hotelig from './Hotel.jpg'
// import Trichy from './Trichy hotel.jpg';

function Welcome(props) {
    return <>
        
        <div className="start2">
            <div className="star1">
                <img src={props.Trichy} alt="#"></img>
            </div>
            <div className="block-example border border-dark start3">
                    <h3>{props.Hotelname}</h3>
                    
                    </div>
                  
        </div>

    </>
}

export default Welcome;