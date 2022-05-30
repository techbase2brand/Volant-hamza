import React, {useEffect} from "react"
import ReactDom from "react-dom"
import './index.css';
import './App.css';
import Home from "./Pages/Home/Home/Home";

const Test = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
		console.log(first)
	  }, [])
	return <div>Welcome to reactjs shopify!</div>
}

const root = document.getElementById("app");
ReactDom.render(<Home />, root);