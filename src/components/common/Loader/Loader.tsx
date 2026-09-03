import { SyncLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SyncLoader
        color="#c89b3c"
        size={12}
        speedMultiplier={1}
      />
    </div>
  );
}