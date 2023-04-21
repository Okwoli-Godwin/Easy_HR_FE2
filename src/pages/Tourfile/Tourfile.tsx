import React from 'react'
import styled from 'styled-components'
import { AiOutlineHome } from "react-icons/ai"

const Tourfile = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h3>Travel $ Tour</h3></Top>
          <Box>
              <p>Total Balance</p>
              <h3>NGN 0.00</h3>
              <Div></Div>
              <Down>
                  <AiOutlineHome />
                  <p>Withdraw</p>
              </Down>
          </Box>
          <Transact>
              <Up>Transaction</Up>
              <Buttonhold>
                  <Buttons>Credit</Buttons>
                  <Buttons2>Debit</Buttons2>
              </Buttonhold>
              <Div></Div>
              <Last>No transactions to display for now</Last>
          </Transact>
          </Wrapper>
    </Container>
  )
}

export default Tourfile

const Last = styled.div`
    font-size: 15px;
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Buttons2 = styled.div`
    width: 75px;
    height: 30px;
     display: flex;
     font-size: 15px;
     margin-left: 13px;
    justify-content: center;
    align-items: center;
    background-color: #6A3EB7;
    color: #fff;
    border-radius: 7px;
`

const Buttons = styled.div`
    width: 75px;
    height: 30px;
     display: flex;
     font-size: 15px;
    justify-content: center;
    align-items: center;
    background-color: #6A3EB7;
    color: #fff;
    border-radius: 7px;
`

const Buttonhold = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
   
`

const Up = styled.div`
    font-size: 14px;
    font-weight: 500;
   
`

const Transact = styled.div`
    width: 500px;
    display: flex;
    height: 300px;
    border: 1px solid #d7d7d7;
    border-radius: 12px;
    flex-direction: column;
     padding-left: 30px;
     /* background-color: red; */
     padding-top: 20px;
    margin-top: 40px;
    @media screen and (max-width: 500px){
      width: 355px;
    }
`

const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9c9c9c;
    font-size: 24px;
    margin-top: 30px;
    p{
        color: #d7d7d7;
        margin-left: 17px;
        cursor: pointer;
    }
`

const Div = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d7d7d7;
    margin-top: 20px;
`

const Box = styled.div`
    width: 500px;
    height: 170px;
    display: flex;
    justify-content: center;
    border: 1px solid #d7d7d7;
    border-radius: 12px;
    margin-top: 40px;
    flex-direction: column;
    padding-left: 20px;
    h3{
        color: #6A3EB7;
        margin: 0;
        font-size: 27px;
    }
    p{
        color: #9b9b9b;
        font-size: 14px;
        margin: 0;
    }
`

const Top = styled.div`
  h3 {
    margin: 0;
    font-size: 27px;
    color: #8b8b8b;
  }
`;

const Wrapper = styled.div`
    width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 30px;
`

const Container = styled.div`
    width: calc(100vw - 220px);
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`