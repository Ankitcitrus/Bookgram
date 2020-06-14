import React ,{Component} from 'react';
import styled from "styled-components";
import { Provider } from 'react-redux';
import store from './redux/createStore';
import Login from "./screen/Login/login.container";
import { BrowserRouter } from "react-router-dom";




const Button = styled.button`
      border:none,
      height:20px,
      background-color:'red'
`

export default class App extends Component{
     render(){
         return(
             <Provider store={store}>
                 <Login></Login>
             </Provider>
             )

     }
}
