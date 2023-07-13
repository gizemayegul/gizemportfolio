import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';




function Slides() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };



    return (
        <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSM_RqHrSewyZbyik2DvCcItwSGEj6WJ1P3LU_Vl-5debXy9H6We_Gv6mkXJma9AFXBqY-ClodxXJNm93M'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSM_RqHrSewyZbyik2DvCcItwSGEj6WJ1P3LU_Vl-5debXy9H6We_Gv6mkXJma9AFXBqY-ClodxXJNm93M'
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSM_RqHrSewyZbyik2DvCcItwSGEj6WJ1P3LU_Vl-5debXy9H6We_Gv6mkXJma9AFXBqY-ClodxXJNm93M'
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Slides;