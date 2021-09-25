import React , { FunctionComponent , Fragment , useState , useEffect } from 'react';
//import { HomeThunks , getHomeHelloWorld , getHomeHelloWorldStatus } from '../../Redux/Feactures/Home/HomeSlice';
import { useSelector, useDispatch, batch } from "react-redux";
import { useForm, useModal, useShallowEqualSelector } from "../../Hooks/";




type Hello = JSX.Element;

const HelloWorld : FunctionComponent<Hello> = () => {
    return(
        <Fragment>
            <h1>Hello World</h1>           
        </Fragment>
    )
}



export default HelloWorld;