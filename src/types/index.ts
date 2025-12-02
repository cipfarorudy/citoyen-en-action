// Types partagés (extension future)
export interface MediaItem {
  id: string;
  title: string;
  type: "image" | "video";
  url: string;
  createdAt?: string;
}
