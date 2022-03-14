import React from 'react';
import './Homestyle.js'
import Image2 from './Img/icon-karma.svg';
import Image3 from './Img/icon-calculator.svg';
import Image4 from './Img/icon-supervisor.svg';
import Image from './Img/icon-team-builder.svg';

import {
    MainContainer,
    ContainHolder,
    CardHolder2,
    CardHolder3,
    CardHolder4,
    ItemsContaierSize,
    TextOnly,
    CardHolder,    
    TextContent,
    ImageSpace,
    MiddleComtent,
    LeftSide,
    RightSide
    
} from './Homestyle.js'

const Homepage = (props) => {
  // const TextContent = (props)=>{
    
  // }
  return (
    <MainContainer >
       <ContainHolder>
          <ItemsContaierSize>
              <TextOnly>
                <p>{props.para}</p>
                <h2>{props.h2}</h2>
                <p>{props.p2}<br/>
                {props.p3}</p>
              </TextOnly>   
              </ItemsContaierSize>
              <MiddleComtent>
                  <CardHolder>                      
                      <TextContent>
                        <h3>{props.superText}</h3>
                        <p>{props.superPara}<br/>
                        {props.superPara2}</p>
                          <ImageSpace src={Image4}> 
                          </ImageSpace>
                      </TextContent>                      
                  </CardHolder> 

                  <CardHolder2>                      
                      <TextContent>
                        <h3>{props.Card2}</h3>
                        <p>{props.paraCard2}<br/>
                        {props.paracard2}</p>
                          <ImageSpace src={Image3}> 
                          </ImageSpace>
                      </TextContent>                      
                  </CardHolder2>                                            
              </MiddleComtent>

              <LeftSide>
                <CardHolder3>                      
                      <TextContent>
                        <h3>{props.card3}</h3>
                        <p>{props.card3Para}<br/>
                        {props.card3para}</p>
                          <ImageSpace src={Image}> 
                          </ImageSpace>
                      </TextContent>                      
                  </CardHolder3>
              </LeftSide>

              <RightSide>
                <CardHolder4>                      
                      <TextContent>
                        <h3>{props.card4}</h3>
                        <p>{props.card4Para}<br/>
                        {props.card4para}</p>
                          <ImageSpace src={Image2}> 
                          </ImageSpace>
                      </TextContent>                      
                  </CardHolder4>              
              </RightSide>
          
      </ContainHolder> 
    </MainContainer>
  )
}


export default Homepage