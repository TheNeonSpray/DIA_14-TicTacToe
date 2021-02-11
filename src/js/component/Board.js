import React, { useState } from "react";
import PropTypes from "prop-types";

export const Square = props => {
	const [label, setLabel] = useState("");

	const marcar = () => {
		if (label === "") {
			const symbol = props.player == 1 ? "X" : "O";
			setLabel(symbol);
			props.onMarcar(symbol);
		}
	};

	return (
		<div>
			<button className="square text-white" onClick={marcar}>
				{label}
			</button>
		</div>
	);
};

export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			turno: 1,
			winner: null,
			gato: new Array(9).fill("") // => [, , , , , , , ,]
		};
	}

	verificarGanador() {
		// Primera Fila
		if (
			this.state.gato[0] === this.state.gato[1] &&
			this.state.gato[0] === this.state.gato[2] &&
			this.state.gato[0] !== ""
		) {
			this.setState({
				winner: this.state.gato[0]
			});
		}

		// Segunda Fila
		if (
			this.state.gato[3] === this.state.gato[4] &&
			this.state.gato[3] === this.state.gato[5] &&
			this.state.gato[3] !== ""
		) {
			this.setState({
				winner: this.state.gato[3]
			});
		}

		// Tercera Fila
		if (
			this.state.gato[6] === this.state.gato[7] &&
			this.state.gato[6] === this.state.gato[8] &&
			this.state.gato[6] !== ""
		) {
			this.setState({
				winner: this.state.gato[6]
			});
		}

		// Primera Columna
		if (
			this.state.gato[0] === this.state.gato[3] &&
			this.state.gato[0] === this.state.gato[6] &&
			this.state.gato[0] !== ""
		) {
			this.setState({
				winner: this.state.gato[0]
			});
		}

		// Segunda Columna
		if (
			this.state.gato[1] === this.state.gato[4] &&
			this.state.gato[1] === this.state.gato[7] &&
			this.state.gato[1] !== ""
		) {
			this.setState({
				winner: this.state.gato[1]
			});
		}

		// Tercera Columna
		if (
			this.state.gato[2] === this.state.gato[5] &&
			this.state.gato[2] === this.state.gato[8] &&
			this.state.gato[2] !== ""
		) {
			this.setState({
				winner: this.state.gato[2]
			});
		}

		// Diagonal Izq -> Der
		if (
			this.state.gato[0] === this.state.gato[4] &&
			this.state.gato[0] === this.state.gato[8] &&
			this.state.gato[0] !== ""
		) {
			this.setState({
				winner: this.state.gato[0]
			});
		}

		// Diagonal Der -> Izq
		if (
			this.state.gato[2] === this.state.gato[4] &&
			this.state.gato[2] === this.state.gato[6] &&
			this.state.gato[2] !== ""
		) {
			this.setState({
				winner: this.state.gato[2]
			});
		}
	}

	renderSquare(position, player) {
		return (
			<Square
				player={player}
				onMarcar={symbol => {
					this.state.gato[position] = symbol;

					this.setState({
						turno: this.state.turno == 1 ? 2 : 1
					});

					this.verificarGanador();
				}}
			/>
		);
	}

	resetGame() {
		this.setState({
			turno: 1,
			winner: null,
			gato: new Array(9).fill("")
		});
		this.props.invisibleToogle();
	}

	render() {
		return (
			<div className="principal-board">
				{this.state.winner === null ? (
					<div className="status d-flex justify-content-center text-white">
						Turn: {this.state.turno === 1 ? "X" : "O"}
					</div>
				) : (
					<div className="d-flex justify-content-center text-white">
						Winner {this.state.winner}
					</div>
				)}

				{this.state.winner ? (
					<div className="d-flex justify-content-center">
						<button
							onClick={() => {
								this.resetGame();
							}}>
							New game!
						</button>
					</div>
				) : (
					<div className="superboard">
						<div className="board-row">
							{this.renderSquare(0, this.state.turno)}
							{this.renderSquare(1, this.state.turno)}
							{this.renderSquare(2, this.state.turno)}
						</div>
						<div className="board-row">
							{this.renderSquare(3, this.state.turno)}
							{this.renderSquare(4, this.state.turno)}
							{this.renderSquare(5, this.state.turno)}
						</div>
						<div className="board-row">
							{this.renderSquare(6, this.state.turno)}
							{this.renderSquare(7, this.state.turno)}
							{this.renderSquare(8, this.state.turno)}
						</div>
					</div>
				)}
			</div>
		);
	}
}
Board.propTypes = {
	invisibleToogle: PropTypes.func
};

Square.propTypes = {
	player: PropTypes.func,
	onMarcar: PropTypes.func
};
