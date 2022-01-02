import { Link } from 'react-router-dom';
import { useState } from 'react';
import Worker from './Worker';
// import WorkerShow from './WorkerShow';

const WorkerList = ({ workers, deleteWorker, updateWorker  }) => {
  const [ editing, setEdit ] = useState(false)
  return (
    <>
      { workers.map( w =>
        <>
        <Worker {...w} key={w.id} 
        updateWorker={updateWorker} 
        deleteWorker={deleteWorker} 
        />
        <Link to={`/workers/${w.id}`}>Show</Link>
        {/* <Link to={`/workers/${w.id}`} key={w.id}>{w.name} {w.title}</Link>
        <button onClick={() => setEdit(true)}>Edit</button> */}
        {/* <WorkerShow
          {...w}
            deleteWorker={deleteWorker}
            updateWorker={updateWorker}  
          /> */}

        <br />
        </>
        )}
    </>
  )
}

export default WorkerList;