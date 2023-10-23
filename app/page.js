import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>
				Hello, I'm Golden
			</h1>
			<p>
				As you can see in the title, Im Golden. <br/>
				I like programming and playing games.<br/>
				I'm Currently working on some stuff for smth I'm
				not sure I can divulgate.</p>
			<Link href="github.com/GoldenStarGamer/GoldWorks">
				I made GoldWorks, a game engine.
			</Link>
			<footer>
				<Link href="buttongame">
					Maybe you would like a game?
				</Link>
			</footer>
		</>
	);
}