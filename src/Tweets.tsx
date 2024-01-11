import React from "react";

type Props = {
  onFavorite: () => void;
};

const Tweet = ({ onFavorite }: Props) => {
  return (
    <>
      <div className="mt-20">
        <p>This is a tweet!</p>
        <button onClick={newFunction}> Favorite</button>
      </div>
      <div className="mt-20">
        <p>This is button 2</p>
        <button onClick={() => alert("Button 2 clicked")}> Favorite</button>
      </div>
    </>
  );
};

const Tweets = () => {
  const handleOnFavorite = () => {
    alert("Favorite");
  };
  return <Tweet onFavorite={handleOnFavorite} />;
};

const newFunction = () => {
  alert("yooo what");
};

export { Tweets };
