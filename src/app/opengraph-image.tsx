import { ImageResponse } from "next/og";

export const alt = "RNG Retirement Dignity — Education. Clarity. Dignity.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#1C3829",
          position: "relative",
        }}
      >
        {/* Subtle corner accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 60,
            height: 60,
            borderTop: "2px solid rgba(184, 112, 75, 0.4)",
            borderLeft: "2px solid rgba(184, 112, 75, 0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 60,
            height: 60,
            borderBottom: "2px solid rgba(184, 112, 75, 0.4)",
            borderRight: "2px solid rgba(184, 112, 75, 0.4)",
          }}
        />

        {/* Section label */}
        <span
          style={{
            fontSize: 14,
            color: "rgba(184, 112, 75, 0.7)",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            marginBottom: 32,
          }}
        >
          RNG Retirement Dignity
        </span>

        {/* Headline */}
        <span
          style={{
            fontSize: 72,
            color: "#F4EDE4",
            fontFamily: "Georgia, serif",
            lineHeight: 1.1,
            maxWidth: 800,
          }}
        >
          Understanding Your Future Shouldn&apos;t Be Complicated
        </span>

        {/* Copper rule */}
        <div
          style={{
            width: 120,
            height: 2,
            backgroundColor: "#B8704B",
            marginTop: 40,
            marginBottom: 28,
            opacity: 0.6,
          }}
        />

        {/* Subtext */}
        <span
          style={{
            fontSize: 20,
            color: "rgba(244, 237, 228, 0.5)",
            fontFamily: "system-ui, sans-serif",
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Education-first retirement and insurance planning for individuals,
          families, and public servants.
        </span>
      </div>
    ),
    { ...size }
  );
}
