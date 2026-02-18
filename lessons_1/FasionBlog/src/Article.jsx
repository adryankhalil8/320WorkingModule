import React from "react";

function getImageUrl(imageName) {
    return new URL(`${imageName}`, import.meta.url).href;
}

export default function Article({ date, title, image, alt, content }) {
  return (
    <article>
      <p>{date}</p>
      <h2>{title}</h2>

      <img src={getImageUrl(image)} alt={alt} />

      <p>{content}</p>

      <a href="#" className="continue">
        Continues ...
      </a>
    </article>
  );
}
