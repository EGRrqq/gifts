export function formatDate(date: string) {
  const dateObj = new Date(date);

  const month = dateObj.toLocaleDateString("default", { month: "long" });
  const day = dateObj.toLocaleDateString("default", { day: "numeric" });
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}

export const dateDiff = (first: number, second: number) => {
  const daysDiff = Math.round((second - first) / (1000 * 60 * 60 * 24));
  return Math.abs(daysDiff);
};
