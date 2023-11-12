import React, { forwardRef } from "react";
import { styled } from "styled-components";
const Input = forwardRef(
  ({ type, placeholder, value, onChange, name, id, list, helpText }, ref) => {
    return (
      <S.Wrapper>
        <div className="input-box">
          <input
            type={type}
            name={name}
            ref={ref}
            value={value}
            onChange={onChange}
            list={list}
            id={id}
            required
          />
          <span>{placeholder}</span>
          {list ? (
            <datalist id="status">
              <option value="To Do" />
              <option value="In Progress" />
              <option value="Done" />
            </datalist>
          ) : null}
        </div>
        <p className="help">{helpText}</p>
      </S.Wrapper>
    );
  }
);

export default Input;

const S = {
  Wrapper: styled.div`
    width: 100%;
    .help {
      margin: 0;
      color: white;
      font-size: 0.7rem;
      @media (max-width: 768px) {
        color: black;
      }
    }
    .input-box {
      width: 100%;
      position: relative;
      display: flex;
    }

    input {
      width: 100%;
      padding: 10px 10px 10px 10px;
      border: 2px solid white;
      border-radius: 5px;
      outline: none;

      font-size: 1em;
      background-color: rgba(0, 0, 0, 0.15);
      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
      @media (max-width: 850px) {
        border: 2px solid black;
      }
    }

    .input-box span {
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

    .input-box input:valid ~ span,
    .input-box input:focus ~ span {
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

    input:valid,
    input:focus {
      background-color: rgba(255, 255, 255, 0.15);
    }
  `,
};
