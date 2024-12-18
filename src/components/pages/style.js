import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`


export const ContainerWrap = styled.div`
max-width: 1300px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props)=> props.bg||''
};
`

export const FreeContainer = styled.div`
width: ${(props)=>props.width};
justify-content: center;
align-items: center;
flex-direction: column;
display: flex;
background-color: ${(props)=> props.bg||''};
`