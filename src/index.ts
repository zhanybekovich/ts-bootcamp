// Interfaces

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/300",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  createdAt: Date;
  author: Author;
}

const newPost: Post = {
  title: "Hello World",
  body: "This is my first post",
  tags: ["typescript", "javascript"],
  createdAt: new Date(),
  author: authorOne,
};

// as functions arguments
function createPost(post: Post): void {
  console.log(`Created post: ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// usage with arrays

let posts: Post[] = [];
posts.push(newPost);
posts.push({
  title: "Hello World 2",
  body: "This is my second post",
  tags: ["typescript", "javascript"],
  createdAt: new Date(),
  author: authorOne,
});

console.log(posts);
