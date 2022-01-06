import { Link } from 'react-router-dom';
import ServiceShow from './ServiceShow';
import Service from './Service';


const ServiceList = ({ services, workerId, serviceId, updateService, deleteService }) => {
  return (
    <>
      { services.map( s =>
        <>
          {/* <h3>{s.s_title}</h3> */}
        {/* <Link 
        to={`/services/${s.id}`} 
        key={s.id}
        >{s.title} 
        </Link> */}
          <Service
          {...s}
            workerId={workerId}
            deleteService={deleteService}
            updateService={updateService}  
          />
          <Link to={`/workers/${workerId}/services/${serviceId}`}>Show</Link>
        </>
          
        )}
    </>
  )
}

export default ServiceList;