import {
  ArrowUpLeft,
  Building2,
  CalendarDays,
  MapPin,
  Ruler,
  Route,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";

import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

import { aboutData } from "../../data/aboutData";

import "leaflet/dist/leaflet.css";
import "../../styles/CompanyLocation.css";


/* =========================================================
   Leaflet Marker Icon
========================================================= */

const companyIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],

  iconAnchor: [12, 41],

  popupAnchor: [1, -34],

  shadowSize: [41, 41],
});


/* =========================================================
   Company Location
========================================================= */

const CompanyLocation = () => {
  const { t } = useTranslation();

  const location = aboutData.location;

  /*
   * Current Africa Structures headquarters
   * Robbiki Leather City
   * Factories H4 - H5 - H6
   */
  const companyCoordinates = location.coordinates;

  return (
    <section
      id="company-location"
      className="company-location"
    >
      <div className="container">

        {/* =====================================================
            Section Heading
        ===================================================== */}

        <div className="company-location__heading">

          <SectionHeading
            eyebrow={t(
              location.sectionEyebrowKey
            )}
            title={t(
              location.sectionTitleKey
            )}
          />

        </div>


        {/* =====================================================
            Main Content
        ===================================================== */}

        <div className="company-location__layout">

          {/* ===================================================
              Information
          =================================================== */}

          <div className="company-location__info">

            {/* =================================================
                Intro
            ================================================= */}

            <div className="company-location__intro">

              <span className="company-location__eyebrow">
                {t(
                  location.introEyebrowKey
                )}
              </span>


              <h3 className="company-location__title">
                {t(
                  location.titleKey
                )}
              </h3>


              <div
                className="company-location__title-line"
                aria-hidden="true"
              />


              <p className="company-location__description">
                {t(
                  location.descriptionKey
                )}
              </p>

            </div>


            {/* =================================================
                Location Highlight
            ================================================= */}

            <div className="company-location__highlight">

              <div className="company-location__highlight-icon">

                <MapPin
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </div>


              <div className="company-location__highlight-content">

                <span>
                  {t(
                    location.highlightLabelKey
                  )}
                </span>


                <strong>
                  {t(
                    location.highlightTitleKey
                  )}
                </strong>


                <p>
                  {t(
                    location.highlightDescriptionKey
                  )}
                </p>

              </div>

            </div>


            {/* =================================================
                Details
            ================================================= */}

            <div className="company-location__details">

              {/* =================================================
                  Factories
              ================================================= */}

              <div className="location-detail">

                <div className="location-detail__icon">

                  <Building2
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </div>


                <div className="location-detail__content">

                  <span>
                    {t(
                      location.factoriesLabelKey
                    )}
                  </span>


                  <strong>
                    {t(
                      location.factoriesKey
                    )}
                  </strong>

                </div>

              </div>


              {/* =================================================
                  Area
              ================================================= */}

              <div className="location-detail">

                <div className="location-detail__icon">

                  <Ruler
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </div>


                <div className="location-detail__content">

                  <span>
                    {t(
                      location.areaLabelKey
                    )}
                  </span>


                  <strong>
                    {t(
                      location.areaKey
                    )}
                  </strong>

                </div>

              </div>


              {/* =================================================
                  Date
              ================================================= */}

              <div className="location-detail">

                <div className="location-detail__icon">

                  <CalendarDays
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </div>


                <div className="location-detail__content">

                  <span>
                    {t(
                      location.dateLabelKey
                    )}
                  </span>


                  <strong>
                    {t(
                      location.dateKey
                    )}
                  </strong>

                </div>

              </div>


              {/* =================================================
                  Roads / Access
              ================================================= */}

              <div className="location-detail">

                <div className="location-detail__icon">

                  <Route
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </div>


                <div className="location-detail__content">

                  <span>
                    {t(
                      location.accessLabelKey
                    )}
                  </span>


                  <strong>
                    {t(
                      location.accessKey
                    )}
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                Address Note
            ================================================= */}

            <div className="company-location__address">

              <div className="company-location__address-marker">

                <MapPin
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </div>


              <div>

                <span>
                  {t(
                    location.addressLabelKey
                  )}
                </span>


                <p>

                  {t(
                    location.addressKey
                  )}

                  <br />

                  {t(
                    location.addressLine2Key
                  )}

                  <br />

                  {t(
                    location.addressLine3Key
                  )}

                </p>

              </div>

            </div>

          </div>


          {/* ===================================================
              Map
          =================================================== */}

          <div className="company-location__map-card">

            {/* =================================================
                Map Header
            ================================================= */}

            <div className="company-location__map-header">

              <div className="company-location__map-header-info">

                <span>
                  {t(
                    location.mapLabelKey
                  )}
                </span>


                <strong>
                  {t(
                    location.mapTitleKey
                  )}
                </strong>

              </div>


              <div className="company-location__map-header-icon">

                <MapPin
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </div>

            </div>


            {/* =================================================
                Leaflet Map
            ================================================= */}

            <div className="company-location__map">

              <MapContainer
                center={[
                  companyCoordinates.lat,
                  companyCoordinates.lng,
                ]}
                zoom={14}
                scrollWheelZoom={false}
                zoomControl={true}
                className="company-location__leaflet"
              >

                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                <Marker
                  position={[
                    companyCoordinates.lat,
                    companyCoordinates.lng,
                  ]}
                  icon={companyIcon}
                >

                  <Popup>

                    <div className="company-location__popup">

                      <strong>
                        {t(
                          location.popupCompanyKey
                        )}
                      </strong>


                      <span>
                        {t(
                          location.popupCurrentKey
                        )}
                      </span>


                      <span>
                        {t(
                          location.popupLocationKey
                        )}
                      </span>


                      <span>
                        {t(
                          location.popupFactoriesKey
                        )}
                      </span>

                    </div>

                  </Popup>

                </Marker>

              </MapContainer>

            </div>


            {/* =================================================
                Map Footer
            ================================================= */}

            <div className="company-location__map-footer">

              <div className="company-location__map-status">

                <span
                  className="company-location__status-dot"
                />

                <span>
                  {t(
                    location.mapStatusKey
                  )}
                </span>

              </div>


              <a
                href={`https://www.google.com/maps/search/?api=1&query=${companyCoordinates.lat},${companyCoordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="company-location__maps-link"
              >

                {t(
                  location.mapsLinkKey
                )}

                <ArrowUpLeft
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


export default CompanyLocation;
