import styled from "styled-components";

const Wrapper = styled.div`
  width: 280px;
  padding: 15px;
  background-color: rgb(70, 130, 169, 0.2);
`;

const Item = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.5s ease-out;
    background-color: rgb(70, 130, 169, 0.3);
  }
`;

const VerticalBar = styled.div`
  background-color: rgb(70, 130, 169, 0.3);
  height: 1px;
  margin: 5px 0px;
`;

function SideBoard() {
  return (
    <Wrapper>
      <Item>접속한 계정명</Item>
      <Item>작업 추가</Item>
      <VerticalBar />
      <Item>오늘</Item>
      <Item>다음</Item>
    </Wrapper>
  );
}

export default SideBoard;
