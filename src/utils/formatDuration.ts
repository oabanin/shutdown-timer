export function formatDuration(seconds: number): string {
  // Convert seconds into months, days, hours, minutes, and remaining seconds
  const months = Math.floor(seconds / (30 * 24 * 3600)); // Approximate 30 days per month
  seconds %= 30 * 24 * 3600;

  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Shortened labels for each unit
  const shortLabels: Record<string, string> = {
    month: "mo",
    day: "d",
    hour: "h",
    minute: "min",
    second: "s",
  };

  // Helper to format each unit with its short label
  const formatUnit = (
    value: number,
    unit: Intl.RelativeTimeFormatUnit,
  ): string | null => {
    if (value === 0) return null;

    // Extract the short unit abbreviation
    const shortLabel = shortLabels[unit] || unit;
    return `${value}${shortLabel}`;
  };

  // Translate each non-zero part
  const parts = [
    formatUnit(months, "month"),
    formatUnit(days, "day"),
    formatUnit(hours, "hour"),
    formatUnit(minutes, "minute"),
    formatUnit(remainingSeconds, "second"),
  ].filter(Boolean); // Filter out null values

  // Join parts with spaces
  return parts.join(" ");
}
