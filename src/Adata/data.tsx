import React from "react";


export type allDataType = typeof allData;
export const allData = {
    top:{
        topTitle:"Moskvin Andrew",
        topDescriptionText:
            <p>Front-end developer. <br/>
            I  am developer who loves his job, I like to learn something new and get new experience.
            I always try to be attentive to details and strive to do quality work.
            </p>
        // " Now I’m searching for career and professional growth through deepening knowledge in front-end development." +
        // " I know JavaScript, Typescript, HTML, CSS/SASS, React, Redux, Rest API," +
        // " Unit tests, Storybook, npm/yarn, Material UI. In my free time I solve tasks on codewars.com." +
        // " I am able to work with large amount of information. Also, I can to work hard with tasks, herewith I be persistent." +
        // " I like good teams with smart people, new challenges, and opportunities."

    },
    services:{
        blockName:'services',
        blockText:'The main technologies that I use'
    },
    servicesItem: {

        itemTitle: ['React', 'Redux', 'Typescript', 'Flutter', 'VUE'],
        itemText: ['React Hooks,React pure component,Controlled components,React DOM',

            "Redux,Redux Toolkit,Thunks,Unit testing","Same as Javascript but better",
        "Multiplatform Application Development", "Vue, Vuex, GraphQl"
        ]
    },
    statisticItem:{

        digit:[1067,6,789,12],
        staticText:["Сomponents Written","Projects Complete","Coffee Consumed","Happy clients"],
        order:[1,2,3,4]

    },
    portfolio:{
        blockName:'portfolio',
        blockText:''
    },
}
