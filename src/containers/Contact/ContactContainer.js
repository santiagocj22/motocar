import React from "react";
import { Title, Contacts } from "../../components";
import { contactTitle } from "../../constants";

function ContactContainer() {
  return (
    <>
      <Title title={contactTitle.title} />
      <Contacts />
    </>
  );
}

export default ContactContainer;
