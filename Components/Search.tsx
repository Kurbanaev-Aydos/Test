import React from 'react';

const Search = () => {
  return (
    <>
      <input
        className="w-full rounded-l-[26px] pl-5"
        type="text"
        placeholder="Поиск по названию товара"
      />
      <button className="w-[100px] rounded-r-[26px] flex items-center justify-center bg-[#00C48C] ">
        <img src="/search.svg" alt="search" />
      </button>
    </>
  );
};

export default Search;
