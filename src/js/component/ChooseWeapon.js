import React from "react";
import { Board } from "./Board";
import PropTypes from "prop-types";

export class ChooseWeapon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<h3 className="text-center text-white pick-a-weapon">
					Pick a Weapon
				</h3>
				<div>
					<div className="jugadores mb-3 d-flex justify-content-center ">
						<form>
							<div className="form-row">
								<div className="col-md-12 mb-3">
									<h4 className="text-center text-white">
										CHOOSE YOUR WEAPON
									</h4>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control"
										id="validationDefault01"
										placeholder="Player 1"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control"
										id="validationDefault02"
										placeholder="Player 2"
										required
									/>
								</div>
							</div>
							<div className="d-flex justify-content-around">
								<button
									className="btn btn-outline-secondary btn-lg"
									type="button">
									X
								</button>
								<button
									className="btn btn-outline-secondary btn-lg"
									onClick={this.props.visibleToggle}
									type="button">
									<i className="fas fa-play"></i>
									START
								</button>
								<button
									className="btn btn-outline-secondary btn-lg"
									type="button">
									{" "}
									O
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}
ChooseWeapon.propTypes = {
	visibleToggle: PropTypes.func
};
