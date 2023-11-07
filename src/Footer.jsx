import React, { useContext } from 'react';
import { ContextApp } from './contextapi/ContextApp';

const Footer = () => {
  const{page,totalpage,pagechange} = useContext(ContextApp);
  return (
    <div>
      <hr />
      {
      //  we useed short circuite evaluation for giving the condion 
        page>1 &&(  // it show if the page is biger the one the rander the button
        <button onClick={()=>{pagechange(page-1)}}>previous</button>
       )
      }
      {
        page<totalpage &&( // it show if the page is smaller then totalpage then render the button
          <button onClick={()=>{pagechange(page+1)}}>next</button>
        )
      }

      <div>
        <p>page <span>{totalpage}</span> / <span>{page}</span></p>
      </div>

    </div>
  );
}

export default Footer;
