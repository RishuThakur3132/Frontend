import { useParams } from "react-router-dom";
import { car } from "../cars.js";

function Details(){
    const { id } = useParams();
    const selectedCar = car.find(
        (car) => car.id === Number(id)
    );
    if (!selectedCar){
        return<h1>Car not found</h1>
    }

    return (
        <div>
            <img src={selectedCar.image}/>
            <h1>
                {selectedCar.brand}
                {selectedCar.model}
            </h1>

            <p>Year: {selectedCar.year}</p>
            <p>Price:{selectedCar.price}</p>

            <p>Mileage:{selectedCar.mileage} Km</p>
            <p>Fule:{selectedCar.fuleType}</p>
            <p>Color:{selectedCar.color}</p>
            <p>Brand:{selectedCar.brand}</p>
            <p>Rating: {selectedCar.rating}</p>

        </div>
    );
}

export default Details;