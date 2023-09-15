import { Link, useSubmit } from 'react-router-dom';
import classes from './Event.module.css'

function Event({event}){
    const submit=useSubmit();

    function deleteHandler(){
        const proceed=window.confirm('Are you sure?'); 
        if(proceed){
            submit(null,{method:'delete'})
        }
    }
    return(
        <section className={classes.container}>
            <div>
                <img src={event.image} alt={event.title} className={classes.image}/>
                <h1>{event.title}</h1>
                <time>{event.date}</time>
                <p>{event.description}</p>
            </div>
            
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={deleteHandler}>Delete</button>
            </menu>
        </section>
    )
}

export default Event;