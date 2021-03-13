import React from "react";

let tt = new Date();
tt = tt.getHours();

var greet = ' ';
const objstyle = {};



if (tt >= 4 && tt < 12) {
    greet = "Good Morning !";
    objstyle.color = "pulple";
}
else if (tt >= 12 && tt <= 5) {
    greet = "Good Afternoon !";
    objstyle.color = "blue";
}
else if (tt > 5 && tt < 8) {
    greet = "Good Evening !";
    objstyle.color = "green";
}
else {
    greet = "Good Night !"
    objstyle.color = "orange";
}

function Time() {
    return (<>

        <span style={objstyle}> {greet} </span>

    </>
    );
}


export default Time;




