import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
// remove it

function Items({value,handleDelete}){
    return(
        <>
          <h5>Edit/Delete Phones</h5> 
           <div>
           <Card body className="text-center">
            <CardTitle>{value.title}</CardTitle>
            <CardText>{value.price}</CardText>
            <CardText>{value.description}</CardText>
            <CardText>{value.rating}</CardText>
           
            <Button
              onClick={()=>handleDelete(value.id)}
            ></Button>
        </Card>
        




           </div>
           </>
    )
}

export default Items