import { useState } from "react"

export default function Bookingform({availableTime, setAvailableTime, submitForm}){
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();
    const [validDate, setValidDate] = useState(true);
    
    function isValidDate(date){
        const splitDate = date.split("-");
        const dateSelected = new Date(parseInt(splitDate[0]), parseInt(splitDate[1]) - 1, parseInt(splitDate[2]));
        return dateSelected >= new Date()? true: false;
    }
    function handleDate(e){
        setDate(e.target.value);
        if(isValidDate(e.target.value)){
            setAvailableTime(e.target.value)
            setValidDate(true)
        }else{
            setValidDate(false)
        }
    }
    function handleTime(e){
        setTime(e.target.value)
    }
    function handleGuests(e){
        setGuests(e.target.value)
    }
    function handleOccasion(e){
        setOccasion(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        const formData={date:date, time:time, guests:guests, occasion:occasion}
        console.log(formData)
        //submitForm(formData)
    }
    return(
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} className='form' onSubmit={handleSubmit}>
            <label htmlFor="date" className="dateLabel">Choose date</label>
            <input type="date" id="date" value={date} onChange={handleDate} required />
            {validDate?null:<p style={{color:'red',fontSize:'small'}}>Reservation day should be from tomorrow and onwards</p>}
            <label htmlFor="time" className="timeLabel">Choose time</label>
            <select id="time" value={time} onChange={handleTime} required>
                <option></option>
                {
                    availableTime.times.map(time=><option key={time}>{time}</option>)
                }
            </select>
            <label htmlFor="guests" className="guestsLabel">Number of guests</label>
            <input type="number" min="1" max="10" id="guests" value={guests} onChange={handleGuests} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasion}>
                <option value="none"></option>
                <option value="Birthday">Birthday</option>
                <option value="ANniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" disabled={date && time && guests?false:true} aria-label="On Click"/>
            
        </form>
    )
}