import styled, { css,createGlobalStyle } from 'styled-components';

export const BodyStyle = createGlobalStyle`
  body {
    background-color: PapayaWhip;
  }

  .ccc {
    color: green;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid: 70px 70px / 60px 60px 60px 60px 60px;
  gap: 15px 5px;
  justify-content: center;
  padding: 10px;
  background-color: #2196f3;
  width: 80%;
  height: 80%;
  margin: auto;
`;

interface GridItemStyle {
  backgroundColor?: string;
}

const baseGridItemStyle = css`
border: 1px solid rgba(0, 0, 0, 0.8);
padding: 20px;
font-size: 30px;
color: black;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
&:hover {
  opacity: 0.6;
}
`;

const GridItem = styled.div<GridItemStyle>`
  ${baseGridItemStyle}
  background-color: ${props => props.backgroundColor ?? 'white'}
`;

export const GridItemA = styled(GridItem)
           .attrs(props => {return {backgroundColor: 'red'} as GridItemStyle;})`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

export const GridItemB = styled(GridItem)
          .attrs(props => ({backgroundColor: 'green'}))`
  grid-column: 5 / 6;
  grid-row: 2 / 3;
`;

export const GridItemC = styled(GridItem)
          .attrs(props => ({backgroundColor: 'blue'}))`
`;

export const GridItemD = styled(GridItem)
          .attrs(props => ({backgroundColor: 'yellow'}))`
`;

export const GridItemE = styled(GridItem)
          .attrs(props => ({backgroundColor: 'cyan'}))`
`;

export const GridItemF = styled(GridItem)
          .attrs(props => ({backgroundColor: 'white'}))`
`;

export const GridItemG = styled(GridItem)
          .attrs(props => ({backgroundColor: 'orange'}))`
`;

export const GridItemH = styled(GridItem)
          .attrs(props => ({backgroundColor: 'violet'}))`
`;

export const GridItemI = styled(GridItem)
          .attrs(props => ({backgroundColor: 'lightgray'}))`
`;
