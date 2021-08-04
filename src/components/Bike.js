import React from "react"
import './Bike.css'


const Bike = ({bikes}) => {
    const deleteEl = (e) => {
        let el = e.target
        el.parentElement.remove()
    }
    const setValue = (e) => {
        let el = e.target
        let x = el.parentElement.parentElement
        if(el.value==='Busy'){
            x.classList.remove('available','unavailable')
            x.classList.add('busy')
        }else if(el.value==='Available'){
            x.classList.remove('busy','unavailable')
            x.classList.add('available')
        }else if(el.value==='Unavailable'){
            x.classList.remove('available','busy')
            x.classList.add('unavailable')
        }
    }
    return(
        <div className="bike-info available">

            <div className='bike'>
                <label>{bikes.name}</label> - {bikes.type}({bikes.color})
            </div>
            <div className='delete' onClick={deleteEl}>&#10006;</div>
            <label>{bikes.id}</label>
            <div className='status'>
                <label>Status:</label>
                <select onClick={setValue}>
                    <option defaultValue>Available</option>
                    <option>Busy</option>
                    <option>Unavailable</option>
                </select>
            </div>
            <h1 className='price'>{bikes.price} UAH/hr</h1>

        </div>
    )
}

export default Bike;
