import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comments from '../comments/Comments';



const ServiceShow = ({ id, s_type, min, desc, deleteService, updateService, workerId, serviceId }) => {
  const [service, setService] = useState({ s_type: '', desc: '', min: ''})
  const [editing, setEdit] = useState(false)
  let params = useParams()

  useEffect( () => {
      axios.get(`/api/workers/${params.workerId}/services/${params.servicesId}`)
        .then( res => {
          setService(res.data)
        })
        .catch( err => console.log(err))
    }, [])

    return(
        <>
        <h2>{s_type}</h2>
        <h4>Minutes to complete: {min}</h4>
        <p>{desc}</p>
        <button onClick={() => setEdit(false)}>Cancel</button>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteService(id)}>Delete</button>
        <Comments serviceId={serviceId} />
      </>
    )
  }
export default ServiceShow;