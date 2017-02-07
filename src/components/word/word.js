import React, {PropTypes} from 'react';

export const Word = (props) => {
  
  let {name} = props;
  
  return (
    
    <li className="word">
      {name}
    </li>
  );
};

Word.propTypes = {
  name: PropTypes.string,
};
