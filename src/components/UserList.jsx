import React from "react";
import  {useState,useEffect}  from "react";
import {getUsers}  from  '../api';
import UserCard  from  "./UserCard";
import Pagination from './Pagination';
import {Inputdiv,Cardcontainer} from "./materialuistyle";


  const UserList =()=>{
  const [users,setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);



  useEffect(()=>{
   getUsers().then(data => {
     const results = data;
     console.log("results",results);
     setUsers(results);
     console.log("users:",users)}
   );
   },[]); 
 
 

  
  

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

const [value,setValue]= useState('');




const filteredUsers = users.filter(user=>{
    return user.name.toLowerCase().includes(value.toLowerCase())
});



const renderUsers = () => {
 let indexOfLastPost = currentPage * postsPerPage;
 let indexOfFirstPost = indexOfLastPost - postsPerPage;

 

return  filteredUsers.slice(indexOfFirstPost, indexOfLastPost).map((user)=> <UserCard user={user} key={user.id}/>)

}



 


return (
 <>
  <Inputdiv
   onChange= {(event)=>setValue(event.target.value)} 
  />
  <section> <Cardcontainer render={renderUsers()} /> </section>
 <Pagination
       postsPerPage={postsPerPage}
       totalPosts={users.length}
       paginate={paginate}
     />
 </>
 )
}




export default UserList;