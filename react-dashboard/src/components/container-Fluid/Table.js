import React from 'react'

function Table (){
    return (
        <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
                <th>Colors</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
                <th>Colors</th>
                <th>Stock</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
                <td>
                  <ul>
                    <li>Category 01</li>
                    <li>Category 02</li>
                    <li>Category 03</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><span className="text-danger">Red</span></li>
                    <li><span className="text-primary">Blue</span></li>
                    <li><span className="text-success">Green</span></li>
                  </ul>
                </td>
                <td>245</td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>Fullstack developer</td>
                <td>$320,800</td>
                <td>
                  <ul>
                    <li>Category 01</li>
                    <li>Category 02</li>
                    <li>Category 03</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><span className="text-danger">Red</span></li>
                    <li><span className="text-primary">Blue</span></li>
                    <li><span className="text-success">Green</span></li>
                  </ul>
                </td>
                <td>245</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Table