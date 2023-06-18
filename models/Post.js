import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: String,
			require: true,
		},
		slug: {
			type: String,
			unique: true,
			require: true,
		},
		excerpt: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		content: {
			type: String,
			require: true,
		},
		auth: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);
