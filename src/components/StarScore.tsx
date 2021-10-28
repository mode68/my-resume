import styled from 'styled-components';
import { Star } from '@material-ui/icons';
import { StarOutline } from '@material-ui/icons';

const StarScore: React.FC<{name: string, score: number}> = ({ name, score }) => {
    let rating = [];
    for (let i = 0; i < 5; i++) {
        rating.push(i < score ? <Star key={'star' + i} /> : <StarOutline key={'starOutline' + i} />);
    }
    return <StyledSkillScore><StyledSpan width='60%' textAlign='left'>{name}</StyledSpan><StyledSpan width='40%' textAlign='right'>{rating}</StyledSpan></StyledSkillScore>
}

const StyledSkillScore = styled.span`
    padding: 3px;
    transition: 0.9s;
    &:hover {
        background-color: gray;
        svg {
            margin-left: 3px;
        }
    }
`;

const StyledSpan = styled.span<{ width?: string, textAlign?: string, fontSize?: string }>`
    display: inline-block;
    margin-bottom: 10px;
    width: calc(${props => props.width} - 6px);
    text-align: ${props => props.textAlign};
    svg {
        font-size: 1rem;
    }
`;

export default StarScore;