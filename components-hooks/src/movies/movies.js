import React from "react";

export default function Movies(props) {

    const myList = props.data.map( (element) => {
        return ( <h2> { element } </h2> )
    } );

    const transformedChildren = props.children.map ( (element) => {
        return ( <ul><li> { element } </li></ul>)
    } );

    return ( <> { transformedChildren } { myList }  </> );
}