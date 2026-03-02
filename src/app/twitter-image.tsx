import { ImageResponse } from "next/og";

export const alt = "RNG Retirement Dignity — Education. Clarity. Dignity.";
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
          backgroundColor: "#1C3829",
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
              marginTop: 8,
              marginBottom: 12,
            }}
          />
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#B8704B",
              letterSpacing: 10,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            RNG
          </span>
        </div>

        {/* Title */}
        <span
          style={{
            fontSize: 48,
            color: "#F4EDE4",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            maxWidth: 700,
          }}
        >
          Retirement Dignity
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 18,
            color: "rgba(125, 155, 130, 0.9)",
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
