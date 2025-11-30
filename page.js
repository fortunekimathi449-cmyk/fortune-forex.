"use client";
import Chart from "../components/Chart";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Forex Dashboard</h1>
      <Chart />
      <NewsFeed />
    </main>
  );
}
