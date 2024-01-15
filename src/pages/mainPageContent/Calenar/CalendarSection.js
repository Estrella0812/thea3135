import { useState } from "react"
import Calendar from 'react-calendar';
import axios from 'axios';

import './CalendarSection.css'

let events = [];
let selectedDayEvent = [];

function CalendarSection() {

  const API_KEY = 'AIzaSyCHzm-VcMaio3CRbNV-l4bpGyvSW2gsr8M';
  const CALENDAR_ID = '11f2dbcf9aa680a4c0fce8fd8fe5931a3a2b645c1b382c18ec064e34efec7533@group.calendar.google.com';

  const fetchEvents = async () => {
    
    try {
      const response = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
      );
      
      events = response.data.items;
      // console.log(response.data.items[0].start.date);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  fetchEvents()
  
  const [date, setDate] = useState(new Date());
  // console.log("Selected date is : " + date.toISOString().substring(0,10));

  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} onClickDay={setEvent(date)} value={date} />
      {selectedDayEvent.length
      ? selectedDayEvent.map((event) =><div className="event-container"><p key={event.id}>{event}</p></div>)
      : <div className="event-container"><p style={{color:"#B6BBC4"}}>no events</p></div>
      }
    </div>
  );
}

function setEvent(date){
  selectedDayEvent = [];
  events.forEach((event)=>{
    if(date.toISOString().substring(0,10) === event.start.date){
      selectedDayEvent.push(event.summary);
      console.log(selectedDayEvent)
    }
  })
}

export default CalendarSection;