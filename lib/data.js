export const RandomDataBooks = async (query, count) => {
  try {
    const res = await fetch(
      "https://buku.glitch.me/random?query=" + query + "&count=" + count
    );
    const data = await res.json();
    return data;
  } catch (ex) {
    throw new Error(ex);
  }
};
export const SearchDataBooks = async (query) => {
  try {
    const res = await fetch("https://buku.glitch.me/search?query=" + query);
    const data = await res.json();
    return data;
  } catch (ex) {
    throw new Error(ex);
  }
};

export const getDataById = async (id) => {
  try {
    const res = await fetch("https://buku.glitch.me/book/" + id);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
