//imports
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import { isValid } from "date-fns";

//capitalize first letter
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//react select options
export const options = [
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "urgent", label: "Urgent" },
  { value: "cancelled", label: "Cancelled" },
];

//form validation function
export const formValidation = (formData) => {
  // Update validation logic to check all required fields
  return (
    formData.desc.trim() !== "" &&
    formData.status &&
    formData.task.trim() !== "" &&
    formData.name.trim() !== ""
  );
};

//react select custom styles
export const customStyles = {
  container: (provided, state) => ({
    ...provided,
    height: "3rem",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    outline: "none",
    boxShadow: "none",
    fontSize: "0.9rem",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "0.9rem",
  }),
  input: (provided, state) => ({
    ...provided,
    fontSize: "0.9rem",
  }),
  menu: (provided, state) => ({
    ...provided,
    fontSize: "0.9rem",
  }),
};

//fucntion that returns color
export const returnColor = (status) => {
  if (status === "pending") {
    return "#f0ad4e";
  } else if (status === "completed") {
    return "#28a745";
  } else if (status === "cancelled") {
    return "#dc3545";
  } else if (status === "urgent") {
    return "#007bff";
  }
  return "black";
};

//converts status to option valid with react-select library
export const convertStatusToOption = (status) => {
  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);
  return {
    value: status,
    label: formattedStatus,
  };
};

//formates date
export const formatDate = (timestamp) => {
  if (isValid(timestamp)) {
    return format(timestamp, "EEE, dd MMM yyyy");
  } else {
    return;
  }
};

//gets timeAgo from particular date
export const timeAgo = (timestamp) => {
  if (isValid(timestamp)) {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  } else {
    return;
  }
};
