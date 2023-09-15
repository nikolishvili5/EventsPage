import '../App.css'
import EventsList from '../components/EventsList';

function EventsPage() {
  return (
    <EventsList/>
  )
}

export default EventsPage;



export async function loader(){
  const response = await fetch('http://localhost:8080/events');
  const resData=await response.json();
  return resData.events;
}
