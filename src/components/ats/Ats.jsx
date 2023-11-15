import style from './Ats.module.css';
import { useState } from 'react';
// import { Numbers } from '../numbers/Numbers';

export function Ats(){
    const [first, setFirst] = useState(0);

    function seven(){
        setFirst(7);
    }
    function eight(){
        setFirst(8);
    }
    function nine(){
        setFirst(9);
    }
    function four(){
        setFirst(4);
    }
    function five(){
        setFirst(5);
    }
    function six(){
        setFirst(6);
    }
    function one(){
        setFirst(1);
    }
    function two(){
        setFirst(2);
    }
    function three(){
        setFirst(3);
    }
    function zero(){
        setFirst(0);
    }
    const [symbol, setSymbol] = useState('+');

    function plus(){
        setSymbol('+')
    }
    function minus(){
        setSymbol('-')
    }
    function div(){
        setSymbol('/')
    }
    function multi(){
        setSymbol('*')
    }

    const [second, setSecond] = useState(0);
    function secondSeven(){
        setSecond(7);
    }
    function secondEight(){
        setSecond(8);
    }
    function secondNine(){
        setSecond(9);
    }
    function secondFour(){
        setSecond(4);
    }
    function secondFive(){
        setSecond(5);
    }
    function secondSix(){
        setSecond(6);
    }
    function secondOne(){
        setSecond(1);
    }
    function secondTwo(){
        setSecond(2);
    }
    function secondThree(){
        setSecond(3);
    }
    function secondZero(){
        setSecond(0);
    };

    const [total, setTotal] = useState(0);



    return(
        <div>
            <div className={style.full}>
                <div className={style.numbersList}>
                    <button onClick={seven} className={style.number}>7</button>
                    <button onClick={eight} className={style.number}>8</button>
                    <button onClick={nine} className={style.number}>9</button>
                    <button onClick={four} className={style.number}>4</button>
                    <button onClick={five} className={style.number}>5</button>
                    <button onClick={six} className={style.number}>6</button>
                    <button onClick={one} className={style.number}>1</button>
                    <button onClick={two} className={style.number}>2</button>
                    <button onClick={three} className={style.number}>3</button>
                    <button onClick={zero} className={style.numberZero}>0</button>
                </div>
                <div className={style.symbol}>
                    <button onClick={plus} className={style.btn}>+</button>
                    <button onClick={minus} className={style.btn}>-</button>
                    <button onClick={multi} className={style.btn}>*</button>
                    <button onClick={div} className={style.btn}>/</button>
                </div>
                <div className={style.numbersList}>
                    <button onClick={secondSeven} className={style.number}>7</button>
                    <button onClick={secondEight} className={style.number}>8</button>
                    <button onClick={secondNine} className={style.number}>9</button>
                    <button onClick={secondFour} className={style.number}>4</button>
                    <button onClick={secondFive} className={style.number}>5</button>
                    <button onClick={secondSix} className={style.number}>6</button>
                    <button onClick={secondOne} className={style.number}>1</button>
                    <button onClick={secondTwo} className={style.number}>2</button>
                    <button onClick={secondThree} className={style.number}>3</button>
                    <button onClick={secondZero} className={style.number}>0</button>
                </div>
            </div>
            <div className={style.ats}>
                <p>{first}{symbol}{second}</p>
                <h3 className={style.answer}>Atsakymas:  {total} </h3>
            </div>
        </div>
    );
}