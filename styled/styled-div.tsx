import styled, { css } from 'styled-components';

const bold = css`
font-weight: bold;
`;

export interface DivStyle {
direction?: 'left' | 'right';
color?: string;
size?: number;
bold?: boolean;
fontStyle?: 'normal'|'italic'|'oblique'|'initial'|'inherit';
}

//destructuring
export const StyledDiv = styled.div<{divStyle: DivStyle}>`
color: ${({divStyle : {color}}) => color ?? 'aqua'};
font-size: ${({divStyle}) => divStyle.size ?? 30}px;
font-style: ${props=> props.divStyle.fontStyle ?? 'normal'};
${props => (props.divStyle.bold ? bold : '')}
`;
