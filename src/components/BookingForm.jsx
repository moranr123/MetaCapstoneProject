import React, { useState } from "react";


function BookingForm(props) {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState();
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
        // Handle form submission logic here
    }

    const handleChage = (e) => {
        setDate(e);
        props.dispatch(e)
    }

  return (
    <header>
        <section>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="book-date">Choose Date:</label>
                        <input type="date" id="book-date" name="book-date" 
                            onChange={(e) => handleChage(e.target.value)} value={date} required/>
                      </div>
                    <div>
                        <label htmlFor="book-time">Choose time:</label>
                        <select id="book-time" name="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">Select a time</option>
                            {
                                props.availableTimes.availableTimes.map((time) => (
                                    <option key={time} value={time}>{time}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="book-guests">Number of Guests:</label>
                        <input id="book-guests" value={guests} min="1" onChange={(e) => setGuests(e.target.value)} />

                    </div>

                    <div>
                        <label htmlFor="book-oocassion">Occasion:</label>
                        <select id="book-occasion" key={occasion} value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}>
                            <option value="">Select an occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>

                    <div>
                        <input type="submit" aria-label="On Click" value={"Make your Reservation"} />
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  );
}

export default BookingForm;