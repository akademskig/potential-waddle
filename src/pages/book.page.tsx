import React from 'react';
import  { useParams } from 'react-router-dom';

const BookPage = () =>{
const {id} = useParams()

return(
<div>
    Book Page {id}
</div>
)}

export default BookPage