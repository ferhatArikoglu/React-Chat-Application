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
    border-radius: 5px; /* Daha yuvarlak köşeler */
    outline: none;
    font-size: 14px;
    margin-right: 10px; /* Buton ile arayı açmak için */

    @media (max-width: 768px) {
      /* Mobil ekranlar için stil */
      padding: 10px;
      border-radius: 5px;
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
    border-radius: 20%; /* Daire şeklinde buton */
    cursor: pointer;
    width: 40px;
    height: 40px;

    @media (max-width: 768px) {
      /* Mobil ekranlar için stil */
      width: 35px;
      height: 35px;
    }
  }
`;
