import './Spinner.css';
import styled from '@emotion/styled';

const Div=styled.div`
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-top: 15px;
`;

const Spinner = () => {
    return ( <Div>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Div> );
}
 
export default Spinner;