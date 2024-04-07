import { type MetaFunction, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const data = await fetch(`${process.env.API_URL}/posts`);
  return data.json();
};

export default function Index() {
  const posts: { id: string; title: string }[] = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
