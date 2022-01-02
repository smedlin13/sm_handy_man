import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, type, min, desc, updateService, setEdit }) => {
  const [service, setService] = useState({ type: '', min: '', desc: ''})

  useEffect( () => {
    if (id) {
      setService({ type, min, desc })
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else { 
      addService(service)
    }
    setService({ type: '', min: '', desc: '' })

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Type of Service:</label>
        <input
          name='type'
          value={service.type}
          onChange={(e) => setService({ ...service, type: e.target.value })}
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