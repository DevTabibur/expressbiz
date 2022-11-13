import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowQuotation = ({ quotation , removeQuotation}) => {
  const {
    _id,
    name,
    email,
    number,
    destinationFrom,
    destinationTo,
    message,
    shippingType,
    dateTime,
  } = quotation;
  return (
    <>
      <tr>
        <th>{quotation + 1}</th>
        <td className="font-semibold text-accent font-sans text-xl">{name}</td>
        <td>{email}</td>
        <td>{shippingType}</td>
        <td>pending</td>
        <td>
          <button
            onClick={() => removeQuotation(_id)}
            className="btn btn-sm bg-accent hover:shadow text-white transition duration-150 hover:bg-primary hover:text-accent"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ShowQuotation;
