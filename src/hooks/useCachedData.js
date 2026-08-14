import { useEffect, useState } from "react";
import api from "../api";

const CACHE_PREFIX = "udaan_cache_";

// Stale-while-revalidate: shows last-known data INSTANTLY (from localStorage,
// no loading flicker, no layout shift), then quietly fetches fresh data in
// the background and swaps it in when it arrives. If the network is down,
// the cached data just stays on screen — the page still works offline.
export function useCachedData(endpoint, fallback = []) {
  const cacheKey = CACHE_PREFIX + endpoint;

  const [data, setData] = useState(() => {
    try {
      const cached = localStorage.getItem(cacheKey);
      return cached ? JSON.parse(cached) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    let mounted = true;
    api.get(endpoint)
      .then((res) => {
        if (!mounted) return;
        setData(res.data);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(res.data));
        } catch {
          // storage full or unavailable — not critical, just skip caching
        }
      })
      .catch(() => {
        // Network/API failed — silently keep showing whatever is already
        // on screen (cached or fallback). No error banners, no blank states.
      });
    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return data;
}
