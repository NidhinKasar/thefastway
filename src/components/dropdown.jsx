import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Dropdown } from 'react-bootstrap';  

function DropDown({applyFilterFromDropdown , text}) {  

const categories = text === 'Filter By Model' ?  JSON.parse(localStorage.getItem('model') || '[]'  ) : JSON.parse(localStorage.getItem('categories') || '[]') 
   
const applyFilter = (item) => {
        applyFilterFromDropdown(item)
    }

  return (  
    <div className="App">  
   <Container className='p-4'>  
   <Dropdown>  
  <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
    {text}
  </Dropdown.Toggle>  
  
                  <Dropdown.Menu>  
                      {categories && categories.length > 0 && categories.map((item) => {
                          return (
                              <Dropdown.Item onClick={() => applyFilter(item)}>{item}</Dropdown.Item>     
                          )
                      })}
                  </Dropdown.Menu>  
</Dropdown>  
</Container>  
    </div>  
  );  
}  
export default DropDown;  