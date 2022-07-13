import React, {MouseEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {ButtonUseState} from "./components/ButtonUseState";

function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('Iam stupid button')
    }

    /* let a = 1;*/
    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }
    const onClickHandler2 = () => {
        setA(a = 0);
        console.log(a);
    }

    return (
        <div>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            <hr/>
            <NewComponent students={students}/>
            <hr/>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Iam Vasya', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Iam Ivan')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
            <hr/>
            <h1>{a}</h1>
            <ButtonUseState name={'number'} callBack={onClickHandler}/>
            <ButtonUseState name={0} callBack={onClickHandler2}/>
        </div>
    );
}

export default App;
