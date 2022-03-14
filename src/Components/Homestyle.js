import styled from 'styled-components';
import BImage from './Img/backg.webp';



export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BImage});
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainHolder = styled.div`
    width: 90%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 34px 38px 0 HSLA(229, 6%, 66%, 0.3);
`
export const ItemsContaierSize = styled.div`
    width: 90%;    
    display: flex;    
    flex-direction: column;
    align-items: center;
    line-height: 24px;
    
        
`
export const TextOnly = styled.div`
    text-align: center;
`
export const CardHolder = styled.div`
    display: flex;
    margin: 31px 33px;
    background: white;
    width: 350px;
    border-top: 3px solid;
    border-top-color: cyan;
    border-radius: 5px;
    box-shadow: 0 34px 38px 0 HSLA(229, 6%, 66%, 0.3);
`
export const CardHolder2 = styled.div`
    display: flex;  
    margin: 31px 33px;
    background: white;
    width: 350px;
    border-top: 3px solid;
    border-top-color: blue;
    border-radius: 5px;
    box-shadow: 0 34px 38px 0 HSLA(229, 6%, 66%, 0.3);
`
export const CardHolder3 = styled.div`
    display: flex;  
    margin: 31px 33px;
    background: white;
    width: 350px;
    border-top: 3px solid;
    border-top-color: red;
    border-radius: 5px;
    box-shadow: 0 34px 38px 0 HSLA(229, 6%, 66%, 0.3);
`
export const CardHolder4 = styled.div`
    display: flex;  
    margin: 31px 33px;
    background: white;
    width: 350px;
    border-top: 3px solid;
    border-top-color: orange;
    border-radius: 5px;
    box-shadow: 0 34px 38px 0 HSLA(229, 6%, 66%, 0.3);
`
export const TextContent = styled.div`
    text-align: left;
    margin-left:30px;
`
export const ImageSpace = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 250px;
    margin-top: 20px;
    
    
`
export const MiddleComtent = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    position: absolute;
    
`
export const LeftSide = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 10px;
    margin: 5px;
    
`
export const RightSide = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 80px;
    
`