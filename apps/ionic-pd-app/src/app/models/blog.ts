export interface IBlog {
  blogId: string;
  blogInfo: IBlogInformation;
}

export interface IBlogInformation {
  title: string;
  content: string;
  tags: [];
  author: string;
  date: string;
}
