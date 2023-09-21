import React, {useState, useContext} from "react";
import {PropTypes} from "prop-types";
import {ClockContext} from "../state/single_thread_clock/ClockProvider";

function TextTerminal({options, extraClasses}) {
  const [state, ] = useContext(ClockContext);
  const [clockStep, setClockStep] = useState(state.count);

  const [skip, setSkip] = useState(false);
  const [skipTotal, setSkipTotal] = useState(0);
  const [skipCount, setSkipCount] = useState(0);

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [creating, setCreating] = useState(true);
  const [text, setText] = useState("");

  // uses the global clock in order to not use multiple clocks
  if (clockStep !== state.count) {
    setClockStep(state.count);

    if (skip) {
      if (skipCount >= skipTotal) {
        setSkipCount(0);

        if (options.length === 1) {
          return;
        }

        setSkip(false);
        return;
      }

      setSkipCount(skipCount + 1);
      return;
    }

    let tempText = text;
    if (creating) {
      tempText = tempText + options[index].charAt(charIndex);
      setCharIndex(charIndex + 1);

      if (tempText === options[index]) {
        setCreating(false);
        setSkipTotal(20);
        setSkip(true);
      }
    } else {
      tempText = tempText.substr(0, tempText.length - 1);
      setCharIndex(charIndex - 1);

      if (tempText.length === 0) {
        setCreating(true);
        setIndex((index === options.length - 1 ? 0 : index + 1));
        setSkipTotal(5);
        setSkip(true);
      }
    }

    setText(tempText);
  }

  return (
    <span className={extraClasses}>
      {text}{skip ? (skipCount % 12 > 6 ? "_" : "█") : "█"}
    </span>
  );
}

TextTerminal.propTypes = {
  extraClasses: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

TextTerminal.defaultProps = {
  extraClasses: "",
};

export default TextTerminal;
