import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Select from "react-select";
import "./style.css";

const customSelectStyles = {
  container: (baseStyles) => ({
    ...baseStyles,
    maxWidth: "265px",
    width: "100%",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    boxSizing: "border-box",
    boxShadow: "none",
    border: "1px solid hsl(0, 0%, 20%)",
    borderRadius: "8px",
    padding: "14px 5px 14px 15px",
    fontSize: "13px",
    "&:hover": {
      borderColor: "none",
    },
  }),
  IndicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    margin: "0 14px 0 0",
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    margin: 0,
    padding: 0,
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    margin: 0,
    padding: 0,
  }),
};

const CustomSelect = (props) => {
  return (
    <Select
      isClearable
      placeholder={props.placeholder}
      classNamePrefix='custom-select'
      components={{
        ClearIndicator: () => <IoCloseOutline />,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <FaCaretDown />,
      }}
      styles={customSelectStyles}
      options={props.options}
      onChange={props.onChange}
    />
  );
};

export default CustomSelect;

//ClearIndicator:() => <IoCloseOutline/>,
