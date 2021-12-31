import { Link } from 'react-router-dom';

const WorkerList = ({ workers }) => {
  return (
    <>
      { workers.map( w =>
        <>
        <Link to={`/workers/${w.id}`} key={w.id}>{w.name} {w.title}</Link>
        <br />
        </>
        )}
    </>
  )
}

export default WorkerList;