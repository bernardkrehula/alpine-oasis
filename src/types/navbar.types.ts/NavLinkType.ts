export type NavLinkType = {
  icon: { id: string; name: string; svg: React.ReactNode };
  reddirect: (value: string) => void;
};
