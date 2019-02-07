import React from 'react';
import marked from 'marked';

// Allow line breaks.
marked.setOptions({
  breaks: true
});

// Insert target="_blank" into a tags.
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href} title="${title}">${text}</a>`;
};

const Preview = props => {
  return <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderer }) }} />;
};

export default Preview;
