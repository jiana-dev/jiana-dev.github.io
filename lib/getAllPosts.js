// TODO: Sort by date
function importAll(r) {
  return r.keys().map((fileName) => {
    return({
      link: fileName.replace(/^\./, "").replace(/\.mdx$/, ""),
      module: r(fileName)
    })
  });
}

export const posts = importAll(
  require.context("../pages/blog/", true, /\.mdx$/)
);

export const secretBlogPosts = importAll(
  require.context("../pages/secret_blog/", true, /\.mdx$/)
);

export const journalEntries = importAll(
  require.context("../pages/journal/", true, /\.mdx$/)
);
