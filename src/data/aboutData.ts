export interface AboutData {
  intro: {
    eyebrowKey: string;
    titleKey: string;

    descriptionKey: string;
    detailsKey: string;

    imageAltKey: string;
    imageBrandKey: string;
    imageLabelKey: string;

    badgeLabelKey: string;
    badgeTitleKey: string;

    contentLabelKey: string;
    contentTitleKey: string;
    contentTitleHighlightKey: string;

    features: {
      quality: {
        labelKey: string;
        titleKey: string;
      };

      manufacturing: {
        labelKey: string;
        titleKey: string;
      };

      solutions: {
        labelKey: string;
        titleKey: string;
      };
    };
  };

  vision: {
    sectionEyebrowKey: string;
    sectionTitleKey: string;

    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
  };

  goal: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    footerKey: string;
  };

  location: {
    sectionEyebrowKey: string;
    sectionTitleKey: string;

    introEyebrowKey: string;
    titleKey: string;
    descriptionKey: string;

    highlightLabelKey: string;
    highlightTitleKey: string;
    highlightDescriptionKey: string;

    factoriesLabelKey: string;
    factoriesKey: string;

    areaLabelKey: string;
    areaKey: string;

    dateLabelKey: string;
    dateKey: string;

    accessLabelKey: string;
    accessKey: string;

    addressLabelKey: string;
    addressKey: string;
    addressLine2Key: string;
    addressLine3Key: string;

    mapLabelKey: string;
    mapTitleKey: string;
    mapStatusKey: string;

    popupCompanyKey: string;
    popupCurrentKey: string;
    popupLocationKey: string;
    popupFactoriesKey: string;

    mapsLinkKey: string;

    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

/* =========================================================
   ABOUT DATA
========================================================= */

export const aboutData: AboutData = {
  /* =======================================================
     INTRO
  ======================================================= */

  intro: {
    eyebrowKey: "aboutData.intro.eyebrow",

    titleKey: "aboutData.intro.title",

    descriptionKey: "aboutData.intro.description",

    detailsKey: "aboutData.intro.details",

    imageAltKey: "aboutData.intro.imageAlt",

    imageBrandKey: "aboutData.intro.imageBrand",

    imageLabelKey: "aboutData.intro.imageLabel",

    badgeLabelKey: "aboutData.intro.badgeLabel",

    badgeTitleKey: "aboutData.intro.badgeTitle",

    contentLabelKey: "aboutData.intro.contentLabel",

    contentTitleKey: "aboutData.intro.contentTitle",

    contentTitleHighlightKey:
      "aboutData.intro.contentTitleHighlight",

    features: {
      quality: {
        labelKey:
          "aboutData.intro.features.quality.label",

        titleKey:
          "aboutData.intro.features.quality.title",
      },

      manufacturing: {
        labelKey:
          "aboutData.intro.features.manufacturing.label",

        titleKey:
          "aboutData.intro.features.manufacturing.title",
      },

      solutions: {
        labelKey:
          "aboutData.intro.features.solutions.label",

        titleKey:
          "aboutData.intro.features.solutions.title",
      },
    },
  },

  /* =======================================================
     VISION
  ======================================================= */

  vision: {
    sectionEyebrowKey:
      "aboutData.vision.sectionEyebrow",

    sectionTitleKey:
      "aboutData.vision.sectionTitle",

    eyebrowKey:
      "aboutData.vision.eyebrow",

    titleKey:
      "aboutData.vision.title",

    descriptionKey:
      "aboutData.vision.description",
  },

  /* =======================================================
     GOAL
  ======================================================= */

  goal: {
    eyebrowKey:
      "aboutData.goal.eyebrow",

    titleKey:
      "aboutData.goal.title",

    descriptionKey:
      "aboutData.goal.description",

    footerKey:
      "aboutData.goal.footer",
  },

  /* =======================================================
     LOCATION
  ======================================================= */

  location: {
    sectionEyebrowKey:
      "aboutData.location.sectionEyebrow",

    sectionTitleKey:
      "aboutData.location.sectionTitle",

    introEyebrowKey:
      "aboutData.location.introEyebrow",

    titleKey:
      "aboutData.location.title",

    descriptionKey:
      "aboutData.location.description",

    highlightLabelKey:
      "aboutData.location.highlightLabel",

    highlightTitleKey:
      "aboutData.location.highlightTitle",

    highlightDescriptionKey:
      "aboutData.location.highlightDescription",

    factoriesLabelKey:
      "aboutData.location.factoriesLabel",

    factoriesKey:
      "aboutData.location.factories",

    areaLabelKey:
      "aboutData.location.areaLabel",

    areaKey:
      "aboutData.location.area",

    dateLabelKey:
      "aboutData.location.dateLabel",

    dateKey:
      "aboutData.location.date",

    accessLabelKey:
      "aboutData.location.accessLabel",

    accessKey:
      "aboutData.location.access",

    addressLabelKey:
      "aboutData.location.addressLabel",

    addressKey:
      "aboutData.location.address",

    addressLine2Key:
      "aboutData.location.addressLine2",

    addressLine3Key:
      "aboutData.location.addressLine3",

    mapLabelKey:
      "aboutData.location.mapLabel",

    mapTitleKey:
      "aboutData.location.mapTitle",

    mapStatusKey:
      "aboutData.location.mapStatus",

    popupCompanyKey:
      "aboutData.location.popupCompany",

    popupCurrentKey:
      "aboutData.location.popupCurrent",

    popupLocationKey:
      "aboutData.location.popupLocation",

    popupFactoriesKey:
      "aboutData.location.popupFactories",

    mapsLinkKey:
      "aboutData.location.mapsLink",

    coordinates: {
lat: 30.173467550482798, 
lng: 31.769100630824166,
    },
  },
};

export default aboutData;
