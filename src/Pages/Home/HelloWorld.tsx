import React , { FunctionComponent , Fragment } from 'react';




type Hello = JSX.Element;

const HelloWorld : FunctionComponent<Hello> = () => {
    return(
        <Fragment>
            <h1>Hello World</h1>
        </Fragment>
    )
}



export default HelloWorld;