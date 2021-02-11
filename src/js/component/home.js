import React, { useState } from "react";
import { ChooseWeapon } from "./ChooseWeapon.js";
import { Board } from "./Board";

//create your first component
export function Home() {
	const [visible, setVisible] = useState("");
	const [invisible, setInvisible] = useState("d-none");

	const visibleToggle = () => {
		setVisible("d-none");
		setInvisible("");
	};

	const invisibleToogle = () => {
		setVisible("");
		setInvisible("d-none");
	};

	return (
		<div className="row">
			<div className="col-md-12 mb-3">
				<h1 className="text-center text-white">
					Tic Tac Toe in React.js
				</h1>
			</div>
			<div className={"col-md-12 mb-3 " + visible}>
				<ChooseWeapon visibleToggle={visibleToggle} />
			</div>
			<div className={"col-md-12 mb-3 " + invisible}>
				<Board invisibleToogle={invisibleToogle} />
			</div>
		</div>
	);
}
