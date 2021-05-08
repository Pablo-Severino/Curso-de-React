import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background: linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%);
    color: #fff;

    .container {
     padding: 5px 20px;
     display: flex;
     align-items: center;
    }

    .logo {
     flex: 1;
    }

    .logo img {
     width: 50px;
    }

    nav ul {
     display: flex;
    }

    nav ul li {
     list-style: none;
     margin-left: 20px;
     text-decoration: none;
    }

    nav ul li a {
     text-decoration: none;
     color: #fff;

    &:hover {
        color: #b9b9b9;
    }
    }
`;