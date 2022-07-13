import {FilterType} from "../App";

type MoneyPropsType = {
    money: Array<MoneyType>
    currentMoney: MoneyType[]
    // onClickFilterHandler: (nameButton: FilterType) => void
}
type MoneyType = {
    banknots: string
    value: number
    number: string
}


export const Money = (props: MoneyPropsType) => {


    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            {/*    <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollars')}>dollars</button>
            </div>*/}
        </>
    )
}