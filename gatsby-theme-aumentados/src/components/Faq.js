import React from "react";

export const Faq = props => {
  console.log("FAQQQQ");
  console.log(props.data.frontmatter);
  // const html = props.data.html;

  return (
    <div id='faq'>
      <h1>Faq</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.html }}></div>
    </div>
  );
};
