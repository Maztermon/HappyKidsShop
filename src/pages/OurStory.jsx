import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import styled from "styled-components"
import Banner4Ourstory from '../assets/Banner4Ourstory.png'


const Container = styled.div`
  
`;


const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const Info = styled.div`
  top: 50px;
  bottom: 50px;
 
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#F495057;
    margin: 25px;
`;

const DEC = styled.h3`
    color:grey;
    margin-bottom: 20px;
    padding: 10px;
    padding-left: 240px;
    padding-right: 240px;
    text-indent: 5em;
    margin-top: 0

`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      
        <ImgContainer>
            <Image src={Banner4Ourstory} />
        </ImgContainer>
        
      <Info>
        <Title>Our Story</Title>
        <DEC>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        <br /></DEC>
        <DEC>
        ​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
        </DEC>
        </Info>
        
      <Footer />
      <Newsletter />
    </Container>
  )
}

export default Home