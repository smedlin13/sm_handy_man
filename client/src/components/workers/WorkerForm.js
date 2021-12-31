import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker ] = useState({ name: '', title: '', number: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ name: '', title: '', number: '' })

  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            name='name'
            value={worker.name}
            onChange={(e) => setWorker({ ...worker, name: e.target.value})}
            required
            placeholder='name'
          />
          <label>Title:</label>
          <input
            name='title'
            value={worker.title}
            onChange={(e) => setWorker({ ...worker, title: e.target.value})}
            required
            placeholder='title'
          />
          <label>Name:</label>
          <input
            name='number'
            value={worker.number}
            onChange={(e) => setWorker({ ...worker, number: e.target.value})}
            required
            placeholder='number'
          />
          <button type='submit'>Submit</button>
        </form>

      </>
    )
}

export default WorkerForm;