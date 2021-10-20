import styled, {css} from 'styled-components';
import TitlePageImage from '../assets/TitlePageImage.jpg';

export const primaryColor = '#15262e';
export const secondaryColor = '#ba5446';
export const tertiaryColor = '#e5d6b9';

const deviceSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
    desktopL: '2560px'
};

export const device = {
    mobileS: `(min-width: ${deviceSize.mobileS})`,
    mobileM: `(min-width: ${deviceSize.mobileM})`,
    mobileL: `(min-width: ${deviceSize.mobileL})`,
    tablet: `(min-width: ${deviceSize.tablet})`,
    laptop: `(min-width: ${deviceSize.laptop})`,
    desktop: `(min-width: ${deviceSize.desktop})`,
    desktopL: `(min-width: ${deviceSize.desktopL})`,
};

export const StyledNavBarContainer = styled.div<{detached: boolean}>`
    transition-duration: 2s;
    transition-timing-function: ease-in;
    ${props => props.detached && css`
        position: fixed;
        width: 100%;
        top: 10%;
    `}
    ${props => !props.detached && css`
        position: relative;
        width: 100%;
    `}
`;

export const StyledNavBar = styled.div`
    float: right;
    margin-right: 5%;
    border: 2px solid ${tertiaryColor};
`;

export const StyledNavButton = styled.button`
    color: ${primaryColor};
    background: ${secondaryColor};
    border: none;
    width: 180px;
    height: 80px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    outline: 0;
    font-size: 1.1rem;
    padding: 12px 35px;
    display: block;

    &.active {
        background-color: ${primaryColor};
        color: white;
    }

	&:hover {
		cursor: pointer;
        color: ${tertiaryColor};
	}
`;

export const StyledContainer = styled.div`
	width: 100%;
    height: 100vh;
    background: no-repeat center right fixed url(${TitlePageImage});
    background-size: cover;
    text-align: center;
`;

export const StyledSectionContainer = styled.div`
    background-color: ${primaryColor};
`;

export const StyledSection = styled.div`
    padding: 40px 180px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.laptop} {
        max-width: 800px;
        padding: 30px 120px;
    }
    @media ${device.desktop} {
        max-width: 950px;
    }
    @media ${device.desktopL} {
        max-width: 1280px;
    }
`;

export const StyledSectionTitle = styled.h1`
    color: ${secondaryColor};
`;

export const StyledSectionSubTitle = styled.h3`
    color: ${tertiaryColor};
    font-weight: 200;
    padding-bottom: 10px;
    border-bottom: 1px solid ${secondaryColor};
`;

export const StyledText = styled.p`
    margin: 0;
    color: ${tertiaryColor};
    font-weight: 500;
    text-align: center;
`;

export const StyledTitlePage = styled.div`
    width: 100%;
    height: 100vh;
`;

export const StyledTitleContainer = styled.div`
    width: 100%;
    position: relative;
    top: 30%;
`

export const StyledTitle = styled.h1`
    padding-bottom: 20px;
    margin-bottom: 0;
    font-size: 63px;
    border-bottom: 1px solid;
    border-bottom-color: rgba(0,0,0,0.35);
    display: inline-block;
    text-align: center;
`

export const StyledSubTitle = styled.p`
    margin-top: 10px;
    font-size: 28px;
`

export const StyledJumpToNavigationButton = styled.a`
    position: absolute;
    bottom: 0;
    right: 5%;
    display: block;
    background: ${tertiaryColor};
    border: 2px solid ${tertiaryColor};
    width: 180px;
    height: 80px;

    &:hover {
        cursor: pointer;
      }
`
