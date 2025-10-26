import { neon } from '@netlify/neon';

export default async () => {
  const sql = neon(); // الاتصال بقاعدة بيانات Neon
  const orders = await sql`SELECT * FROM orders`; // جلب كل الطلبات

  return new Response(JSON.stringify(orders), {
    headers: { 'Content-Type': 'application/json' },
  });
};
