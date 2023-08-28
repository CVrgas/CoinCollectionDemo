import React, { useEffect, useState } from "react";
import styles from "../styles/Coins.module.css";
import ListView from "../components/ListView";
import CardView from "../components/CardView";
import Popup from "../components/popup";

export default function Coins() {
	const [view, setView] = useState(false);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState();

	const toggleView = () => {
		setView((prevView) => !prevView);
	};
	const load = async () => {
		const response = JSON.parse(localStorage.getItem("database")).coins;
		setData([...response]);
	};
	const handleSearchChange = (e) => {
		if (e.target.value === "") {
			load();
			return;
		}
		setSearch(e.target.value);
	};
	const applySearch = async (e) => {
		if (e.code !== "Enter") return;
		try {
			const response = data.filter(
				(coin) =>
					coin.country.toLowerCase() === search.toLowerCase() ||
					coin.year == search
			);
			setData([...response]);
		} catch (e) {
			console.log("error Filtering coins", e.message);
		}
	};
	function selectData(id) {
		if (id === undefined) {
			setSelected(undefined);
			return;
		}
		setSelected(data.find((coin) => coin.id === id));
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="center">
			<Popup
				selection={selected}
				handleClose={selectData}
			/>
			<div className={styles.topbar}>
				<div className={styles.searchbar}>
					<input
						type="text"
						placeholder="Search..."
						id="search"
						onKeyDown={applySearch}
						onChange={handleSearchChange}
					/>
					<label htmlFor="search">
						<i className="fa-solid fa-magnifying-glass"></i>
					</label>
				</div>
				<div className={styles.view}>
					<input
						type="checkbox"
						onClick={toggleView}
					/>
					{view ? (
						<i className="fa-solid fa-table-cells-large"></i>
					) : (
						<i className="fa-solid fa-list"></i>
					)}
				</div>
			</div>
			<div className={styles.mainWindow}>
				<h1>My Coins</h1>
				{view ? (
					<ListView
						data={data}
						handleClick={selectData}
					/>
				) : (
					<CardView
						data={data}
						handleClick={selectData}
					/>
				)}
			</div>
		</div>
	);
}
