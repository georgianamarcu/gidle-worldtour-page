import styled from 'styled-components';
import band from '../assets/gidle.png'



export const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background: linear-gradient(180deg, #D84D54 0%, #000000 100%);
    width: 100%;
    height: 100%;

`;

export const HomepageNavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100vw;
    padding: 20px;
`

export const Logo = styled.img.attrs({
    alt: 'G-Idle Logo'
})`
    width: 100px;
    height: 88px;

    
`
export const HomepageMain = styled.div`
    background: url(${band});
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 1.5em;
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
`


export const HomepageTitle = styled.h1`
    font-family: 'Nosifer';
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 96px;
    line-height: 90px;
    color: white;
    margin-top: 2em;
`

export const HomepageSubtitle = styled.p`
    font-family: 'PT Serif';
    font-size: 1.5em;
    color: white;
`

export const HomepageNavList = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
   font-family: 'Nosifer';
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 60px;
   font-size: 1.5em;
`

export const HomepageNavListItem = styled.li`
&:hover{
    color: white;
    cursor: pointer;
}
`

export const HomepageNavListLink = styled.a`
`

export const HomepageMainBtn = styled.button`
    width: 383px;
    height: 49.78px;
    background: #C3464C;
    border-radius: 20px;
    font-family: 'Nosifer';
    border-style: none;
    font-size: 1em;
&:hover{
    cursor: pointer;
    
}
`