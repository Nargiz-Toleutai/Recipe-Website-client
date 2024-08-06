export interface NavigationLinkProps {
  id: string;
  title: string;
  to: string;
  selected?: boolean;
  tokenRequired?: boolean | null;
}
