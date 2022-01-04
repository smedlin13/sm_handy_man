import { useState } from 'react';
import ServiceForm from './ServiceForm';

const Service = ({id, updateService, deleteService, s_type, min, desc }) => {
  const [editing, setEdit] = useState(false)
  return (
    <>
      <h2>{s_type}</h2>
      <h3>Minutes of Work: {min}</h3>
      <h3>Description: {desc}</h3>
      {
        editing ? 
        <>
        <ServiceForm
        id={id}
        s_type={s_type}
        min={min}
        desc={desc}
        updateService={updateService}
        setEdit={setEdit}
        />
        <button onClick={ () => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={ () => setEdit(true) }>Edit</button>
      }
      <button onClick={ () => deleteService(id) }>Delete</button>
    </>
  )
}

export default Service;