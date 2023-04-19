import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  

`;

const Center = styled.h1`
  flex: 1;
  text-align: center;
  font-weight: bold;
  margin: 25px;
  padding: 10px
  bottom: 0;
  top: 0;
`;

const Arrow = styled.div`
  width: 25px;
  height: 256px;
  top: 0;
  bottom: 0;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${props=> props.dirction === "left" && "10px"};
  right: ${props=> props.dirction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;


const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
 
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 600;
`;

const Categories = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };     
  return ( 
    <Container> 
      <Center>
          Happy Kids
        </Center>
      <Arrow dirction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {categories.map((item) => (
        <Slide>
        <CategoryItem item={item} key={item.id} />
        </Slide>
        ))}
      </Wrapper>
      <Arrow dirction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
      <Center>
        <Button>SHOP ALL</Button>
      </Center>
    </Container>
    
  );
};

export default Categories;
