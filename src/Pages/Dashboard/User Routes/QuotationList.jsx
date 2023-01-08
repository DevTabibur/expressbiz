import Swal from "sweetalert2";
import useQuotation from "../../../Hooks/useQuotation";
import ShowQuotation from "./ShowQuotation";

const QuotationList = () => {
  const [quotations] = useQuotation();
  const removeQuotation = (id) => {
    const confirmation = window.confirm("Are you want to delete?");
    if (confirmation) {
      const url = `https://expressbiz-server-re-deploy.onrender.com/quote/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data delted", data);
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted",
              icon: "success",
            });
          }
        });
    }
  };
  return (
    <>
      <h1 className="text-accent text-5xl font-bold ">
        Your Quotation History {quotations.length}
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-4">
          {quotations.length === 0 ? (
            ""
          ) : (
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
                  {quotations.map((quotation, idx) => (
                    <ShowQuotation
                      key={idx}
                      quotation={quotation}
                      removeQuotation={removeQuotation}
                    />
                  ))}
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
          )}
        </div>
      </div>
    </>
  );
};

export default QuotationList;
