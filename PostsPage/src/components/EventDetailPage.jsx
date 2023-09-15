import { useLoaderData } from "react-router-dom";
import Event from "./Event";



function EventDetailPage(){
    const data=useLoaderData();
    return(
        <Event event={data.event}/>
    )
}



export default EventDetailPage;


export async function loader({request, params}){
    const id=params.eventId;
    const response = await fetch('http://localhost:8080/posts/' + id);
    if (!response.ok) {
        throw json(
          { message: 'Could not fetch details for selected event.' },
          {
            status: 500,
          }
        );
      } else {
        return response;
      }
}