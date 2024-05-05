export function formatDate(date: string) {
  const dateObj = new Date(date);

  const month = dateObj.toLocaleDateString("default", { month: "long" });
  const day = dateObj.toLocaleDateString("default", { day: "numeric" });
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}
