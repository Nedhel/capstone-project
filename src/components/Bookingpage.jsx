import Bookingform from "./Bookingform"
export function Bookingpage({availableTime, setAvailableTime, submitForm}){
    return(
        <section className="bookingpage">
            <h1>Please fill this form</h1>
            <Bookingform availableTime={availableTime} setAvailableTime={setAvailableTime} submitForm={submitForm}/>
        </section>
    )
}