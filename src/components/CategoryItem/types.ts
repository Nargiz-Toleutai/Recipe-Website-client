export interface Category {
  id?: number;
  name: string;
  icon: string;
  onClick: () => void;
  isSelected: boolean;
}
