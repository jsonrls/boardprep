import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

export type ContentBlock = {
  id: string;
  key: string;
  value: string;
  page?: string | null;
};

const normalize = (value?: string | null) => (value ?? "").trim().toLowerCase();

export function useContentBlocks(page?: string) {
  const { data, isLoading, error } = useQuery<ContentBlock[]>({
    queryKey: ["content-blocks"],
    queryFn: async () => {
      const res = await api.get("/contentblock");
      return res.data;
    },
    retry: 1,
    staleTime: 60_000,
  });

  const blockMap = useMemo(() => {
    const targetPage = normalize(page);
    const map = new Map<string, string>();

    for (const block of data ?? []) {
      const blockPage = normalize(block.page);
      const key = normalize(block.key);
      if (!key) continue;

      // Accept global blocks for all pages, and page-specific blocks for the requested page.
      const matchesPage =
        !targetPage ||
        !blockPage ||
        blockPage === "global" ||
        blockPage === targetPage;

      if (matchesPage) {
        map.set(key, block.value);
      }
    }

    return map;
  }, [data, page]);

  const get = (key: string, fallback: string) =>
    blockMap.get(normalize(key)) ?? fallback;

  return {
    blocks: data ?? [],
    get,
    isLoading,
    error,
  };
}
