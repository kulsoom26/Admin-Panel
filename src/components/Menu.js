import React from 'react';
import styled from 'styled-components';
import { Link,useLocation } from 'react-router-dom';
import { menu } from '../data';



const StyledMenu = styled.div`
  .item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    color: black;
    border-radius: 5px;
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 500;
    &:hover{
      background-color: #F4F4F4;
    }
  }
`;

const Menu = () => {
  const location = useLocation();
  return (
    <StyledMenu >
      {menu.map((item) => (
        <div className="item" key={item.id} style={{
          backgroundColor: location.pathname === item.url ? '#F4F4F4' : 'white',
    
                }}>
            <Link to={item.url} className="item" >
              <img src={item.icon} style={{ width: "35px", height: "35px",
              
        }} alt={item.title} />
              <span className="itemTitle">{item.title}</span>
            </Link>
          
        </div>
      ))}
    </StyledMenu>
  );
};

export default Menu;
