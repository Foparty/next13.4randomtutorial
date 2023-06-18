import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import connect from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
	providers: [
		// Github({
		// 	clientId: process.env.GITHUB_ID,
		// 	clientSecret: process.env.GITHUB_SECRET,
		// }),
		Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			async authorize(credentials) {
				await connect();

				try {
					const user = await User.findOne({ email: credentials.email });

					if (user) {
						// 	check pass
						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password
						);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error('wrong crdedentials');
						}
					} else {
						throw new Error('user not found');
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		}),
	],
	pages: {
		error: '/dashboard/login',
	},
});

export { handler as GET, handler as POST };
