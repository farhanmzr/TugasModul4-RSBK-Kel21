import React, { useState, useMemo } from "react";
import "./Index.css";

function Index() {
    const [counterOne, setCounterOne] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 1000) i++;
        return counterOne % 2 === 0;
    }, [counterOne]);

    return ( <
        div className = "Main" >
        <
        p > Kelompok 21 < /p> <
        div className = "ViewButton2" >
        <
        button className = "Button"
        onClick = { incrementOne } >
        Angka { counterOne } { " " } <
        /button>{" "} <
        span className = "Text" > { isEven ? "Genap" : "Ganjil" } < /span>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Index;