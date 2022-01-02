import { useState } from 'react';
import WorkerForm from './WorkerForm';

const Worker = ({id, updateWorker, deleteWorker, name, title, number }) => {
  const [editing, setEdit] = useState(false)
  return (
    <>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <h3>Phone: {number}</h3>
      {
        editing ? 
        <>
        <WorkerForm
        id={id}
        name={name}
        title={title}
        number={number}
        updateWorker={updateWorker}
        setEdit={setEdit}
        />
        <button onClick={ () => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={ () => setEdit(true) }>Edit</button>
      }
      <button onClick={ () => deleteWorker(id) }>Delete</button>
    </>
  )
}

export default Worker;