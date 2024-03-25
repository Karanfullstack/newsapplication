import { useSelector } from "react-redux";
import Card from "../components/Card";
export default function Home() {
	const { loading } = useSelector((state) => state.auth);

	return (
		<div>
			{loading ? (
				<span className="loading loading-dots loading-lg"></span>
			) : (
				<div className="grid grid-cols-3 justify-items-start mt-10 ">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			)}
		</div>
	);
}
