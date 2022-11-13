import React from 'react'

const PaymentHistory = () => {
  return (
    <>
      <h1 className="text-accent text-5xl font-bold font-serif">
        Your Payment History 
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-4">
          
            <div className="overflow-x-auto">
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th className="bg-accent text-white">SL</th>
                    <th className="bg-accent text-white">#SKU</th>
                    <th className="bg-accent text-white">PRODUCT NAME</th>
                    <th className="bg-accent text-white">TYPE</th>
                    <th className="bg-accent text-white">STATUS</th>
                    <th className="bg-accent text-white">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <td>1</td>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="bg-accent text-white">SL</th>
                    <th className="bg-accent text-white">#SKU</th>
                    <th className="bg-accent text-white">PRODUCT NAME</th>
                    <th className="bg-accent text-white">TYPE</th>
                    <th className="bg-accent text-white">STATUS</th>
                    <th className="bg-accent text-white">ACTION</th>
                  </tr>
                </tfoot>
              </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default PaymentHistory