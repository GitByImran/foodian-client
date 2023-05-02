import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>under construction : {id}</h2>
    </div>
  );
};

export default Contact;
