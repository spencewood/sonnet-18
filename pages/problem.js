import React from "react";

export default function Problem() {
  return (
    <>
      <h1>Problem!</h1>
    </>
  );
}

export const getServerSideProps = () => {
  throw new Error("error");
};
