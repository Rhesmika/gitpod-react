import React from "react";

// function FunctionalGreeting(){
//     return <h1>Hello from react</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>{props.greeting} {props.name}. You are {props.age}</h1>;
}

export default FunctionalGreetingWithProps;