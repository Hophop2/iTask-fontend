import React from 'react'
import Bckg from '../components/background/Bckg'
import styled from 'styled-components'
import TaskInfo from '../features/task/TaskInfo'
const TaskPage = () => {
  return (
    <Bckg logheight={'100vh'}>
        <Container>
            <TaskInfo />
        </Container>
    </Bckg>
  )
}

export default TaskPage

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`