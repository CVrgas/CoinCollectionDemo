import React from "react";
import styles from "../styles/popup.module.css";

export default function Popup({ selection, handleClose }) {
	if (selection === undefined) return;
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.closeBtn}>
					<button onClick={() => handleClose(undefined)}>
						<i className="fa-solid fa-xmark"></i>
					</button>
				</div>
				<p>
					<span>country</span>
					{selection.country}
				</p>
				<p>
					<span>id</span>
					{selection.id}
				</p>
			</div>
		</div>
	);
}
