import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container p-3 p-sm-1'>
      <div className='row justify-content-center'>
        <div className='col-xl-7 col-lg-6 col-md-19'>
          <div className='card bg-dark border-0'>
            <div className='card-body '>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
