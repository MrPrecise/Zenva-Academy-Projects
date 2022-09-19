import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld(){
  return(
    <div>
      <Hello/>
    </div>
  );
}

function Hello(){
  var isHello = false;
  return(
   <span>
    {isHello && "Hello"}
    {!isHello && "Goodbye"}
    </span>
  );
}

// function World(){
//   return(
//     <span>World</span>
//   )
// }

ReactDom.render(<HelloWorld/>, document.querySelector('#root'));