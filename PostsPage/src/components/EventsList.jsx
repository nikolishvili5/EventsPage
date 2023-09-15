import { Link, useLoaderData } from "react-router-dom";
import classes from './EventsList.module.css';


function EventsList(){ 
    const posts=useLoaderData();
    return(
        <div className={classes.events}>
            <ul className={classes.list}>
                {posts.map((post)=>(
                    <li key={post.id} className={classes.item}>
                        <Link to={`/events/${post.id}`}>
                            <img src={post.image}/>
                            <div className={classes.content}>
                                <h2>{post.title}</h2>
                                <time>{post.date}</time>
                                <p>{post.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}



export default EventsList;