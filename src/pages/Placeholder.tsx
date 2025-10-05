import Layout from "@/components/Layout";
import { useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.slice(1) || "page";

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-black mb-4 capitalize">{pageName}</h1>
          <p className="text-muted-foreground mb-8">
            This page is currently under construction. Continue the conversation
            to help build out this section with the content you need.
          </p>
          <div className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold">
            Coming Soon
          </div>
        </div>
      </div>
    </Layout>
  );
}
