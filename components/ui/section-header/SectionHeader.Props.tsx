export interface SectionHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SparkleHeaderProps {
  children?: React.ReactNode;
  className?: string;
  text: string;
  sparkleCount?: number;
  colors?: Colors;
  [key: string]: any;
}

export interface Colors {
  first: string;
  second: string;
}

export interface SparkleType {
  id: number;
  x: number;
  y: number;
  color: string;
  lifespan: number;
}
