import React, {useState} from "react";
import style from "./my_works.module.css";
import {Example} from "./example/example";
import todolist from './../../images/todolist.png';
import socialNetwork from './../../images/sNetwork.png';
import cards from './../../images/cards.png';
import carSharing from './../../images/carSharing.png';
import ansys from './../../images/ansys.png';
import SF from './../../images/job3.jpg';
import cabinet from './../../images/job4.jpg'


type MyWorksPropsTypes = {
    displayWidth:number;
}




export const My_works = React.memo((props:MyWorksPropsTypes) => {

    const {displayWidth} = props;

    return (
        <div className={style.myWorksInner}>
            <div className={style.leftPannel}>
            <Example
                    height={displayWidth < 820?'350':"350"}
                    picture={ansys}
                    title={'Ansys landing page mark up.'}
                    link={'https://moskvinandrew.github.io/lawyer-consulting-landing-page/'}

                />
            <Example
                height={displayWidth < 820?'350':'650'}
                picture={socialNetwork}
                title={'Social Network'}
                link={'http://MoskvinAndrew.github.io/My_1First_.SocialNetwork_styding_progect/'}
            />

        </div>
            <div className={style.centralPannel}>
            <Example
                height={displayWidth < 820?'350':'650'}
                picture={SF}
                title={'Modern Factoring corp. site'}
                link={'https://sfactor.com.ua/'}
            />
                <Example
                    height={displayWidth < 820?'350':'350'}
                    picture={carSharing}
                    title={'Car Sharing landing page .'}
                    link={'https://moskvinandrew.github.io/car_sharing_landing/'}
                />
            </div>
            <div className={style.rightPannel}>
                <Example
                    height={displayWidth < 820?'350':'500'}
                    picture={todolist}
                    title={'todolist'}
                    link={'https://moskvinandrew.github.io/To_Do_List_Moskvin/'}
                />
                <Example
                    height={displayWidth < 820?'350':'500'}
                    picture={cards}
                    title={'Educational Cards Project'}
                    link={'https://moskvinandrew.github.io/ReactReduxJSCardsProgect/#/login/'}
                />
            </div>
            <div className={style.leftPannel}>
                <Example
                    height={displayWidth < 820?'350':'500'}
                    picture={cabinet}
                    title={'Client\'s personal account SPA'}
                    link={'https://auth.slvr.one/'}
                />

            </div>




        </div>)
})
