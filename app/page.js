"use client"

import { useState } from "react"
import "./style.css"

export default function Home() {
	return (
		<>
			<DaButton/>
		</>
	);
}

function DaButton() {
	const [count, setCount] = useState(0);
	
	const [congratstext, setCongratstext] = useState("")

	function handleClick() {
		setCount(count + 1);
	}
	
	function ClickText() {
		
		switch (count){
			case 10:
				setCongratstext("you know how to click")
			break
			case 20:
				setCongratstext("do you like to click?")
			break
			case 30:
				setCongratstext("Is it fun to mash buttons?")
			break
			case 40:
				setCongratstext("ok stop you're hurting him")
			break
			case 50:
				setCongratstext("i said STOP")
			break
			case 60:
				setCongratstext("CLICK 1 MORE TIME I SWEAR")
			break
			case 61:
				setCongratstext("bitch")
			break
			case 65:
				setCongratstext("STOP")
			break
			case 80:
				setCongratstext("if you keep clicking I will reset your score")
			break
			case 85:
				setCongratstext("that's right, there is a score system")
			break
			case 90:
				setCongratstext("don't say I didn't warn you")
			break
			case 99:
				setCongratstext("ok fuck you")
			break
			case 100:
				setCount(0)
				setCongratstext("")
			break
		}
		return(
			<>
				<p>{congratstext}</p>
			</>
		)
	}

	return (
		<>
			<button onClick={handleClick}>
				Clicked {count} times
			</button>
			<ClickText/>
		</>
	);
}
