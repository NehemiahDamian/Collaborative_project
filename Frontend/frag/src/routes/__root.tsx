import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      {/* The Outlet component renders the child routes */}
      <Outlet />
      <Footer />
      {/* Devtools for debugging the router */}
      <TanStackRouterDevtools />
    </>
  ),
});
