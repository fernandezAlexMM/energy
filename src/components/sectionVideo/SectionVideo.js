import React from "react";

export const SectionVideo = (props) => {
    return (
        <div class={`section__img ${props.imgPosition ? "" : "imgRight" }`}>
               <iframe width="600" height="315" src="https://www.youtube.com/embed/zTnYaHn8sNg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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