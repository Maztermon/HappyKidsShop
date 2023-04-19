import { Facebook,Instagram,Pinterest } from '@mui/icons-material'
import styled from 'styled-components'


const Container = styled.div`
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

const Logo = styled.h1`
  margin: 50px;
  padding: 50px 90px;
`;



const SocialContainer = styled.div`
  display: flex;
  margin: 40px;
  padding: 50px 90px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
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


const Footer = () => {
  return (
    <Container>
      <Left>
      
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Shop Collection</ListItem>
          <ListItem>Our Story</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      
      </Left>

      <Center>
        <Logo>happy kids</Logo>
      <SocialContainer>
          <SocialIcon color="343A40">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="343A40">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="343A40">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Center>

      <Right>
        <List>
          <ListItem>Shipping & Returns</ListItem>
          <ListItem>Store Policy</ListItem>
          <ListItem>Payment Methods</ListItem>
          <ListItem>FAQ</ListItem>
        </List>
      </Right>
     
    </Container>
  );
};

export default Footer;
