import React from "react";

export const getServerSideProps = ({ res }) => {
  res.setHeader("Surrogate-Key", "route");
  res.setHeader(
    "Surrogate-Control",
    "max-age=60, stale-while-revalidate=60, stale-if-error=300"
  );
  res.setHeader("Cache-Control", "must-revalidate");
  res.setHeader("Last-Modified", new Date().toUTCString());

  return {
    props: {},
  };
};

const Headers = () => {
  return <div>Headers test</div>;
};

export default Headers;
