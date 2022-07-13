import React from "react";

type ButtonUseStateType = {
    name: string | number
    callBack: () => void
}

export const ButtonUseState = (props: ButtonUseStateType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (<>

            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}