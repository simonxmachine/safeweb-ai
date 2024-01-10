import React from "react";

type Props = {
  name: string;
};

function Greeting({ name }: Props) {
  return <p> Hello there, {name}</p>;
}

export { Greeting };
