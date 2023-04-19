import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  text-align:center;
`;

const Image = styled.img`
width: 295px;
height: 180px;
object-fit: cover;
object-position: 50% 50%;
  

`;

const Info = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#F494949;
    margin-bottom: 10px;
`;

const Price = styled.h3`
    color:#F494949;
    margin-bottom: 10px;
`;

const Button = styled.button`
    border-style: solid;
    padding: 15px;
    margin: 10px;
    background-color: white;
    color: #F494949;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Price>{item.price}</Price>
        <Button>Add to Cart</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;