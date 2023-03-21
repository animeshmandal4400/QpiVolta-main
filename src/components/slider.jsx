import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import { Slider } from "baseui/slider";

const CustomSlider = (props) => {

  const { label, minValue, maxValue, initialValue } = props.args;

  const [value, setValue] = useState([initialValue]);
    
  useEffect(() => Streamlit.setFrameHeight());

  return (
    <>
      <h3>{label}</h3>
      <Slider
        value={value}
        onChange={({ value }) => value && setValue(value)}
        onFinalChange={({ value }) => Streamlit.setComponentValue(value)}
        min={minValue}
        max={maxValue}
      />
    </>
  );
};

export default withStreamlitConnection(CustomSlider);
