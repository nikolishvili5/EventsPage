import { BsSearch,BsFilterRight } from "react-icons/bs"
import classes from './Search.module.css'

function Search(){
    return (
        <div className={classes.box}>
            <div>
                <a href="#"><BsSearch className={classes.searchIcon}/></a>
                <input placeholder="Search event..."/>
            </div>
            <a href="#"><BsFilterRight className={classes.search}/></a>
            <h1></h1>
        </div>
        
    )
}


export default Search;