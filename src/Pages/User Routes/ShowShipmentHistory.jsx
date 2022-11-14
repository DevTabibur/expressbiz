import { Link } from "react-router-dom";

const ShowShipmentHistory = ({ order, idx }) => {
  const { _id } = order;
  return (
    <>
      <tbody>
        <td>{idx + 1}</td>
        <td>SKU</td>
        <td>Name</td>
        <td>Air</td>
        <td>Pending</td>
        <td>
          <Link to={`/dashboard/payment/${_id}`}>Pay </Link>
        </td>
        <td>Delete</td>
      </tbody>
    </>
  );
};

export default ShowShipmentHistory;
