import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
const initialState = {
	loading: false,
	status: false,
	data: null,
	err: null,
};

export const registerUser = createAsyncThunk(
	"register",
	async (data, { rejectWithValue }) => {
		try {
			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("email", data.email);
			formData.append("password", data.password);
			formData.append("password_confirmation", data.password_confirmation);
			formData.append("profile", data.profile[0]);
			console.log(formData.get("profile"));
			const response = await axiosInstance.post("/api/auth/register", formData);
			console.log("responseData", response);
			toast.success(response.data?.message)

			return response.data;
		} catch (error) {
			console.log("errorData", error);
			toast.error(error.response?.data?.message);
			return rejectWithValue(error.response.data);
		}
	}
);

export const loginUser = createAsyncThunk(
	"login",
	async (data, { rejectWithValue }) => {
		try {
			const formData = new FormData();
			formData.append("email", data.email);
			formData.append("password", data.password);
			const response = await axiosInstance.post("/api/auth/login", formData);
			toast.success(response.data?.message);

			return response.data;
		} catch (error) {
			console.log(error);
			toast.error(error.response?.data?.message);
			return rejectWithValue(error.response.data);
		}
	}
);

export const logoutUser = createAsyncThunk("logout", async () => {
	try {
		const response = await axiosInstance.post("/api/auth/logout");
		return response.data;
	} catch (error) {
		throw error;
	}
});

export const currentUser = createAsyncThunk("currentUser", async () => {
	try {
		const response = await axiosInstance.get("/api/auth/current-user");
		return response.data;
	} catch (error) {
		throw error;
	}
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearErrors: (state) => {
			state.err = null;
			state.data ? (state.data.message = null) : null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.loading = false;
			state.err = null;
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.loading = false;
			state.err = action.payload;
		});
		builder.addCase(loginUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.status = true;
			state.err = null;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.loading = false;
			state.err = action.payload;
			state.data = null;
			state.status = false;
		});
		builder.addCase(logoutUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(logoutUser.fulfilled, (state) => {
			state.loading = false;
			state.data = null;
			state.status = false;
		});
		builder.addCase(currentUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(currentUser.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.err = null;
			state.status = true;
		});
		builder.addCase(currentUser.rejected, (state, action) => {
			state.loading = false;
			state.data = null;
			state.err = action.payload;
			state.status = false;
		});
	},
});

export default authSlice.reducer;
export const { clearErrors } = authSlice.actions;
