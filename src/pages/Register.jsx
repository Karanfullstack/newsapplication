import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerUser } from "../store/slice/authSlice";
import InputError from "../common/InputError";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, data, err } = useSelector((state) => state.auth);

	// Submit handling logic
	const submit = async (data) => {
		try {
			const response = await dispatch(registerUser(data));
			if (response.type === "register/fulfilled") {
				navigate("/login");
			}
		} catch (error) {
			console.log("Error", error);
		}
	};

	return (
		<section className=" min-h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl mb-[40px] text-center p-3 flex justify-center">
				Hey! Create Account
			</h1>

			{/*  Form division starts here */}
			<section className="  w-full flex justify-center items-center">
				<form
					onSubmit={handleSubmit(submit)}
					encType="multipart/form-data"
					className=" space-y-3"
				>
					<InputError errors={errors} name={"name"} />
					<Input
						label="Name"
						placeholder="Name.."
						{...register("name", {
							required: "Name is required",
						})}
					/>
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

					<InputError errors={errors} name={"password_confirmation"} />
					<Input
						label="Confirm password"
						type="password"
						placeholder="Password.."
						{...register("password_confirmation", {
							required: "Confirmation password is required",
						})}
					/>
					{/* profile image upload */}
					<InputError errors={errors} name={"profile"} />
					<input
						type="file"
						className="file-input block w-full max-w-xs"
						{...register("profile", { required: "Profile is required" })}
						accept="image/png, image/jpg, image/jpeg, image/gif"
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
							Already Registered? <Link to={"/login"}> Login Here</Link>
						</span>
					</div>
				</form>
			</section>
		</section>
	);
}
