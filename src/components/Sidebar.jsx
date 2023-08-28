import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
	const route = useLocation().pathname;
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		setActiveLink(route);
	}, [route]);

	return (
		<aside className="bigAside">
			<h1>
				My <span>Collection</span>
			</h1>
			<hr />
			<ul>
				<li>
					<Link
						to="/"
						className={activeLink === "/" ? "active" : ""}
					>
						<i className="fa-solid fa-house"></i> <p>home</p>
					</Link>
				</li>
				<li>
					<Link
						to="/Coins"
						className={activeLink === "/Coins" ? "active" : ""}
					>
						<i className="fa-brands fa-bitcoin"></i>
						<p>Coins</p>
					</Link>
				</li>

				<li>
					<Link
						to="/Bills"
						className={activeLink === "/Bills" ? "active" : ""}
					>
						<i className="fa-solid fa-money-bill-wave"></i>
						<p>Bills</p>
					</Link>
				</li>
				<li>
					<Link
						to="/add"
						className={activeLink === "/add" ? "active" : ""}
					>
						<i className="fa-solid fa-plus"></i>
						<p>Add New</p>
					</Link>
				</li>
				<li>
					<Link
						to="/Settings"
						className={activeLink === "/Settings" ? "active" : ""}
					>
						<i className="fa-solid fa-gear"></i>
						<p>Settings</p>
					</Link>
				</li>
			</ul>
		</aside>
	);
}
