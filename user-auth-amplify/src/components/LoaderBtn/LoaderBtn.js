import React from "react";
import { Button } from "reactstrap";
// import "./LoaderBtn.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <i class="fa fa-spinner fa-spin fa-fw"></i>}
    {!isLoading ? text : loadingText}
  </Button>;
