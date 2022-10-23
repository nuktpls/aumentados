import React from "react";

export const Task = props => {
  console.log("TASK");
  console.log(props.data);

  const {
    title,
    category,
    assignTo,
    description,
    order,
    importance,
    progress,
    hasComment,
  } = props.data.frontmatter;

  // const html = props.data.html;
  //   title
  // category
  // assignTo
  // description
  // order
  // importance
  // status
  // progress
  // hasComment

  return (
    <div id='task'>
      <h1>TASK AKI</h1>
      <h1>{title}</h1>
      <h5>{category}</h5>
      <h5>{assignTo}</h5>
      <h5>{description}</h5>
      <h5>{order}</h5>
      <h5>{importance}</h5>
      <h5>{progress}</h5>
      <h5>{hasComment}</h5>
      <div dangerouslySetInnerHTML={{ __html: props.data.html }}></div>
    </div>
  );
};
