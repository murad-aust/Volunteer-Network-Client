import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import ActivityDetail from '../ActivityDetail/ActivityDetail';
import { UserContext } from '../../App';
const style = {
    backgroundColor: '#EEF5F3',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
    

  }


const Activities = () => {
    const [activity, setActivity] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [remove, setRemove] = useState(false);

    const handleActivityDelete = (id)=> {
       
            fetch(`http://localhost:5000/delete/${id}` ,{
        method: 'DELETE',
        
      })
      .then(res => res.json())
      .then(result =>{
          if(result){
              setRemove(!remove)
           
          }

      })
   

   
}
   
    useEffect(()=>{
        fetch('https://fast-woodland-36481.herokuapp.com/activities?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data =>setActivity(data))
    },[remove])

    return (
        <div style={style}>
            <Header></Header>
            <div>
                {
                    activity.map(activity =><ActivityDetail key={activity._id} removeActivity= {handleActivityDelete} activity={activity}></ActivityDetail>)
                }
            </div>
        </div>
    );
};

export default Activities;