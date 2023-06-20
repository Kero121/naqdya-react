import React from 'react'


export default function Branches() {
  
  return (
    <div className='aside-space w-100'>
      <div>
        <div className="container ">
          <div className="row ">

            <div className="col-lg-12  ">
              <div className='row gx-2 py-5 px-3 d-flex align-items-center '  >
                <div className="col-lg-5 bg-white border-1">
                  <input placeholder='search by name' className='form-control w-100 py-3' type="text" />
                </div>


                <div className="col-lg-5">
                  <input placeholder='search by mobile' className='form-control w-100 py-3' type="text" />
                </div>
                <div className="col-lg-2">

                  <button className='btn btn-dark p-2 d-flex align-items-center fs-6'>
                    <i className='fa fa-user p-2'></i> Add branch</button>
                </div>


              </div>
              <div className='bdr'>
                <table className="table table-hover table-bordered table-striped py-5   ">

                  <thead className='table-dark rounded  '>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>

                  <tbody className=''>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>

                  </tbody>
                </table></div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
