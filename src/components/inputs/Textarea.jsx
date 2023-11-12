import React from "react";
import styled from "styled-components";
const Textarea = ({ type, name, value, onChange, id, placeholder }) => {
  return (
    <S.InputBox>
      <textarea
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        required
      />
      <span>{placeholder}</span>
    </S.InputBox>
  );
};

export default Textarea;

const S = {
  InputBox: styled.div`
    width: 100%;
    position: relative;
    display: flex;

    textarea {
      width: 100%;
      resize: vertical;
      max-height: 120px;
      padding: 10px 10px 10px 10px;
      border: 2px solid white;
      border-radius: 5px;
      outline: none;
      text-transform: capitalize;
      font-size: 1rem;
      background-color: rgba(0, 0, 0, 0.15);
      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
      @media (max-width: 850px) {
        border: 2px solid black;
      }
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      pointer-events: none;
      font-size: 1em;
      color: rgba(255, 255, 255, 0.3);
      @media (max-width: 850px) {
        color: rgba(0, 0, 0, 0.35);
      }
    }

    textarea:valid ~ span,
    textarea:focus ~ span {
      display: block;
      transform: translateX(10px) translateY(-7px);
      text-transform: uppercase;
      padding: 0 10px;
      background-color: white;
      font-size: 0.7em;
      border-radius: 2px;
      color: black;
      @media (max-width: 850px) {
        color: white;
        background-color: black;
      }
    }

    textarea:valid,
    textarea:focus {
      background-color: rgba(255, 255, 255, 0.15);
    }
  `,
};
