import React from 'react';
import Card from '../UI/Card';
import classes from './Listitems.css'
 const Listitems = (props)=>{

     return(
         <Card className={classes.users}>
            <ul>
                {props.users.map((user)=>{
                    return(
                        <li key={user.id}>{user.name} {user.age}</li>
                    )
                })} 
            </ul> 
         </Card>
     )
 }
 export default Listitems