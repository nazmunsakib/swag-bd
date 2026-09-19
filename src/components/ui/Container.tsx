import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return <Tag className={`container-site ${className}`}>{children}</Tag>;
}