import React, { useReducer } from "react";
import "./Index.css";
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Index() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return ( <
        div className = "Main" >
        <
        p > Kelompok 21 < /p> <
        div className = "Text" > Count = { count } < /div>{" "} <
        div className = "ViewButton" >
        <
        div className = "ViewButton2" >
        <
        button className = "Button"
        onClick = {
            () => dispatch("increment") } >
        Increment { " " } <
        /button>{" "} <
        /div>{" "} <
        div className = "ViewButton1" >
        <
        button className = "Button"
        onClick = {
            () => dispatch("decrement") } >
        Decrement { " " } <
        /button>{" "} <
        /div>{" "} <
        div className = "ViewButton1" >
        <
        button className = "Button"
        onClick = {
            () => dispatch("reset") } >
        Reset { " " } <
        /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Index;