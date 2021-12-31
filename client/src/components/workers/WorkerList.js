import { Link } from 'react-router-dom';

const WorkerList = ({ workers }) => {
  return (
    <>
      { workers.map( w =>
        <>
        <h1><Link to={`/workers/${w.id}`} key={w.id}>{w.name}</Link> </h1>
        <br />
        </>
        )}
    </>
  )
}

export default WorkerList;