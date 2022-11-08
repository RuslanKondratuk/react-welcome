import React from "react";


// function OurComponent (props) {
//     return (
//         <article>
//             <h1>React day is Today</h1>
//             <p>Paragraph</p>
//             <img src = "https://img3.akspic.ru/previews/9/6/1/9/6/169169/169169-ty_zasluzhivaesh_vsyacheskogo_schastya-schaste-strah-voda-polety_na_vozdushnom_share-500x.jpg" />
//         </article>
//     )
//   }


class OurComponent extends React.Component{
    render () {
        return (
            <article>
                <h1>React day is Today</h1>
                <p>Paragraph</p>
                <img src = "https://img3.akspic.ru/previews/9/6/1/9/6/169169/169169-ty_zasluzhivaesh_vsyacheskogo_schastya-schaste-strah-voda-polety_na_vozdushnom_share-500x.jpg" />
            </article>
        )
    }
}

  export default OurComponent;