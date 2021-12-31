import { useState, useEffect } from 'react'
import axios from 'axios';
import WorkerForm from './WorkerForm';
import WorkerList from './WorkerList';

const Worker = ({}) => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => {
        setWorkers(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
    .then( res => {
      setWorkers([ ...workers, res.data])
    })
    .catch( err => console.log(err))
    }

  return (
    <>
      <h1>Workers Page</h1>
      <WorkerForm addWorker={addWorker} />
      <WorkerList workers={workers} />

    </>
  )
}

export default Worker;