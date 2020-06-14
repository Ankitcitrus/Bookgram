import React  from 'react';
import styled from "styled-components";
import SectionExplore from "./innerComponents/sectionExplore";

const LogOutButton = styled.div`
     
    position: absolute;
    right:10px
`;
const ButtonStyle = styled.button`
     width:100px
`;




const Home = (props)=>{
    const {userLogout} = props;

    const logout = ()=>{
        userLogout();
    };
    return (
        <>
            <div>
                <SectionExplore></SectionExplore>
            </div>

            <LogOutButton>
                 <ButtonStyle  onClick={logout}>Logout</ButtonStyle>
            </LogOutButton>
        </>
    )

};

export default Home;

