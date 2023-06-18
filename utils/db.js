import mongoose from 'mongoose';

const connect = async () => {
	try {
		await mongoose.connect(process.env.DB_API_KEY);
	} catch (err) {
		throw new Error('connection failed');
	}
};

export default connect;
