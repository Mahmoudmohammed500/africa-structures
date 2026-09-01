export interface FooterLink {
  translationKey: string;
  path: string;
}

export interface FooterColumn {
  id: number;
  titleKey: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    id: 1,

    titleKey: "footer.company.title",

    links: [
      {
        translationKey: "footer.company.home",
        path: "/",
      },
      {
        translationKey: "footer.company.about",
        path: "/about",
      },
      {
        translationKey: "footer.company.projects",
        path: "/projects",
      },
      {
        translationKey: "footer.company.contact",
        path: "/contact",
      },
    ],
  },

  {
    id: 2,

    titleKey: "footer.services.title",

    links: [
      {
        translationKey: "footer.services.greenhouses",
        path: "/projects#greenhouses",
      },
      {
        translationKey: "footer.services.products",
        path: "/products",
      },
      {
        translationKey: "footer.services.obor_outlet",
        path: "/marketing#marketing-obour",
      },
      {
        translationKey: "footer.services.marketing_fleet",
        path: "/marketing#marketing-fleet",
      },
    ],
  },
];