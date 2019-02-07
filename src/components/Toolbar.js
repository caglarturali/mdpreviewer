import React from 'react';

const Toolbar = props => {
  return (
    <div className={['toolbar', props.customClass].join(' ')}>
      <span className="toolbar__title">{props.title}</span>
    </div>
  );
};

export default Toolbar;
