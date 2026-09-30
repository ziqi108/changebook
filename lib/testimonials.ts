export type ApproachPillar = {
  id: string;
  title: string;
  description: string;
};

// 替换原虚构评价区：改为教学方法说明，不编造任何用户、评分或社会证明
export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    id: 'classical-sources',
    title: 'Classical Sources',
    description:
      'Readings and lessons draw on the Zhouyi, the Xici (Great Commentary), and the commentarial tradition — not invented symbolism or private revelation.',
  },
  {
    id: 'practical-reflection',
    title: 'Practical Reflection',
    description:
      'Each hexagram is offered as a mirror for your own situation, accompanied by reflective questions rather than decrees about what you must do.',
  },
  {
    id: 'no-guarantees',
    title: 'No Guaranteed Predictions',
    description:
      'The I Ching is treated here as a tool for thoughtful self-cultivation, not a promise of specific future outcomes or certainty.',
  },
];
