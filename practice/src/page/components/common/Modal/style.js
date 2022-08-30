import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 130vh;
  /* display: none; */
`;
const Errors = styled.p`
  color: red;
  text-align: center;
  line-height: 8px;
`;
const ModalUser = styled.div`
  position: absolute;
  width: 450px;
  height: 600px;
  background: #ffafaf;
  font-family: "Roboto";
  z-index: 39;
  border-radius: 10px;
  left: 55%;
  top: 45%;
  transform: translate(-50%, -50%);
  line-height: 18px;
`;
const Error = styled.p`
  color: yellow;
  text-align: center;
  line-height: 8px;
`;
const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  text-transform: capitalize;
  line-height: 2;
`;
const FormSubmit = styled.form`
  margin-left: 60px;
  line-height: 40px;
`;
const Label = styled.p`
  font-size: 16px;
  line-height: 40px;
`;
const InputUser = styled.input`
  width: 323px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 50px;
  margin-top: 50px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: none;
  font-size: 16px;
  font-family: "Roboto";
  border-radius: 10px;
  background-color: ${(props) => (props.save ? "#78E2F3" : "#CFC5C5")};
`;
export {
  ModalWrapper,
  ModalUser,
  Errors,
  Title,
  FormSubmit,
  Label,
  InputUser,
  Error,
  BtnWrapper,
  Button,
};
