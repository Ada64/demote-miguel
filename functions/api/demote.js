export async function onRequest(context) {
  const db = context.env.DB;
  if (context.request.method === "POST") {
    await db.prepare("INSERT INTO counter (id, count) VALUES (1, 1) ON CONFLICT(id) DO UPDATE SET count = count + 1;").run();
  }
  const { results } = await db.prepare("SELECT count FROM counter WHERE id = 1;").all();
  const count = results[0]?.count || 0;
  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" }
  });
} 