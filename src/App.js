import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import profile from "./assets/profile.jpg";
import logo from "./assets/google.png";
import menu from "./assets/menu.PNG";
import search from "./assets/search.PNG";
import buttons from "./assets/button.PNG";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg || "white"};
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  height:50px;
  margin-top:3px;
`

const Button = styled.div`
  background-color: ${(props) => props.theme.bg || "white"};
  color: gray;
  border: none;
  outline: none;
  margin-right: 15px;
  margin-top: 14px;
`

const Image = styled.button`
  background-color: ${(props) => props.theme.bg || "white"};
  margin-right: 10px;  
  border: none;
  outline: none;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`

const Logo = styled.image`
  background-color: ${(props) => props.theme.bg || "white"};
  border: none;
  outline: none;
`
const Input = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:white;
  margin-top:15px;
  width:550px;
  height:40px;
  border-radius:30px;
  border:1px solid lightgray;
  outline:none;
`

const InputConsol = styled.input`
  border: 1px solid white;
  width: 500px;
  outline: none;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const GrayButton = styled.button`
  margin-right: 19px;
  background-color: ${(props) => props.theme.button || "white"};
  color: black;
  border: none;
  outline: none;
  margin-top: 30px;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius:10px;
`
const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
align-content:flex-end;
justify-content:flex-start;
`

const Footer1 = styled.div`
  margin-top:195px;
  color: ${(props) => props.theme.fontColor || "gray"};
  align-content:flex-end;
  padding-left:30px;
  padding-top:15px;
  padding-bottom:15px;
  font-size:15px;
  background-color: ${(props) => props.theme.button || "#F2F2F2"};
`
const Footer2 = styled.div`
  border-top:1px solid lightgray;
  padding-left:30px;
  padding-top:15px;
  padding-bottom:15px;
  font-size:14px;
  background-color: ${(props) => props.theme.button || "#F2F2F2"};
`

function App() {
  const [themeMode, setThemeMode] = useState('original');
  const pastel = {
    font: 'white',
    bg: '#DCCEDA',
    button: '#f0e6ee'
  }
  const original = {
    bg: 'white'
  }

  const theme = themeMode === 'original' ? original : pastel;
  const toggleTheme = () => {
    setThemeMode(themeMode === 'original' ? 'pastel' : 'original');
    console.log(themeMode);
  }

  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      <Header>
        <Button>Gmail</Button>
        <Button>이미지</Button>
        <Button>...</Button>
        <Image><img width="35px" height="35px" src={profile} style={{ borderRadius: "50%"}}/></Image>
        <button style={{ height: "20px", width: "40px", marginTop: "13px", marginRight: "20px" }} onClick={toggleTheme} > click</button>
      </Header>
      <Center>
        <Logo><img src={logo}/></Logo>
        <Input>
          <img src={search} style={{margin:"7px"}}/>
          <InputConsol/>
          <img src={buttons} style={{margin:"3px", borderRadius: "70%"}}/>
        </Input>
        <Row>
          <GrayButton>Google 검색</GrayButton>
          <GrayButton>I'm Feeling Lucky</GrayButton>
        </Row>
        <div style={{marginTop: "20px"}}>
          <a style={{ fontSize: "14px" }}>Google 제공 서비스 :
          <a style={{ color: "#3733BF" }}> English</a></a>
        </div>
      </Center>
      <FooterWrapper>
        <Footer1>대한민국</Footer1>
        <Footer2>
          <a href="" style={{ marginRight: "23px" }}>Google 정보</a>
          <a href="" style={{ marginRight: "23px" }}>광고</a>
          <a href="" style={{ marginRight: "23px" }}> 비즈니스 </a>
          <a href="" style={{ marginRight: "23px" }}> 검색의 원리</a>
          <a href="" style={{ marginLeft: "54rem", marginRight: "23px" }}>개인정보처리방침</a>
          <a href="" style={{ marginRight: "23px" }}>약관 </a>
          <a style={{ marginRight: "15px" }}>설정 </a>
        </Footer2>
      </FooterWrapper>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
