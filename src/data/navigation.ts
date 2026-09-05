export interface NavigationChild {
  labelKey: string;
  hash: string;
}

export interface NavigationItem {
  path: string;
  labelKey: string;
  children?: NavigationChild[];
}

export const navigationItems: NavigationItem[] = [
  {
    path: "/",
    labelKey: "nav.home",

    children: [
      {
        labelKey: "nav.homeSections.hero",
        hash: "hero",
      },
      {
        labelKey: "nav.homeSections.historical",
        hash: "about-overview",
      },
      {
        labelKey: "nav.homeSections.video",
        hash: "company-video",
      },
    ],
  },
{
  path: "/about",
  labelKey: "nav.about",

  children: [
    {
      labelKey: "nav.aboutSections.overview",
      hash: "about-intro",
    },
    {
      labelKey: "nav.aboutSections.vision",
      hash: "vision-goal",
    },
    {
      labelKey: "nav.aboutSections.location",
      hash: "company-location",
    },
  ],
},


  {
    path: "/sectors/tents",
    labelKey: "nav.tentsctor",

    children: [
      {
        labelKey: "nav.projectsSections.sectors",
        hash: "sectors",
      },
      {
        labelKey: "nav.projectsSections.greenhouses",
        hash: "greenhouses",
      },
    ],
  },

  {
    path: "/products",
    labelKey: "nav.products",
  },

  {
    path: "/quality-certificates",
    labelKey: "nav.quality_certificates",
  },

  {
    path: "/marketing",
    labelKey: "nav.marketing",

    children: [
      {
        labelKey: "nav.marketingSections.overview",
        hash: "marketing-overview",
      },
      {
        labelKey: "nav.marketingSections.system",
        hash: "marketing-system",
      },
      {
        labelKey: "nav.marketingSections.obour",
        hash: "marketing-obour",
      },
      {
        labelKey: "nav.marketingSections.community",
        hash: "marketing-community",
      },
      {
        labelKey: "nav.marketingSections.fleet",
        hash: "marketing-fleet",
      },
      {
        labelKey: "nav.marketingSections.gallery",
        hash: "marketing-gallery",
      },
    ],
  },

  {
    path: "/contact",
    labelKey: "nav.contact",
  },
];
