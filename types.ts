export interface NavItem {
  label: string;
  href: string;
}

export interface Instrument {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface Milestone {
  phase: string;
  title: string;
  status: 'completed' | 'active' | 'future';
  description: string;
}

export interface YieldDataPoint {
  month: string;
  yield: number;
  liquidity: number;
}
