import styled from '@emotion/styled';

const Div =styled.div`
    background-color: #B7322C;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
`;

const Error = ({children}) => {
    return ( <Div>{children}</Div> );
}
 
export default Error;