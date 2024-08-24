import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 40px;
  background-color: #f6f4eb;
  flex-grow: 1;
`;

const Title = styled.h1`
  padding: 10px 20px;
  font-size: 1.5em;
  color: #4682a9;
`;

const VerticalBar = styled.div`
  background-color: #4682a9;
  height: 1px;
  margin-top: 5px;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskItem = styled.div`
  padding: 10px 20px;
`;

const AddButton = styled.div`
  padding: 10px 20px;
  color: #4682a9;

  &:hover {
    cursor: pointer;
  }
`;

function MainBoard() {
  return (
    <Wrapper>
      <Title>오늘</Title>
      <VerticalBar />
      <TaskList>
        <TaskItem>리액트 강의 듣기</TaskItem>
        <TaskItem>vuejs 강의 듣기</TaskItem>
      </TaskList>
      <AddButton>+ 작업 추가</AddButton>
    </Wrapper>
  );
}

export default MainBoard;
