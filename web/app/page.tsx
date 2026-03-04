export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL || "https://api.luminaprime.com.br";
  let health: any = null;

  try {
    const res = await fetch(`${api}/health`, { cache: "no-store" });
    health = await res.json();
  } catch (e) {
    health = { ok: false, error: String(e) };
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Lumina Prime CRM</h1>
      <p>API: {api}</p>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </main>
  );
}
