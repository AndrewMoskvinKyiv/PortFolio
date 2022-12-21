import React, {ReactElement} from "react";
import style from './top.module.css';

type TopPropsTypes = {
    offSetY:number,
    topTitle:string,
    topText:ReactElement<any,any>,
}

export const Top = React.memo((props:TopPropsTypes) => {
    return (
        <div className={style.top__inner}

             style={{transform:`translateY(${-props.offSetY * 0.1}px)`}}>
            <div id='about'>
            {/*<div className={style.top__avatarWrapper}>*/}
            {/*<div className={style.top__avatar}>*/}
            {/*    <img src={avatar} alt='avatar'/>*/}
            {/*</div>*/}
            {/*</div>*/}

            <div className={style.top__name}>
                <h1>{props.topTitle}</h1>
            </div>

            <div className={style.top__text}>
                <html>
                    {props.topText}
                </html>
            </div>
</div>
        </div>
    )

})
