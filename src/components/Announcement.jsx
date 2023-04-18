import styled from 'styled-components'

const Container = styled.div`
  height: 45px;
  background-color: #282828;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Get 10% Off - Use Coupon Code HAPPY123
      &
      Free Shipping Over $50
    </Container>
  )
}

export default Announcement