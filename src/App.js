import "./App.css";
import { React } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Counter from "./learn-useState/Counter";
import Effect from "./learn-useEffect/Index";
import Context from "./learn-useContext/Index";
import Reducer from "./learn-useReducer/Index";
import Memo from "./learn-useMemo/Index";

function App() {
    return ( <
        Router >
        <
        div className = "App-header" >
        <
        nav className = "NavBar" >
        <
        ul className = "ul" >
        <
        li className = "li" >
        <
        Link to = "/" > Use State < /Link> < /
        li > <
        li className = "li" >
        <
        Link to = "/effect" > Use Effect < /Link> < /
        li > <
        li className = "li" >
        <
        Link to = "/context" > Use Context < /Link> < /
        li > <
        li className = "li" >
        <
        Link to = "/reducer" > Use Reducer < /Link> < /
        li > <
        li className = "li" >
        <
        Link to = "/memo" > Use Memo < /Link> < /
        li > <
        /ul> < /
        nav > <
        Switch >
        <
        Route path = "/"
        exact component = { Counter }
        /> <
        Route path = "/effect"
        exact component = { Effect }
        /> <
        Route path = "/context"
        exact component = { Context }
        /> <
        Route path = "/reducer"
        exact component = { Reducer }
        /> <
        Route path = "/memo"
        exact component = { Memo }
        /> < /
        Switch > <
        /div> < /
        Router >
    );
}

export default App;