/* *******************************************************
            Query selector declarations
**********************************************************  */
const NOT = document.querySelector("#not");
const AND = document.querySelector("#and");
const FLIP_FLOP = document.querySelector("#flipFlop");
const OR = document.querySelector("#or");
const XOR = document.querySelector("#xor");
const ON = document.querySelector("#on");
const OFF = document.querySelector("#off");
/* ********************************************************* */

/* *******************************************************
             Event listeners
**********************************************************  */
NOT.addEventListener("click", not);
AND.addEventListener("click", and);
FLIP_FLOP.addEventListener("click", flipFlop);
OR.addEventListener("click", or);
XOR.addEventListener("click", xor)
/* ****************************************************** */

/* *********************************************************
                  Functions
**********************************************************  */

/* ******************************************************* */
//                  not
/* ******************************************************* */
function not(){
    let name = `NOT Gate`;
    document.getElementById("tt").innerHTML = name;
    document.getElementById("gate").src="Not gate.png";

    function on(){
        document.getElementById("gate").src="notOn.png";
    }
    ON.addEventListener("click", on);

    function off(){
        document.getElementById("gate").src="notOff.png";
    }
    OFF.addEventListener("click", off);
};
/* ******************************************************* */
//                 and
/* ******************************************************* */
function and(){
    let name = `AND Gate`;
    document.getElementById("tt").innerHTML = name;
    document.getElementById("gate").src="And gate (1).png";

    function on(){
        document.getElementById("gate").src="andOn.png";
    }
    ON.addEventListener("click", on);

    function off(){
        document.getElementById("gate").src="andOff.png";
    }
    OFF.addEventListener("click", off);
};
/* ************************************** */
//                  or
/* ******************************************************* */
function or(){
    let name = `OR Gate`;
    document.getElementById("tt").innerHTML = name;
    document.getElementById("gate").src="Or gate.png";

    function on(){
        document.getElementById("gate").src="orOn.png";
    }
    ON.addEventListener("click", on);

    function off(){
        document.getElementById("gate").src="orOff.png";
    }
    OFF.addEventListener("click", off);
};
/* ************************************** */
//                flip flop
/* ******************************************************* */
function flipFlop(){
    let name = `Flip Flop`;
    document.getElementById("tt").innerHTML = name;
    document.getElementById("gate").src="flip flop gate.png";

    function on(){
        document.getElementById("gate").src="Onflipflop.png";
    }
    ON.addEventListener("click", on);

    function off(){
        document.getElementById("gate").src="Offflipflop.png";
    }
    OFF.addEventListener("click", off);
};
/* ************************************** */
//                   xor
/* ******************************************************* */
function xor(){
    let name = `XOR Gate`;
    document.getElementById("tt").innerHTML = name;
    document.getElementById("gate").src="Xor gate.png";

    function on(){
        document.getElementById("gate").src="xorOn.png";
    }
    ON.addEventListener("click", on);

    function off(){
        document.getElementById("gate").src="xorOff.png";
    }
    OFF.addEventListener("click", off);
};
/* ************************************** */
