import React,{useState} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../User/ErrorModal'
import classes from './Adduser.module.css'
const Adduser = (props)=>{
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState({title:"", message:""})

    const onSubmitHandler=(event)=>{
        event.preventDefault()
        if(userName.trim().length === 0 || userAge.trim().length === 0){
            setError({
                ...error,
                title:"invalid input",
                message:"please enter valid name and age"            
            })
            return 
        }
        else if(userAge<0){
            setError({
                ...error,
                title:"invalid input",
                message:"please enter age greater than 0"
            })
            return 
        }
        else{
            props.onAdduser(userName, userAge);
            setUserName('')
            setUserName('')
        }
       
    }
    const userNameHandler = (event)=>{
        setUserName(event.target.value)
    }
    const userAgeHandler = (event)=>{
        setUserAge(event.target.value)
    }
    const ErrorHandler =()=>{
        setError(null)
    }
    return(
        <div>
       {error && <ErrorModal title={error.title} message={error.message} onclick ={ErrorHandler}/>}
             <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
            <label>Add User</label>
            <input type="text" name="AddUser" vlaue={userName} onChange={userNameHandler}  />
            <label>Age(years)</label>
            <input type="number" name="Age" value={userAge} onChange={userAgeHandler} />
            <Button type="submit">AddUser</Button>
        </form>
        
     </Card>
        </div>
   
    )
}
export default Adduser