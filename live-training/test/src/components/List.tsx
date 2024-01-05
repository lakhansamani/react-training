import React from 'react';

interface ListProps {
  items: string[];
  heading: string;
  loading?: boolean;
  addToList?: React.Dispatch<React.SetStateAction<string[]>>;
}

export const List = ({ items, heading, loading, addToList }: ListProps) => {
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  const handleClickEvent = () => {
    addToList?.([...items, `Item ${items.length + 1}`]);
  };
  return (
    <>
      <h1>{`Rendering ${heading}`}</h1>
      <button
        // onClick={() => {
        //   if (addToList) {
        //     addToList(`Item ${items.length + 1}`);
        //   }
        // }}
        onClick={handleClickEvent}
      >
        Add {heading}
      </button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};
