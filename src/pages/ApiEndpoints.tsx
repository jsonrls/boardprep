import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { apiBaseUrl, apiGet } from "@/lib/api";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Endpoint = {
  method: string;
  path: string;
};

type EndpointsResponse = {
  endpoints: Endpoint[];
};

const ApiEndpoints = () => {
  const [q, setQ] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["api-endpoints", apiBaseUrl],
    queryFn: () => apiGet<EndpointsResponse>("/system/endpoints"),
    staleTime: 60_000,
  });

  const endpoints = useMemo(() => {
    const all = data?.endpoints ?? [];
    const query = q.trim().toLowerCase();
    if (!query) return all;
    return all.filter(
      (e) =>
        e.path.toLowerCase().includes(query) ||
        e.method.toLowerCase().includes(query),
    );
  }, [data?.endpoints, q]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="API Endpoints"
        description="Live list of admin-backend API endpoints."
      />
      <Header />
      <main className="flex-1 px-6 pt-28 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              API Endpoints
            </h1>
            <p className="text-muted-foreground font-sans">
              Fetched from <span className="font-mono">{apiBaseUrl}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter by method or path (e.g. GET, /api/system)"
              className="max-w-xl"
            />
          </div>

          <div className="rounded-xl border border-border bg-card">
            <Table>
              <TableCaption>
                {isLoading
                  ? "Loading endpoints…"
                  : error
                    ? "Failed to load endpoints."
                    : `${endpoints.length} endpoint${endpoints.length === 1 ? "" : "s"}`}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Method</TableHead>
                  <TableHead>Path</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {endpoints.map((e) => (
                  <TableRow key={`${e.method}:${e.path}`}>
                    <TableCell className="font-mono font-semibold">
                      {e.method}
                    </TableCell>
                    <TableCell className="font-mono">{e.path}</TableCell>
                  </TableRow>
                ))}
                {!isLoading && !error && endpoints.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={2} className="text-muted-foreground">
                      No endpoints match your filter.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {error && (
            <p className="mt-4 text-sm text-destructive">
              {(error as any)?.message ||
                "Could not fetch endpoints. Ensure admin-backend is running and CORS allows this origin."}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiEndpoints;

