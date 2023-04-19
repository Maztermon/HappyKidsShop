import { AccountCircleOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { Outlet, Link } from "react-router-dom";

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
      <Link to="/"><MenuItem>Home</MenuItem></Link>
      <Link to="/products"><MenuItem>Shop Collection</MenuItem></Link>
      <Link to="/ourStory"><MenuItem>Our Story</MenuItem></Link>
      <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
      <Link to="/login"><MenuItem>
          <AccountCircleOutlined />
            Log in
        </MenuItem></Link>
        <Link to="/register"><MenuItem>Register</MenuItem></Link>
        <Link to="/cart"><MenuItem>
        <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem></Link>
      </Barmenu>
      </Center>
      </Wrapper>
    </Container>
  )
}

export default Navbar