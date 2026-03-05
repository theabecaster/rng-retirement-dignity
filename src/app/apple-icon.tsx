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
          backgroundColor: "#0C1F3F",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          RDG
        </span>
        <div
          style={{
            width: 50,
            height: 2,
            backgroundColor: "#C9A84C",
            marginTop: 6,
            opacity: 0.7,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
