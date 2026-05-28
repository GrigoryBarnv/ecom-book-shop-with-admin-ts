import Layout from "@/components/Layout";

export default function OrdersPage() {
  return (
    <Layout>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Your Orders</h1>
        <p className="mt-4 text-slate-600">
          This is your order history placeholder. Add checkout and order summary flows to connect with the backend.
        </p>
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
          No orders yet. Place an order from the cart once checkout is enabled.
        </div>
      </div>
    </Layout>
  );
}
