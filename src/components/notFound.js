import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';

const NotFound=()=>{
    const navigate = useNavigate()
      return(
         <>
         
         <div >
                <br/><br/><br/><br/>
            <img src="https://webso.vn/templates/images/404.png" alt=""/>
            </div>
            <br/><br/><br/><br/>

            <div>
              <Button   sx={{marginLeft:"-170%", marginTop:"850%", width: "10%"}} 
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