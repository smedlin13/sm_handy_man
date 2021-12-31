import ServiceShow from './ServiceShow';

const ServiceList = ({ services, workerId, deleteService, updateService }) => {
  return (
    <>
      { services.map( s =>
        <>
          <ServiceShow
          {...s}>
            workerId={workerId}
            deleteService={deleteService}
            updateService={updateService}  

          </ServiceShow>
        </>
          
        )}
    </>
  )
}

export default ServiceList;