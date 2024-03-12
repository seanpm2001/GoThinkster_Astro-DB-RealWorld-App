import {column, db, User} from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
        {
            id: 1,
            email: 'foo@com',
            username: 'foo',
            password: 'bar',
            bio: 'all about us'
        }
    ]);
}

