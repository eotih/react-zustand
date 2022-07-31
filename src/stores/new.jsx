import create from "zustand";

export const useNewsStore = create((set) => ({
  news: [],
  loading: false,
  errorMessage: "",
  getNews: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch(
        "https://hn.algolia.com/api/v1/search?query=jobs"
      );
      const data = await response.json();
      set(() => ({ news: data.hits, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
