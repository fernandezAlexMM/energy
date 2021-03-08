import React from "react";

export const SectionImg = (props) => {
    return (
        <div class={`section__img ${props.imgPosition ? "" : "imgRight" }`}>
                <img src={props.img} alt="Nuevas etiquetas de eficiencia energetica"/>
            <div class="section__text">
                <h2>
                    {props.title}
                </h2>
                <p>
                   {props.content}
                </p>
            </div>
        </div>
    );
};