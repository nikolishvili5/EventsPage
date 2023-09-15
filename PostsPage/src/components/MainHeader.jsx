import { Link, NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css'
import {BsSearch} from 'react-icons/bs'
import Search from './Search';


function MainHeader(){
    return (
        <>
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined} end>
                            Home
                        </NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/events' className={({ isActive }) => isActive ? classes.active : undefined}>
                            Events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div className={classes.section}>
            <p><span>Add  </span><span className={classes.title}>Trending Events</span></p>
            <Search/>
        </div>
        </>
    )
}


export default MainHeader;