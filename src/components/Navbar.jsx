import { AccountCircleOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin: 25px;
  padding: 10px
  
`;

const Barmenu = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Center>
          <Logo>Happy Kids</Logo>
      <Barmenu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Shop Collection</MenuItem>
        <MenuItem>Our Story</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>
          <AccountCircleOutlined />
            Log in
        </MenuItem>
        <MenuItem>Register</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Barmenu>
      </Center>
      </Wrapper>
    </Container>
  )
}

export default Navbar