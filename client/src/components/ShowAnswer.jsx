import React from 'react';

const ShowAnswer = (props) => (
    <div className="radio answer-desc">
      <label>
        <input type="radio" name="optionsRadios" value="" />
          {props.answer}
      </label>
    </div>
)

export default ShowAnswer;