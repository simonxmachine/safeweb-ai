import React from "react";

type Props = {
  name: string;
};

function Greeting({ name }: Props) {
  return <p className="text-black bg-white"> Hello there, {name}</p>;
}

export { Greeting };
