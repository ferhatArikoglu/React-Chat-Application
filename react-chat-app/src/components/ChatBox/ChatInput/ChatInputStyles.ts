import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #ccc;
  left: 0;

  input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px; /* Daha yumuşak kenarlar */
    outline: none;
    font-size: 14px;
    margin-right: 10px;

    @media (max-width: 768px) {
      padding: 10px;
      border-radius: 8px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10%; /* Daire şeklinde buton */
    cursor: pointer;
    width: 40px;
    height: 40px;
    transition: background-color 0.3s ease; /* Yumuşak geçiş */

    &:hover {
      background-color: #0056b3; /* Hover efekti */
    }

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;

export const AutoCompleteContainer = styled.div`
  position: absolute;
  bottom: 60px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px; /* Yumuşak kenarlar */
  width: calc(100% - 60px);
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  padding: 8px; /* İç boşluk */
  
  div {
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease; /* Yumuşak geçiş */

    &:hover {
      background-color: #f0f0f0; /* Hover efekti */
    }
  }
`;

export const SelectContainer = styled.div`
  position: absolute;
  bottom: 60px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px; /* Yumuşak kenarlar */
  width: 200px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  padding: 8px; /* İç boşluk */

  select {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px; /* Yumuşak kenarlar */
    background-color: #f8f8f8;
    font-size: 14px;
    outline: none;
    appearance: none; /* Tarayıcı varsayılan oklarını gizle */
  }

  option {
    padding: 8px;
    font-size: 14px;
  }
`;
