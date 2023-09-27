import { forwardRef } from "react";

const Input = ({ id, label, type, error, placeholder, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>
        {label} {error ? <p> {error}</p> : null}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </div>
  );
};

export default forwardRef(Input);
