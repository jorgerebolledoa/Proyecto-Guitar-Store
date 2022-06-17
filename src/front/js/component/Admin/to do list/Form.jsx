import React from 'react'

const Form = ({ error, value, submit, onChange }) => {
  return (
    <form  onSubmit={submit}>
      <div className='form-group row align-items-center'>
        <div className='col-9 pr-0'>
          <input
            type='text'
            className='form- bg-dark text-white'
            placeholder='Que hacer?'
            required
            value={value}
            onChange={onChange}
          />
          {error && <small className='form-text text-danger'>{error}</small>}
        </div>
        <div className='col-3 '>
          <button type='submit' className='btn btn-outline-warning '>
            Agrega una tarea
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
