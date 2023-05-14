import {Cardwrapper,Userimg,Name,Description} from "./materialuistyle"
  const UserCard =({user})=>{
console.log("user",user);
     return (

<div>
<Cardwrapper 
Userimg= {<Userimg src={user.owner.avatar_url} />} 
  Name= {<h2> <Name  name={user.full_name} /></h2> }
   p = {<p>{user.html_url}</p>}
  Description = {<p> <Description  description={user.description} /></p>}
/>
</div>


) 
}

export default UserCard;

