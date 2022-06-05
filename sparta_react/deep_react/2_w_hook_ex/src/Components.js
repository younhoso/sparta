import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div style={{ width: "50vw", border: "1px solid #888", minHeight: "20vh" }}>
      <pre>{text}</pre>
    </div>
  );
};

export const Button = ({ input_ref, setText }) => {
  return (
    <button
      onClick={() => {
        setText(input_ref);
      }}
    >
      완성
    </button>
  );
};

export const Input = ({ input_ref }) => {
  return <input ref={input_ref} />;
};