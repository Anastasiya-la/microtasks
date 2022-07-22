import React, {MouseEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {ButtonUseState} from "./components/ButtonUseState";
import {Money} from "./components/Money";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";

export type FilterType = 'all' | 'rubles' | 'dollars';


function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars ', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars ', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS ', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if (filter === 'rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS ')
    }
    if (filter === 'dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars ')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
        console.log(nameButton);
    }


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

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage = [{message: title}, ...message];
        setMessage(newMessage);
    }
    let [title, setTitle] = useState('');

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
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
            <hr/>
            {/*<Money money={money} currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>*/}
            <Money money={money} currentMoney={currentMoney}/>
            <div style={{marginLeft: '35px'}}>
                <Button name={'all'} callBack={() => onClickFilterHandler('all')}/>
                <Button name={'rubles'} callBack={() => onClickFilterHandler('rubles')}/>
                <Button name={'dollars'} callBack={() => onClickFilterHandler('dollars')}/>
            </div>
            <hr/>
            {/*   <FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((m, index) => <div key={index}>{m.message}</div>)}
        </div>
    );
}

export default App;
