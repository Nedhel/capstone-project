import { useState } from "react"

export default function Bookingform({availableTime, setAvailableTime, submitForm}){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    
    function handleDate(e){
        setDate(e.target.value);
        setAvailableTime(e.target.value)
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
        submitForm(formData)
    }
    return(
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={date} onChange={handleDate} required/>
            <label htmlFor="time">Choose time</label>
            <select id="time" value={time} onChange={handleTime} required>
                {
                    availableTime.times.map(time=><option key={time}>{time}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasion} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
            
        </form>
    )
}