import { renderToString } from "react-dom/server";
import { StaticRoute } from "./App";

/** Rendered once per route at build time so the served HTML carries real content. */
export function renderRoute(path: string): string {
  return renderToString(<StaticRoute path={path} />);
}
