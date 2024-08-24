import SideBoard from "../components/SideBoard";
import MainBoard from "../components/MainBoard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100%;
`;

function index() {
  return (
    <Wrapper>
      <SideBoard />
      <MainBoard />
    </Wrapper>
  );
}

export default index;
