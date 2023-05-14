import { TextField,Box } from "@material-ui/core";
import { blue,grey } from '@mui/material/colors';



 export  const Input=(props) => {
    const { onChange, value } = props;

    return <TextField
    id="outlined-controlled"
    label="Search"
    value={value}
    onChange={onChange}
        sx={{
            mb:"1.5rem"
        }}
    />;
};



export const Inputdiv=(props)=>{
    const { onChange, value } = props;
return <Box 
sx=
{{ display: 'flex',
justifyContent: 'center'
}}
> 
 <TextField
    id="outlined-controlled"
    label="Search"
    value={value}
    onChange={onChange}
        sx={{
            mb:"1.5rem"
        }}
    />  </Box>
 };



export const Cardcontainer=(props)=>{
   const { render } = props;
return <Box 
sx=
{{ display: 'flex',
flexWrap: 'wrap',
width: '100%',
justifyContent: 'center',
'@media (max-width: 414px)' : {
    width: '50%',
    display : 'flex'
  }   
}}
> 
{render} </Box>
 };






export const Cardwrapper=(props)=>{
  const  {Userimg,Name,p,Description} =props;


 return <Box 
 sx=
 {{ display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 border: '1px solid black',
 margin: '10px',
 width: '420px',
 height:'460px', 
 'h2': {
    alignItems: 'center'
},
 '@media (max-width: 414px)' : {
     width: '395px',
     margin:'10px',
     justifyContent: 'center',
   }   
 }}
 > 
{Userimg}
{Name}
{p}
{Description}    </Box>
  };



export const Userimg=(props)=>{
const  {src} = props;
return <Box 
component="img"
sx=
{{  width:'150px',
    height:"150px",
    borderRadius: "50%",
    mt:'-30px'
}}
src={src}
> 
  </Box>
 };



 export const Name=(props)=>{
  const  {name} = props;
  return <Box 
  
  sx=
  {{  
    display: 'flex',
    flexDirection: 'column',
  }}
 > 
    {name} </Box>
   };


   
export const Description=(props)=>{
  const  {description} =props;


 return <Box 
 sx=
 {{ 

  mb:'-80px',
  mt:'-10px',
  justifyContent: 'center',
  ml:'20px',

 '@media (max-width: 414px)' : {
     ml:'30px',
     justifyContent: 'center',
   }   
 }}
 > 

{description}    </Box>
  };




export const Paginationdesign=(props)=>{
  

  const  {pageNumbers} = props;

 return <Box 
 sx=
 {{ 
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'
 }}
 > 

{pageNumbers}  </Box>
  };

/*
  export const Pageitem  = styled.div`
  width: 25px;
      height: 25px;
      color: blue;
      border: 1px solid black;
      transition: transform ease 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  ` 


*/




export const Pageitem=(props)=>{
  //const  {description} =props;

  const  {numbers} = props;
  
 return <Box 
 sx=
 {{ 

  width: '25px',
  height: '25px',
  display: 'flex',
  justifyContent: 'center',
  color: blue,
  border: '1px solid black',
  transition: 'transform ease 0.3s',
  alignItems: 'center',
  cursor: 'pointer',
 '&:hover' :{
 transform: 'scale(1.1)'
  },
 }}
 > 

{numbers} </Box>
  };



 /* export const Pagelink  = styled.div`
    color: grey;  
` */

export const Pagelink=(props)=>{
  const  {num} = props;
 return <Box 
 sx=
 {{ 
  color: grey,
 
 }}
 >
  {num}  
</Box>
  };