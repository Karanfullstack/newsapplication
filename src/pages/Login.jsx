import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputError from "../common/InputError";
import { Link } from "react-router-dom";
import { currentUser, loginUser } from "../store/slice/authSlice";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.auth);

	// Submit login handling logic
	const submit = async (data) => {
		try {
			const response = await dispatch(loginUser(data));
			if (response.type === "login/fulfilled") {
				dispatch(currentUser());
			}
		} catch (error) {
			console.log("Catch Error", error);
		}
	};

	// useEffect(() => {
	// 	dispatch(clearErrors());
	// 	if (err?.message) toast.error(err.message);
	// 	if (data?.message) toast.success(data.message);
	// }, [data, err, dispatch]);

	return (
		<section className=" min-h-screen -mt-20 flex flex-col justify-center items-center">
			<h1 className="text-4xl mb-[25px] text-center p-3 flex justify-center">
				Hey! Login Account
			</h1>
			{/*  Form division starts here */}
			<section className="  w-full flex justify-center items-center">
				<form onSubmit={handleSubmit(submit)} className=" space-y-3">
					<InputError errors={errors} name={"email"} />
					<Input
						label="Email"
						type="email"
						placeholder="your@gmail.com"
						{...register("email", {
							required: "Email is required",
						})}
					/>

					<InputError errors={errors} name={"password"} />
					<Input
						label="Password"
						type="password"
						placeholder="Password.."
						{...register("password", {
							required: "Password is required",
						})}
					/>

					<div className="flex flex-col justify-center my-3">
						<button type="submit" disabled={loading} className="btn">
							Submit
							{loading && (
								<span className="loading loading-ring loading-md"></span>
							)}
						</button>
					</div>
					<div>
						<span>
							Don't have account <Link to={"/register"}> Login Here</Link>
						</span>
					</div>
				</form>
			</section>
		</section>
	);
}
