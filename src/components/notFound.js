import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';

const NotFound=()=>{
    const navigate = useNavigate()
      return(
         <>
         <div>
         <img src="https://webso.vn/templates/images/404.png" alt="" />
            </div>
            <br></br>
         <div >
         <Button   sx={{marginLeft:"-240%", marginTop:"750%", width: "10%"}} 
               variant="contained"
               onClick={()=>{
                navigate('/')
            }}

              
              >BACK</Button>

              
            
            </div>
            

            

         </>
      )

}
export default NotFound