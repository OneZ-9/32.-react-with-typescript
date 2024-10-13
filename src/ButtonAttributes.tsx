import React from "react";

// type ButtonProps = {
//   type: "submit" | "reset" | "button";
//   autoFocus?: boolean;
// };

// When we have custom component wrapping native element,
// we need to allow all the attibutes of native element to be passes as props
// Instead specify them one by one, we can use helper type ComponentProps type
// In angle brackets we only need to specify the component
// Then we can accepts all the props which native button element accepts
// It is better to specify explicitely if we accepts refs or not
// type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// If we accepts both native and custom props, we can intersect as below
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

export default function ButtonAttributes({
  type,
  autoFocus,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      autoFocus={autoFocus}
      {...rest}
      style={{ backgroundColor: `${variant}` }}
    >
      Click me!
    </button>
  );
}
