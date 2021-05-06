function importAll(r, sorted = true) {
  return r.keys().map((fileName) => {
    return({
      link: fileName.replace(/^\./, "").replace(/\.mdx$/, ""),
      module: r(fileName)
    })
  })
}

export function sortPosts(posts) {
  return posts.sort((a, b) => {
    return Date.parse(b.module.meta.date) - Date.parse(a.module.meta.date)
  })
}

export const posts = importAll(
  require.context("../pages/blog/", false, /\.mdx$/)
);

export const secretBlogPosts = importAll(
  require.context("../pages/secret_blog/", false, /\.mdx$/)
);

export const journalEntries = importAll(
  require.context("../pages/journal/", false, /\.mdx$/)
);

export const resources = importAll(
  require.context("../pages/resources/", false, /\.mdx$/)
);

export const library = importAll(
  require.context("../pages/resources/library/", false, /\.mdx$/)
);

export const financeBooks = importAll(
  require.context("../pages/resources/finance_books/", false, /\.mdx$/)
);

export const topics = importAll(
  require.context("../pages/resources/topics/", false, /\.mdx$/)
);

export const downloads = importAll(
  require.context("../pages/resources/downloads/", false, /\.mdx$/)
);

export const exercises = importAll(
  require.context("../pages/resources/exercises/", false, /\.mdx$/)
);
