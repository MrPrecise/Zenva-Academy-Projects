import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld({name}) {
  return (
      <h1>Hello, {name}</h1>
  );
}


// function Hello(){
//   var isHello = false;
//   return(
//    <span>
//     {isHello && "Hello"}
//     {!isHello && "Goodbye"}
//     </span>
//   );
// }

// function World(){
//   return(
//     <span>World</span>
//   )
// }


// function P() {
//     const fName = 'Eirik';
//     const lName = 'T';
//     return (
//         <Person age = {26}
//             name = {fName + " " + lName}/>
//     );
// }

// const Person = props => <h1>{props.name+' '+props.age}</h1>

ReactDom.render(<HelloWorld name="Eirik"/>,document.querySelector('#root'));