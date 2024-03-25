import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
export default function ConfettiComponent({ active }) {
	const [time, setTime] = useState(false);
	const [hasConfeti, setHasConfeti] = useState(false);
	const { status } = useSelector((state) => state.auth);
	useEffect(() => {
		setTime(true);
		const timeoutId = setTimeout(() => {
			setTime(false);
			setHasConfeti(false);
		}, 2500);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [time]);

	useEffect(() => {
		const sessionConfeti = sessionStorage.getItem("confettiShown");
		if (status && !sessionConfeti && !hasConfeti) {
			setHasConfeti(true);
			sessionStorage.setItem("confettiShown", "true");
		}
	}, [hasConfeti, status]);
	if (hasConfeti) {
		return <Confetti gravity={0.3} />;
	}
}
