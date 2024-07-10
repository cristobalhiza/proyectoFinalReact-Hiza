import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        text-white
        rounded-lg 
        border 
        border-transparent 
        px-3 
        py-2 
        text-base
        bg-custom-green
        cursor-pointer 
        transition 
        duration-150 
        ease-in-out 
        hover:border-[#e2725b] 
        focus:outline-none 
        focus-visible:outline-4 
        focus-visible:outline-webkit-focus-ring-color
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonComponent;
