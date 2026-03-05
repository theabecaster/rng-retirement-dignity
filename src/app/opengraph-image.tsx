import { ImageResponse } from "next/og";

export const alt = "Retirement Dignity Group — Education. Clarity. Dignity.";
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
          backgroundColor: "#0C1F3F",
          position: "relative",
        }}
      >
        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 60,
            height: 60,
            borderTop: "2px solid rgba(201, 168, 76, 0.4)",
            borderLeft: "2px solid rgba(201, 168, 76, 0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 60,
            height: 60,
            borderBottom: "2px solid rgba(201, 168, 76, 0.4)",
            borderRight: "2px solid rgba(201, 168, 76, 0.4)",
          }}
        />

        {/* Section label */}
        <span
          style={{
            fontSize: 14,
            color: "rgba(201, 168, 76, 0.7)",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            marginBottom: 32,
          }}
        >
          Retirement Dignity Group
        </span>

        {/* Headline */}
        <span
          style={{
            fontSize: 72,
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            lineHeight: 1.1,
            maxWidth: 800,
          }}
        >
          Understanding Your Future Shouldn&apos;t Be Complicated
        </span>

        {/* Gold rule */}
        <div
          style={{
            width: 120,
            height: 2,
            backgroundColor: "#C9A84C",
            marginTop: 40,
            marginBottom: 28,
            opacity: 0.6,
          }}
        />

        {/* Subtext */}
        <span
          style={{
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.5)",
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
