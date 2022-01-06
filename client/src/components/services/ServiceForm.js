import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, updateService, setEdit, id, s_type, min, desc }) => {
  const [service, setService] = useState({ s_type: '', min: '', desc: ''})

  useEffect( () => {
    if (id) {
      setService({ s_type, min, desc })
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
    setService({ s_type: '', min: '', desc: '' })

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Type of Service:</label>
        <input
          name='type'
          value={service.s_type}
          onChange={(e) => setService({ ...service, s_type: e.target.value })}
          required
        />
        <label>Length of Service:</label>
        <input
          name='min'
          value={service.min}
          onChange={(e) => setService({ ...service, min: e.target.value })}
          required
          type="number"
        />
        <label>Description of Service:</label>
        <textarea
          name='description'
          value={service.desc}
          onChange={(e) => setService({ ...service, desc: e.target.value })}
          required>
          </textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;