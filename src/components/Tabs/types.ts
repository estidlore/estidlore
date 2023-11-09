interface TabsProps<T> {
  data: T[];
  getTabName: (tab: T) => string;
  render: (tab: T, idx: number) => JSX.Element;
}

export type { TabsProps };
