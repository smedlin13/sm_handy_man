import { useState, useEffect } from 'react';

const ServiceForm = ({ addService }) => {
  const [service, setService] = useState({ title: '', min: 30, desc: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    addService(service)
    setService({ title: '', min: 30, desc: ''})

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name='title'
          value={service.title}
          onChange={(e) => setService({ ...service, title: e.target.value })}
          required
        />
        <label>Length of Service:</label>
        <input
          name='min'
          value={service.min}
          onChange={(e) => setService({ ...service, min: e.target.value })}
          required
        />
        <label>Description of Service:</label>
        <textarea
          name='description'
          value={service.desc}
          onChange={(e) => setService({ ...service, desc: e.target.value })}
          required>
          </textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;