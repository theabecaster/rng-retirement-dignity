import { ImageResponse } from "next/og";

export const alt = "Retirement Dignity Group — Education. Clarity. Dignity.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 100px",
          backgroundColor: "#0C1F3F",
          textAlign: "center",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            RDG
          </span>
          <div
            style={{
              width: 60,
              height: 2,
              backgroundColor: "#C9A84C",
              marginTop: 8,
              marginBottom: 12,
            }}
          />
        </div>

        {/* Title */}
        <span
          style={{
            fontSize: 48,
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            maxWidth: 700,
          }}
        >
          Retirement Dignity Group
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 18,
            color: "rgba(201, 168, 76, 0.9)",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: 4,
            marginTop: 24,
          }}
        >
          EDUCATION · CLARITY · DIGNITY
        </span>
      </div>
    ),
    { ...size }
  );
}
