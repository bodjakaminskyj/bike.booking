import React, {useEffect, useState} from "react";
import "./Statistic.css"
export const Statistic = () => {
    const [totalBike, setTotalBike] = useState()
    const [average, setAverage] = useState(0)
    useEffect(() => {
        const bikes = document.getElementById('bikes')
        const totalBike = bikes.querySelectorAll('.bike-info').length
        setTotalBike(totalBike)

        const averageCostBike = bikes.children
        let average = 0
        for (let i = 0; i < bikes.children.length; i++){
            average += parseFloat(averageCostBike[i].childNodes[4].childNodes[0].data)
        }
        setAverage(average/bikes.children.length);
        if(isNaN(average/bikes.children.length)){
            setAverage(0)
        }
    });
    return(
        <div className="statistic">
            <h1>Statistic</h1>
            <div>
                <label>Total Bike: {totalBike}</label>
            </div>
            <div>
                <label>Available Bike:{0} </label>
            </div>
            <div>
                <label>Booked Bike: {0}</label>
            </div>
            <div>
                <label>Average bike cost: {average} UAH/hr</label>
            </div>


        </div>
    )

}
