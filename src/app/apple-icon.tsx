import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C3829",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#F4EDE4",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          R
        </span>
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#B8704B",
            marginTop: 4,
            marginBottom: 6,
            opacity: 0.7,
          }}
        />
        <span
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#B8704B",
            letterSpacing: 6,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          RNG
        </span>
      </div>
    ),
    { ...size }
  );
}
