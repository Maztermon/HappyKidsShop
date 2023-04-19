import { Send } from '@mui/icons-material'
import styled from 'styled-components'


const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;
const Title = styled.h3`
  font-size: 45px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
  

`;


const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Footer = styled.div`
  font-size: 14px;
  font-weight: 300;
  top: 50px;
  margin: 10px;
  

`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Join Our Mailing List</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    <Footer>
      © 2035 by happy kids. Powered and secured by Diamond
    </Footer>
    </Container>
  );
};

export default Newsletter