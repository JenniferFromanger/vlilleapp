import React from "react";

export default function StationDetail(props) {
  const { nom } = props;
  return (
    <>
      <p>{nom}</p>
    </>
  );
}
