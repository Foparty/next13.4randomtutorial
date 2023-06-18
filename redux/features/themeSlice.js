import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	value: {
		isOn: true,
	},
};

export const theme = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		lightTheme: () => {

		},
	},
});
