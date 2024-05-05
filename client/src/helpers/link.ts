const link = import.meta.env.PROD ? import.meta.env.VITE_API_LINK : "./api";

export const getLink = (item: "gift-cards" | "sales") => link + `/${item}`;
