import React from "react";

import LoaderSpinner from "react-loader-spinner";

const loaderProps = {
  type: "Audio",
  color: "black",
  heigt: "200",
  width: "200"
};

function Loader() {
  return <LoaderSpinner {...loaderProps} />;
}

export default Loader;
