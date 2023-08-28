import React, { useEffect, useState } from "react";

export default function Home() {
	const [coinCount, setCoinCount] = useState(0);
	const [billCount, setBillCount] = useState(0);
	const array = [];

	useEffect(() => {
		const coins = JSON.parse(localStorage.getItem("database")).coins;
		const bills = JSON.parse(localStorage.getItem("database")).bills;
		setBillCount(bills.length);
		setCoinCount(coins.length);
	}, []);

	return (
		<div className="center">
			<div className="counter">
				<h1>
					{billCount} <span>Bills</span>
				</h1>
			</div>
			<div className="counter">
				<h1>
					{coinCount} <span>Coins</span>
				</h1>
			</div>
		</div>
	);
}
