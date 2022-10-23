import React from "react";

export const Homework = props => {
  console.log("HOMEHOWR");
  console.log(props.data.frontmatter);
  const {
    title,
    category,
    assignTo,
    order,
    importance,
    progress,
  } = props.data.frontmatter;
  return (
    <div id='homework'>
      <h1>Homework</h1>
      <p>{title}</p>
      <p>{category}</p>
      <p>{assignTo}</p>
      <p>{order}</p>
      <p>{importance}</p>
      <p>{progress}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.html }}></div>
    </div>
  );
};
