import { Link } from 'react-router-dom';
import ServiceShow from './ServiceShow';


const ServiceList = ({ services, workerId }) => {
  return (
    <>
      { services.map( s =>
        <>
          {/* <h3>{s.s_title}</h3> */}
        <Link 
        to={`/services/${s.id}`} 
        key={s.id}
        >{s.title} 
        </Link>
          {/* <ServiceShow
          {...s}
            workerId={workerId}
            deleteService={deleteService}
            updateService={updateService}  
          /> */}
        </>
          
        )}
    </>
  )
}

export default ServiceList;