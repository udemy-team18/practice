import React from "react";

function Greeting({ name }) {
  return <h3>hello, {name}</h3>;
}

function Practice03() {
  return <Greeting name="ASJ" />;
}

export default Practice03;
