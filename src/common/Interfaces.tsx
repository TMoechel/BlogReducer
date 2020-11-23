interface IBlog {
  id: number;
  title: string;
}

interface IBlogContext {
  data: IBlog[];
  addBlogPost: () => void;
  deleteBlogPost: (id: number) => void;
}
