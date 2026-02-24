import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productSidebar: [
    {
      type: 'category',
      label: 'Product',
      collapsed: false,
      items: [
        'product/overview',
        'product/prd',
        'product/roadmap',
      ],
    },
  ],
  architectureSidebar: [
    {
      type: 'category',
      label: 'Architecture Decisions',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/adr-001',
      ],
    },
  ],
  engineeringSidebar: [
    {
      type: 'category',
      label: 'Engineering',
      collapsed: false,
      items: [
        'engineering/getting-started',
        'engineering/repositories',
        'engineering/tech-stack',
      ],
    },
  ],
};

export default sidebars;
