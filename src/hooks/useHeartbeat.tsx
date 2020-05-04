import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/redux/reducers";

export function useHeartbeat(cb: () => void) {
  const heartbeat = useSelector((s: RootState) => s.Heartbeat.heartbeat);
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heartbeat]);
}
