export interface IBlog {
  blogId: string;
  title: string;
  content: string;
  date: string;
}

export enum BlogMethod {
  View = 'view',
  Edit = 'edit',
  Create = 'create',
}
