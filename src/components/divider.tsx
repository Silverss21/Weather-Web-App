interface DividerProps {
  color: string;
}

export const Divider = ({ color }: DividerProps) => {
  return <div className={`border-t border-${color} my-8`} />;
};
