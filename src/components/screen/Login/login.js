import React, {useEffect}  from 'react';
import styled from "styled-components";
import {credentials} from "./redux/login.constants";
import Home from "../Home/home.container";



const MyContainer = styled.div`
     
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Login = (props)=>{
    const {setlogin ,  isLoading, userLoggedIn, userLogout}  = props;



    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem("userData"));
        if(user){
            var currentTime = Date.now();
            if((currentTime - user.time) > 3600000){   //1 hr
                userLogout();
            } else{
                setlogin(user.userName);
            }
        }

    },[]);

    const onloginClick = ()=>{
        event.preventDefault();
        const data = new FormData(event.target);
        const userName = (data.get('uname'));
        const password = (data.get('psw'));
        var date = Date.now();
        var objUser = {
            time: date,
            userName: credentials.username1
        };
        if((userName === credentials.username1 && password === credentials.username1) || (userName === credentials.username2 && password === credentials.username2)){
            setlogin(userName);
            localStorage.setItem("userData", JSON.stringify(objUser));
        }

    };
    return (
        <>
            {!isLoading?(<MyContainer>
            <form onSubmit={onloginClick}>
            <div>
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
            </div>

            <div>
                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
            </div>


            <button>Login</button>

            </form>
        </MyContainer>):(<Home></Home>)
            }
            </>
    )

};

export default Login;

