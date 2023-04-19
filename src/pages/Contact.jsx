import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'


const Container = styled.div`

  
`;

const Wrapp = styled.div`
border-top: 2px solid black;
width: 100%;
height: 40vh;
display: flex;
margin: auto;
align-items: center;
justify-content: space-between;
 
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;



const Title = styled.h1`
    color:#F495057;
    margin: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const Center = styled.div`
  flex: 1;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
`;


const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />  
        <Wrapp>
        <Left>
      
            <List>
            <ListItem>VISIT US</ListItem>
            <ListItem>500 Terry Francois St.</ListItem>
            <ListItem>San Francisco, CA 94158</ListItem>
            <ListItem>123-456-7890</ListItem>
            </List>
      
        </Left>
        
        <Center>
        <Title>Contact Us</Title>
        <List>
            <ListItem>OPENING HOURS</ListItem>
            <ListItem>Mon - Fri: 7am - 10pm</ListItem>
            <ListItem>Saturday: 8am - 10pm</ListItem>
            <ListItem>​Sunday: 8am - 11pm</ListItem>
            </List>
        </Center>

        <Right>
            <List>
            <ListItem>CUSTOMER SERVICE</ListItem>
            <ListItem>1-800-000-000</ListItem>
            <ListItem>123-456-7890</ListItem>
            <ListItem>info@mysite.com</ListItem>
            </List>
         </Right>
         </Wrapp>
      <Footer />
      <Newsletter />
    </Container>
  )
}

export default Home