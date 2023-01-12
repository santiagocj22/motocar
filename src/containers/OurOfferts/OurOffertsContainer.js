import React from "react";
import { Title, Services } from "../../components";
import { titleServices } from "../../constants";

function OurOffertsContainer() {
  return (
    <>
      <Title title={titleServices.title} subtitle={titleServices.subtitle} />
      <Services />
    </>
  );
}

export default OurOffertsContainer;
