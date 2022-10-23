import React from "react";

export const Apply = props => {
  console.log("APPLYY");
  console.log(props.data.frontmatter);

  const {
    blocked,
    executionTime,
    headline,
    importance,
    order,
    title,
  } = props.data.frontmatter;
  const html = props.data.html;
  return (
    <div id='apply'>
      <h5>blocked: {blocked}</h5>
      <h5>executionTime: {executionTime}</h5>
      <h5>headline: {headline}</h5>
      <h5>importance: {importance}</h5>
      <h5>order: {order}</h5>
      <h5>title: {title}</h5>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};
