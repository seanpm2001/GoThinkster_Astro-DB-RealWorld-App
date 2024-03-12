import {defineDb, defineTable, column} from 'astro:db';


/*
const Article = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        slug: column.text({unique: true}),
        title: column.text({}),
        description: column.text({}),
        body: column.text({}),
        createdAt: column.date({default: new Date()}),
        updatedAt: column.date({default: new Date()}),
        tagList: column.json({default: []}),
        authorId: column.number({references: () => User.columns.id}),
        favoritedBy: column.number({references: () => User.columns.id}),
        // comments: column.number({references: () => Comment.columns.id}),
    },
});



const Comment = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        body: column.text({}),
        createdAt: column.date({default: new Date()}),
        updatedAt: column.date({default: new Date()}),
        articleId: column.number({references: () => Article.columns.id}),
        authorId: column.number({references: () => User.columns.id}),
    },
});

const Tag = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        name: column.text({unique: true}),
        articles: column.number({references: () => Article.columns.id}),
    },
});

 */

export const User = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        email: column.text({unique: true}),
        username: column.text({unique: true}),
        password: column.text(),
        image: column.text({default: 'https://api.realworld.io/images/smiley-cyrus.jpeg'}),
        bio: column.text({}),
        demo: column.boolean({default: false}),
    },
});

// https://astro.build/db/config
export default defineDb({
    tables: { User}
});
