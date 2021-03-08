import React from "react";

export const SectionVideo = ({title, content, imgPosition}) => {
    return (
            <div  class={`section__img ${imgPosition ? "" : "imgRight" }`}>
               <iframe width="600" height="315" src="https://www.youtube.com/embed/-XQckduO-fA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="section__text">
                <h2>
                    {title}
                </h2>
                <p>
                   {content}
                </p>
            </div>
        </div>
    );
};