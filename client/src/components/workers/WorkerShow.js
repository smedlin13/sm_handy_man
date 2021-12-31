import { useParams } from 'react-router-dom' ;
import { useState, useEffect } from 'react'; 
import axios from 'axios';
// import WorkerForm from './WorkerForm';
import Services from '../services/Services';


const WorkerShow = ({id, name, title}) => {
  const [worker, setWorker] = useState({name: '', title: ''})
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
      <p>ID: {params.workerId}</p>
      <button>Edit</button>
      <button>Delete</button>
      <Services blogId={params.workerId}/>
    </>

  )
} 

export default WorkerShow;