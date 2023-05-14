import React from 'react';
import { Paginationdesign,Pageitem,Pagelink} from "./materialuistyle"


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
 
<nav>
      <Paginationdesign    pageNumbers={pageNumbers.map(number => (
          <Pageitem  numbers={<div key={number}   >                
          <a onClick={() => paginate(number)} href='!#'>
          <Pagelink   num={<div>{number}</div>} />
          </a>
          </div> } />
        ))}  />     
    </nav>
  );
};

export default Pagination;
