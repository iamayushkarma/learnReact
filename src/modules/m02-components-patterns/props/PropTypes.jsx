import React from "react";
import PropTypes from "prop-types";

function PropType({ name, age }) {
  return `${name} will be ${age + 5} in next 5 yrs`;
}
PropType.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default PropType;
