import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import styles from "../styles/AddData.module.css";

const templates = {
	coin: {
		id: 1,
		country: "Dominican Republic",
		denomination: "50",
		year: 1954,
		composition: "Silver",
		weight: "20 grams",
		diameter: "35mm",
		condition: "Uncirculated",
		mintage: 10000,
		description:
			"Commemorative coin featuring national hero Juan Pablo Duarte.",
		images: [
			"https://example.com/coin_front.jpg",
			"https://example.com/coin_back.jpg",
		],
		certification: {
			graded: true,
			grading_company: "NGC",
			grade: "MS 65",
		},
		price: 150.0,
	},
	bill: {
		id: 1,
		denomination: 20,
		currency: "USD",
		serialNumber: "AB12345678",
		issueDate: "2021-05-01",
		condition: "Very Good",
		country: "United States",
		year: 2000,
	},
};

export default function AddData() {
	const [type, setType] = useState("");
	function handleChange(e) {
		setType(e.target.value);
	}

	return (
		<div className={styles.center}>
			<h1> Enter Coin/bill data</h1>
			<form
				action=""
				className={styles.UploadForm}
			>
				<div className={styles.photoInput}>
					<img
						src="https://fakeimg.pl/350x200/?text=World&font=lobster"
						alt="coin's photo"
					/>
					<div className={styles.UploadBtn}>
						<button>upload</button>
						<button>remove</button>
					</div>
				</div>
				<div className={styles.type}>
					<label htmlFor="type-select">Choose type:</label>
					<select
						name=""
						id="type-select"
						onChange={(e) => handleChange(e)}
					>
						<option value=""></option>
						<option value="bill">bill</option>
						<option value="coin">coin</option>
					</select>
				</div>
				{type === "" ? null : (
					<div className={styles.coinDetails}>
						<h2>Coin's Details</h2>
						{Object.keys(templates[type]).map((value, i) => {
							if (value === "id") return;
							return (
								<div
									key={`CD${i}`}
									className={styles.inputData}
								>
									<input
										type="text"
										required
									/>
									<div className={styles.underline}></div>
									<label htmlFor={`labelFor${value}`}>{value}</label>
								</div>
							);
						})}
					</div>
				)}
				<div className={styles.submitArea}>
					<button>Guardar</button>
				</div>
			</form>
		</div>
	);
}
