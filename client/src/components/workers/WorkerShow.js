import { useParams } from 'react-router-dom' ;
import { useState, useEffect } from 'react'; 
import axios from 'axios';
// import WorkerForm from './WorkerForm';
import Services from '../services/Services';


const WorkerShow = ({id, name, title, number, deleteWorker}) => {
  const [editing, setEdit] = useState(false)
  
  
  const [worker, setWorker] = useState({name: '', title: '', number: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/workers/${params.workerId}`)
      .then( res => {
        setWorker(res.data)
      })
      .catch( err => console.log(err))
  }, [])
  return (
    <>
      <h1>{worker.name}</h1>
      <h2>{worker.title}</h2>
      <h2>{worker.number}</h2>
      <p>ID: {params.workerId}</p>
      {/* <button onClick={ () => setEdit(true) }>Edit</button>
      <button onClick={() => deleteWorker(id)}>Delete</button> */}
      <Services workerId={params.workerId}/>
    </>

  )
} 

export default WorkerShow;