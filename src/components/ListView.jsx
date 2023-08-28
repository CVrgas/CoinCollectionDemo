import React, { useState } from "react";
import styles from "../styles/ListView.module.css";

export default function ListView({ data }) {
	const maxItemPerPage = 10;

	const totalPages = Math.ceil(data.length / maxItemPerPage);
	const [currentPage, setCurrentPage] = useState(1);
	const itemToShow = data.slice(
		(currentPage - 1) * maxItemPerPage,
		currentPage * maxItemPerPage
	);
	return (
		<>
			<table className={styles.table}>
				<thead>
					<tr>
						<th></th>
						<th>Country</th>
						<th>denomination</th>
						<th>year</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{itemToShow.map((v, i) => {
						return (
							<tr key={i}>
								<td>{v.id}</td>
								<td>{v.country}</td>
								<td>${v.denomination}</td>
								<td>{v.year}</td>
								<td>
									<button>View</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className={styles.navigation}>
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<div>
					Page {currentPage} of {totalPages}
				</div>
				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</>
	);
}
