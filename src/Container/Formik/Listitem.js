
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap';


function Listitem(props) {

  const [data, setdata] = useState([]); 

   
   let history =useHistory();
    

  const localData = () => {
    let localData = JSON.parse(localStorage.getItem("booklist")); 
    if(localData !== null) {
      setdata(localData);
    }

   
  }

   const  handledelet = (id) => {
          
        let localData = JSON.parse( localStorage.getItem('booklist')) ; 
         let ddata= localData.filter( (l,i) =>l.id!==id)
         localStorage.setItem("booklist", JSON.stringify(ddata));
         localData()

        // console.log(localData,idata);
    
   } 

   const handleEdit = (id) => {
             history.push('/Bookapointment',{"id" :id});
   }

  useEffect(() => {

    localData();

  }, [])

  return (

    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <div className='row'>
            <div className='col-6 text-center'>
              <NavLink className="nav-link scrollto" to={"/Bookapointment"}>book-appoinment</NavLink>

            </div>
            <div className='col-6'>
              <NavLink className="navbar order-last order-lg-0 nav-link scrollto" to={"/listapoinment"}>list-apportment</NavLink>
            </div>


          </div>
          <h2>Make an  list-appoinmnent</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>

      </div>

       
       <table border='2'> 
            <tr>
                <th>
                  <td>name</td>
                </th>
            </tr>

       </table>
      {
        data.map((d, i) => {
          return (
            <>
            
               {/* <h4>{d.name}</h4> */}
               <td>{d.name}</td>

               <button onClick={() => handledelet (d.id)}> DELET</button>
               <button onClick={() => handleEdit (d.id)}> EDIT</button>

              </>
               
          )
        })
      }
    </section>
  );
}

export default Listitem;