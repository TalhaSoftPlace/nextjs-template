import { Country, State } from "@/enums/auth";
import { countryType } from "@/types";
import personalDetailsIcon from "@/assets/personel-details-icon.png";
import securityIcon from "@/assets/security-icon.png";
import locationIcon from "@/assets/location-icon.png";
import paymentIcon from "@/assets/payments-icon.png";
import notificationIcon from "@/assets/notifications-icon.png";

// categoray images
import HomeIcon from "@/assets/categories/Household-icon.png";
import AntiqueIcon from "@/assets/categories/Antique-icon.png";
import CraftIcon from "@/assets/categories/Craft-icon.png";
import OfficIcon from "@/assets/categories/office&commercial-icon.png";
import CarAccessories from "@/assets/categories/car-accessories-icon.png";
import ComputerNetworksIcon from "@/assets/categories/computer-networks-icon.png";
import MobileIcons from "@/assets/categories/mobile-landline-radio-icon.png";
import AudioIcon from "@/assets/categories/audio-tv-video.png";
import MoviesIcon from "@/assets/categories/movies-icon.png";
import GameIcon from "@/assets/categories/games-icon.png";
import MusicIcon from "@/assets/categories/music-instruments.png";
import BooksIcon from "@/assets/categories/Books-Comics-icon.png";
import ClothingIcon from "@/assets/categories/Clothing-Accessories-icon.png";
import CosmeticsIcon from "@/assets/categories/cosmetics-care-icon.png";
import WatchesIcon from "@/assets/categories/watches-jewellery-icon.png";
import ChildIcon from "@/assets/categories/Child-Baby-icon.png";
import ToysIcon from "@/assets/categories/toys-crafts-icon.png";
import ModelIcon from "@/assets/categories/Model-macking-icon.png";
import SportIcon from "@/assets/categories/sport.png";
import CollectIcon from "@/assets/categories/collect-rare-icon.png";
import TicketsIcon from "@/assets/categories/tickets-vouchers.png";
import PhotoIcon from "@/assets/categories/photos-icon.png";
import AnimalsIcon from "@/assets/categories/Animal-accessories-icon.png";
import VehiclesIcon from "@/assets/categories/Vehicles-icon.png";
// categoray images

import { generateBenchesSpecificationFields } from "@/components/createOffer/specifications/benches-specifications-form-fields";
import { FilterField } from "@/enums";

export const countryList: countryType = {
  [Country.Swizterland]: {
    [State.state]: [
      {
        label: "Zürich",
        value: "Zürich",
        key: "Zürich",
      },
      {
        label: "Bern",
        value: "Bern",
        key: "Bern",
      },
      {
        label: "Luzern",
        value: "Luzern",
        key: "Luzern",
      },
      {
        label: "Uri",
        value: "Uri",
        key: "Uri",
      },
      {
        label: "Schwyz",
        value: "Schwyz",
        key: "Schwyz",
      },
      {
        label: "Obwalden",
        value: "Obwalden",
        key: "Obwalden",
      },
      {
        label: "Nidwalden",
        value: "Nidwalden",
        key: "Nidwalden",
      },
      {
        label: "Glarus",
        value: "Glarus",
        key: "Glarus",
      },
      {
        label: "Zug",
        value: "Zug",
        key: "Zug",
      },
      {
        label: "Fribourg",
        value: "Fribourg",
        key: "Fribourg",
      },
      {
        label: "Solothurn",
        value: "Solothurn",
        key: "Solothurn",
      },
      {
        label: "Basel",
        value: "Basel",
        key: "Basel",
      },
      {
        label: "Schaffhausen",
        value: "Schaffhausen",
        key: "Schaffhausen",
      },
      {
        label: "Appenzell Ausserrhoden",
        value: "Appenzell Ausserrhoden",
        key: "Appenzell Ausserrhoden",
      },
      {
        label: "Appenzell Innerrhoden",
        value: "Appenzell Innerrhoden",
        key: "Appenzell Innerrhoden",
      },
      {
        label: "St. Gallen",
        value: "St. Gallen",
        key: "St. Gallen",
      },
      {
        label: "Graubünden",
        value: "Graubünden",
        key: "Graubünden",
      },
      {
        label: "Aargau",
        value: "Aargau",
        key: "Aargau",
      },
      {
        label: "Thurgau",
        value: "Thurgau",
        key: "Thurgau",
      },
      {
        label: "Ticino",
        value: "Ticino",
        key: "Ticino",
      },
      {
        label: "Vaud",
        value: "Vaud",
        key: "Vaud",
      },
      {
        label: "Valais",
        value: "Valais",
        key: "Valais",
      },
      {
        label: "Neuchâtel",
        value: "Neuchâtel",
        key: "Neuchâtel",
      },
      {
        label: "Genève",
        value: "Genève",
        key: "Genève",
      },
      {
        label: "Jura",
        value: "Jura",
        key: "Jura",
      },
    ],
  },
  [Country.Germany]: {
    [State.state]: [
      {
        label: "Baden-Württemberg",
        value: "Baden-Württemberg",
        key: "Baden-Württemberg",
      },
      {
        label: "Bavaria",
        value: "Bavaria",
        key: "Bavaria",
      },
      {
        label: "Berlin",
        value: "Berlin",
        key: "Berlin",
      },
      {
        label: "Brandenburg",
        value: "Brandenburg",
        key: "Brandenburg",
      },
      {
        label: "Bremen",
        value: "Bremen",
        key: "Bremen",
      },
      {
        label: "Hamburg",
        value: "Hamburg",
        key: "Hamburg",
      },
      {
        label: "Hesse",
        value: "Hesse",
        key: "Hesse",
      },
      {
        label: "Lower Saxony",
        value: "Lower Saxony",
        key: "Lower Saxony",
      },
      {
        label: "Mecklenburg-Vorpommern",
        value: "Mecklenburg-Vorpommern",
        key: "Mecklenburg-Vorpommern",
      },
      {
        label: "North Rhine-Westphalia",
        value: "North Rhine-Westphalia",
        key: "North Rhine-Westphalia",
      },
      {
        label: "Rhineland-Palatinate",
        value: "Rhineland-Palatinate",
        key: "Rhineland-Palatinate",
      },
      {
        label: "Saarland",
        value: "Saarland",
        key: "Saarland",
      },
      {
        label: "Saxony",
        value: "Saxony",
        key: "Saxony",
      },
      {
        label: "Saxony-Anhalt",
        value: "Saxony-Anhalt",
        key: "Saxony-Anhalt",
      },
      {
        label: "Schleswig-Holstein",
        value: "Schleswig-Holstein",
        key: "Schleswig-Holstein",
      },
      {
        label: "Thuringia",
        value: "Thuringia",
        key: "Thuringia",
      },
    ],
  },
  [Country.Austria]: {
    [State.state]: [
      {
        label: "Burgenland",
        value: "Burgenland",
        key: "Burgenland",
      },
      {
        label: "Carinthia",
        value: "Carinthia",
        key: "Carinthia",
      },
      {
        label: "Lower Austria",
        value: "Lower Austria",
        key: "Lower Austria",
      },
      {
        label: "Upper Austria",
        value: "Upper Austria",
        key: "Upper Austria",
      },
      {
        label: "Salzburg",
        value: "Salzburg",
        key: "Salzburg",
      },
      {
        label: "Styria",
        value: "Styria",
        key: "Styria",
      },
      {
        label: "Tyrol",
        value: "Tyrol",
        key: "Tyrol",
      },
      {
        label: "Vorarlberg",
        value: "Vorarlberg",
        key: "Vorarlberg",
      },
      {
        label: "Vienna",
        value: "Vienna",
        key: "Vienna",
      },
    ],
  },
  [Country.Italy]: {
    [State.state]: [
      {
        label: "Abruzzo",
        value: "Abruzzo",
        key: "Abruzzo",
      },
      {
        label: "Aosta Valley",
        value: "Aosta Valley",
        key: "Aosta Valley",
      },
      {
        label: "Apulia",
        value: "Apulia",
        key: "Apulia",
      },
      {
        label: "Basilicata",
        value: "Basilicata",
        key: "Basilicata",
      },
      {
        label: "Calabria",
        value: "Calabria",
        key: "Calabria",
      },
      {
        label: "Campania",
        value: "Campania",
        key: "Campania",
      },
      {
        label: "Emilia-Romagna",
        value: "Emilia-Romagna",
        key: "Emilia-Romagna",
      },
      {
        label: "Friuli Venezia Giulia",
        value: "Friuli Venezia Giulia",
        key: "Friuli Venezia Giulia",
      },
      {
        label: "Lazio",
        value: "Lazio",
        key: "Lazio",
      },
      {
        label: "Liguria",
        value: "Liguria",
        key: "Liguria",
      },
      {
        label: "Lombardy",
        value: "Lombardy",
        key: "Lombardy",
      },
      {
        label: "Marche",
        value: "Marche",
        key: "Marche",
      },
      {
        label: "Molise",
        value: "Molise",
        key: "Molise",
      },
      {
        label: "Piedmont",
        value: "Piedmont",
        key: "Piedmont",
      },
      {
        label: "Sardinia",
        value: "Sardinia",
        key: "Sardinia",
      },
      {
        label: "Sicily",
        value: "Sicily",
        key: "Sicily",
      },
      {
        label: "Trentino-Alto Adige",
        value: "Trentino-Alto Adige",
        key: "Trentino-Alto Adige",
      },
      {
        label: "Tuscany",
        value: "Tuscany",
        key: "Tuscany",
      },
      {
        label: "Umbria",
        value: "Umbria",
        key: "Umbria",
      },
      {
        label: "Veneto",
        value: "Veneto",
        key: "Veneto",
      },
    ],
  },
  [Country.France]: {
    [State.state]: [
      {
        label: "Zürich",
        value: "Zürich",
        key: "Zürich",
      },
      {
        label: "Bern",
        value: "Bern",
        key: "Bern",
      },
      {
        label: "Luzern",
        value: "Luzern",
        key: "Luzern",
      },
      {
        label: "Uri",
        value: "Uri",
        key: "Uri",
      },
      {
        label: "Schwyz",
        value: "Schwyz",
        key: "Schwyz",
      },
      {
        label: "Obwalden",
        value: "Obwalden",
        key: "Obwalden",
      },
      {
        label: "Nidwalden",
        value: "Nidwalden",
        key: "Nidwalden",
      },
      {
        label: "Glarus",
        value: "Glarus",
        key: "Glarus",
      },
      {
        label: "Zug",
        value: "Zug",
        key: "Zug",
      },
      {
        label: "Fribourg",
        value: "Fribourg",
        key: "Fribourg",
      },
      {
        label: "Solothurn",
        value: "Solothurn",
        key: "Solothurn",
      },
      {
        label: "Basel",
        value: "Basel",
        key: "Basel",
      },
      {
        label: "Schaffhausen",
        value: "Schaffhausen",
        key: "Schaffhausen",
      },
      {
        label: "Appenzell Ausserrhoden",
        value: "Appenzell Ausserrhoden",
        key: "Appenzell Ausserrhoden",
      },
      {
        label: "Appenzell Innerrhoden",
        value: "Appenzell Innerrhoden",
        key: "Appenzell Innerrhoden",
      },
      {
        label: "St. Gallen",
        value: "St. Gallen",
        key: "St. Gallen",
      },
      {
        label: "Graubünden",
        value: "Graubünden",
        key: "Graubünden",
      },
      {
        label: "Aargau",
        value: "Aargau",
        key: "Aargau",
      },
      {
        label: "Thurgau",
        value: "Thurgau",
        key: "Thurgau",
      },
      {
        label: "Ticino",
        value: "Ticino",
        key: "Ticino",
      },
      {
        label: "Vaud",
        value: "Vaud",
        key: "Vaud",
      },
      {
        label: "Valais",
        value: "Valais",
        key: "Valais",
      },
      {
        label: "Neuchâtel",
        value: "Neuchâtel",
        key: "Neuchâtel",
      },
      {
        label: "Genève",
        value: "Genève",
        key: "Genève",
      },
      {
        label: "Jura",
        value: "Jura",
        key: "Jura",
      },
    ],
  },
};
export const staticEnums = {
  User: {
    role: {
      Admin: 0,
      Private: 1,
      Commercial: 2,
    },
    salutation: {
      Mr: 0,
      Ms: 1,
      Other: 2,
    },
    accountStatus: {
      blocked: 0,
      active: 1,
      deactivated: 2,
    },
    oAuthIds: {
      google: "google",
      facebook: "facebook",
      apple: "apple",
    },
    idVerificationStatus: {
      notSubmitted: 0,
      submittedProcessing: 1,
      approved: 2,
      rejected: 3,
    },
  },
  OTP: {
    purpose: {
      resetPwd: 0,
      emailVerification: 1,
      phoneVerification: 2,
    },
  },
  IdVerificationRequest: {
    typeOfDocument: {
      drivingLicense: 0,
      passport: 1,
      idCard: 2,
    },
    status: {
      pending: 0,
      approved: 1,
      rejected: 2,
      deprecated: 3,
    },
  },
  CommercialSellerRequest: {
    status: {
      pending: 0,
      approved: 1,
      rejected: 2,
    },
  },
  gender: {
    Male: 0,
    Female: 1,
    Other: 2,
  },
};
export const USER_ACCOUNT_CARDS = [
  {
    link: "/user-account-settings/personal-details",
    imageSrc: personalDetailsIcon,
    imageAlt: "~user_account_setting.personal_details.heading",
    title: "~user_account_setting.personal_details.heading",
    description: "~user_account_setting.personal_details.description",
    role: [0, 1],
  },
  {
    link: "/user-account-settings/login-and-security-settings",
    imageSrc: securityIcon,
    imageAlt: "~user_account_setting.registration_and_security.heading",
    title: "~user_account_setting.registration_and_security.heading",
    description: "~user_account_setting.registration_and_security.description",
    role: [1, 2],
  },
  {
    link: "/user-account-settings/address-settings",
    imageSrc: locationIcon,
    imageAlt: "~user_account_setting.address_settings.heading",
    title: "~user_account_setting.address_settings.heading",
    description: "~user_account_setting.address_settings.description",
    role: [1, 2],
  },
  {
    link: "/user-account-settings/payment-settings",
    imageSrc: paymentIcon,
    imageAlt: "~user_account_setting.Payments.heading",
    title: "~user_account_setting.Payments.heading",
    description: "~user_account_setting.Payments.description",
    role: [1, 2],
  },
  {
    link: "/user-account-settings/notification-settings",
    imageSrc: notificationIcon,
    imageAlt: "~user_account_setting.notifications.heading",
    title: "~user_account_setting.notifications.heading",
    description: "~user_account_setting.notifications.description",
    role: [1, 2],
  },
  {
    link: "/user-account-settings/commercial-seller",
    imageSrc: notificationIcon,
    imageAlt: "~user_account_setting.company_details.heading",
    title: "~user_account_setting.company_details.heading",
    description: "~user_account_setting.company_details.heading",
    role: [2],
  },
];
2;
export const category = [
  {
    id: 1,
    name: "Household & Living",
    icon: HomeIcon,
    subCategory: [
      {
        id: 1,
        name: "Bathrooms",
        specification: generateBenchesSpecificationFields,
      },
      {
        id: 1,
        name: "Benches",
      },
      {
        id: 1,
        name: "Buffet",
      },
      {
        id: 1,
        name: "Blankets",
      },
      {
        id: 1,
        name: "Decorations & Accessories",
      },
      {
        id: 1,
        name: "Design classics",
      },
      {
        id: 1,
        name: "Wardrobe, Cellar & Shelves",
      },
      {
        id: 1,
        name: "Tableware & Glasses",
      },
      {
        id: 1,
        name: "Household appliances & kitchenware",
      },
      {
        id: 1,
        name: "Stools",
      },
      {
        id: 1,
        name: "Coffee & Espresso Machines",
      },
      {
        id: 1,
        name: "Pillows",
      },
      {
        id: 1,
        name: "Air Conditioners & Fans",
      },
      {
        id: 1,
        name: "Cooking & Baking",
      },
      {
        id: 1,
        name: "Chests of drawers",
      },
      {
        id: 1,
        name: "Kitchens",
      },
      {
        id: 1,
        name: "Refrigerators & Freezers",
      },
      {
        id: 1,
        name: "Lamps & Lighting",
      },
      {
        id: 1,
        name: "Loungers & recliners",
      },
      {
        id: 1,
        name: "Shelves",
      },
      {
        id: 1,
        name: "Bedroom",
      },
      {
        id: 1,
        name: "Dressing Tables",
      },
      {
        id: 1,
        name: "Desks",
      },
      {
        id: 1,
        name: "Cabinets",
      },
      {
        id: 1,
        name: "Serving trolley",
      },
      {
        id: 1,
        name: "armchairs",
      },
      {
        id: 1,
        name: "Sofas",
      },
      {
        id: 1,
        name: "Other for household & living",
      },
      {
        id: 1,
        name: "Mirrors",
      },
      {
        id: 1,
        name: "Chairs",
      },
      {
        id: 1,
        name: "TV Furniture",
      },
      {
        id: 1,
        name: "Carpets & Curtains",
      },
      {
        id: 1,
        name: "Tables",
      },
      {
        id: 1,
        name: "Table set",
      },
      {
        id: 1,
        name: "Display cases",
      },
    ],
  },
  {
    id: 2,
    name: "Antiques & Art",
    icon: AntiqueIcon,
    subCategory: [
      {
        id: 2,
        name: "Antique clothing",
      },
      {
        id: 2,
        name: "Antique Musical Instruments",
      },
      {
        id: 2,
        name: "Antique Toys",
      },
      {
        id: 2,
        name: "Antique Technology & Appliances",
      },
      {
        id: 2,
        name: "Antique Furniture & Furnishings",
      },
      {
        id: 2,
        name: "Antique Jewelry",
      },
      {
        id: 2,
        name: "Antique Books",
      },
      {
        id: 2,
        name: "Cutlery",
      },
      {
        id: 2,
        name: "Tins",
      },
      {
        id: 2,
        name: "Figures",
      },
      {
        id: 2,
        name: "Bottles",
      },
      {
        id: 2,
        name: "Photography & Posters",
      },
      {
        id: 2,
        name: "Place settings & Sets",
      },
      {
        id: 2,
        name: "Glasses",
      },
      {
        id: 2,
        name: "Household linen",
      },
      {
        id: 2,
        name: "International Art",
      },
      {
        id: 2,
        name: "Coffee & Tea Sets",
      },
      {
        id: 2,
        name: "Carafes",
      },
      {
        id: 2,
        name: "Candlesticks",
      },
      {
        id: 2,
        name: "Artist supplies",
      },
      {
        id: 2,
        name: "Painting & Graphics",
      },
      {
        id: 2,
        name: "Dolls & Accessories",
      },
      {
        id: 2,
        name: "Etchings & Drawings",
      },
      {
        id: 2,
        name: "Bowls & dishes",
      },
      {
        id: 2,
        name: "Sculptures",
      },
      {
        id: 2,
        name: "Other Antiques & Art",
      },
      {
        id: 2,
        name: "Engravings",
      },
      {
        id: 2,
        name: "Plates",
      },
      {
        id: 2,
        name: "Vases",
      },
    ],
  },
  {
    id: 3,
    name: "Craft & Garden",
    icon: CraftIcon,
    subCategory: [
      {
        id: 3,
        name: "Building materials",
      },
      {
        id: 3,
        name: "Flooring",
      },
      {
        id: 3,
        name: "Fireplace & Stove",
      },
      {
        id: 3,
        name: "Hardware",
      },
      {
        id: 3,
        name: "Electrical material",
      },
      {
        id: 3,
        name: "Paints & Varnish",
      },
      {
        id: 3,
        name: "Garden decorations",
      },
      {
        id: 3,
        name: "Garden tools",
      },
      {
        id: 3,
        name: "Garden furniture",
      },
      {
        id: 3,
        name: "Barbecue accessories",
      },
      {
        id: 3,
        name: "Home technology",
      },
      {
        id: 3,
        name: "Plants & Seeds",
      },
      {
        id: 3,
        name: "Cleaning equipment",
      },
      {
        id: 3,
        name: "Slide",
      },
      {
        id: 3,
        name: "Sanitary equipment",
      },
      {
        id: 3,
        name: "Swing",
      },
      {
        id: 3,
        name: "Safety equipment",
      },
      {
        id: 3,
        name: "Solar equipment and products",
      },
      {
        id: 3,
        name: "Other for the garden",
      },
      {
        id: 3,
        name: "Playhouse",
      },
      {
        id: 3,
        name: "Trampoline",
      },
      {
        id: 3,
        name: "Shelters",
      },
      {
        id: 3,
        name: "Wellness",
      },
      {
        id: 3,
        name: "Tools",
      },
      {
        id: 3,
        name: "Walls & Ceilings",
      },
    ],
  },
  {
    id: 4,
    name: "Office & Commercial",
    icon: OfficIcon,
    subCategory: [
      {
        id: 4,
        name: "Agriculture, Forestry & Construction",
      },
      {
        id: 4,
        name: "All Machines",
      },
      {
        id: 4,
        name: "Workwear & Protection",
      },
      {
        id: 4,
        name: "Handicapped & senior friendly",
      },
      {
        id: 4,
        name: "Office, Papers & Envelopes",
      },
      {
        id: 4,
        name: "Office supplies",
      },
      {
        id: 4,
        name: "Office furniture",
      },
      {
        id: 4,
        name: "Office Technology",
      },
      {
        id: 4,
        name: "Corporate events & parties",
      },
      {
        id: 4,
        name: "Gastronomy & Hotel",
      },
      {
        id: 4,
        name: "Wholesale & Remnants",
      },
      {
        id: 4,
        name: "Industrial supplies & electronics",
      },
      {
        id: 4,
        name: "Calendars & Agendas",
      },
      {
        id: 4,
        name: "Writing & Drawing",
      },
      {
        id: 4,
        name: "School supplies",
      },
      {
        id: 4,
        name: "Other trade",
      },
      {
        id: 4,
        name: "Other for office & business",
      },
    ],
  },
  {
    id: 5,
    name: "Vehicles",
    icon: VehiclesIcon,
    subCategory: [
      {
        id: 5,
        name: "Cars",
      },
      {
        id: 5,
        name: "Motorcycles",
      },
      {
        id: 5,
        name: "Commercial vehicle",
      },
      {
        id: 5,
        name: "Other vehicles",
      },
    ],
  },
  {
    id: 6,
    name: "Car accessories",
    icon: CarAccessories,
    subCategory: [
      {
        id: 6,
        name: "Alarm systems",
      },
      {
        id: 6,
        name: "Trailer accessories",
      },
      {
        id: 6,
        name: "Exhaust systems",
      },
      {
        id: 6,
        name: "Car spare parts",
      },
      {
        id: 6,
        name: "Car tuning",
      },
      {
        id: 6,
        name: "Car accessories",
      },
      {
        id: 6,
        name: "Boat accessories",
      },
      {
        id: 6,
        name: "Camping accessories",
      },
      {
        id: 6,
        name: "Car Hifi",
      },
      {
        id: 6,
        name: "Services & Repairs",
      },
      {
        id: 6,
        name: "Electric",
      },
      {
        id: 6,
        name: "Fan articles",
      },
      {
        id: 6,
        name: "Rims, tires & wheels",
      },
      {
        id: 6,
        name: "Remote controls",
      },
      {
        id: 6,
        name: "Helmets & Protection",
      },
      {
        id: 6,
        name: "Moped accessories",
      },
      {
        id: 6,
        name: "Engines",
      },
      {
        id: 6,
        name: "Motorcycle clothing",
      },
      {
        id: 6,
        name: "Motorcycle spare parts",
      },
      {
        id: 6,
        name: "Motorcycle accessories",
      },
      {
        id: 6,
        name: "Navigation",
      },
      {
        id: 6,
        name: "Care products",
      },
      {
        id: 6,
        name: "Scooter spare parts",
      },
      {
        id: 6,
        name: "Headlight",
      },
      {
        id: 6,
        name: "Other vehicle accessories",
      },
      {
        id: 6,
        name: "Immobilizer",
      },
      {
        id: 6,
        name: "Workshop supplies",
      },
      {
        id: 6,
        name: "Accessories for commercial vehicles",
      },
      {
        id: 6,
        name: "Oil and additives",
      },
    ],
  },
  {
    id: 7,
    name: "Computer & Network",
    icon: ComputerNetworksIcon,
    subCategory: [
      {
        id: 7,
        name: "3D Printer",
      },
      {
        id: 7,
        name: "Adapters, Cables & Connectors",
      },
      {
        id: 7,
        name: "Batteries",
      },
      {
        id: 7,
        name: "Screen mount",
      },
      {
        id: 7,
        name: "CD & DVD Burners",
      },
      {
        id: 7,
        name: "CD & DVD Blanks",
      },
      {
        id: 7,
        name: "Coin Miner",
      },
      {
        id: 7,
        name: "Controller",
      },
      {
        id: 7,
        name: "Covers & Bags",
      },
      {
        id: 7,
        name: "Docking Station",
      },
      {
        id: 7,
        name: "Printer",
      },
      {
        id: 7,
        name: "Printer Cartridges & Toner",
      },
      {
        id: 7,
        name: "Electronic Component",
      },
      {
        id: 7,
        name: "Filament",
      },
      {
        id: 7,
        name: "Firewall",
      },
      {
        id: 7,
        name: "Housing",
      },
      {
        id: 7,
        name: "Graphic cards",
      },
      {
        id: 7,
        name: "Harddisks",
      },
      {
        id: 7,
        name: "Hubs & Switches",
      },
      {
        id: 7,
        name: "Charger",
      },
      {
        id: 7,
        name: "Mainboards",
      },
      {
        id: 7,
        name: "Mouse",
      },
      {
        id: 7,
        name: "Memory / RAM",
      },
      {
        id: 7,
        name: "Modems & Routers",
      },
      {
        id: 7,
        name: "Monitors",
      },
      {
        id: 7,
        name: "Notebooks",
      },
      {
        id: 7,
        name: "PCs",
      },
      {
        id: 7,
        name: "PDAs",
      },
      {
        id: 7,
        name: "Racks & Stands",
      },
      {
        id: 7,
        name: "Scanner",
      },
      {
        id: 7,
        name: "Server",
      },
      {
        id: 7,
        name: "Software",
      },
      {
        id: 7,
        name: "Other Computer & Network",
      },
      {
        id: 7,
        name: "Sound cards",
      },
      {
        id: 7,
        name: "Streamer",
      },
      {
        id: 7,
        name: "Tablet PC",
      },
      {
        id: 7,
        name: "Keyboards",
      },
      {
        id: 7,
        name: "Wireless",
      },
      {
        id: 7,
        name: "Accessories",
      },
    ],
  },
  {
    id: 8,
    name: "Mobile, landline, radio",
    icon: MobileIcons,
    subCategory: [
      {
        id: 8,
        name: "Radio technology",
      },
      {
        id: 8,
        name: "Cell phones / Smartphones",
      },
      {
        id: 8,
        name: "Cell phone accessories",
      },
      {
        id: 8,
        name: "PrePaid cards",
      },
      {
        id: 8,
        name: "Smartwatch",
      },
      {
        id: 8,
        name: "Smartwatch accessories",
      },
      {
        id: 8,
        name: "Memory cards",
      },
      {
        id: 8,
        name: "Phones & Faxes",
      },
    ],
  },
  {
    id: 9,
    name: "Audio, TV & Video",
    icon: AudioIcon,
    subCategory: [
      {
        id: 9,
        name: "Recording equipment",
      },
      {
        id: 9,
        name: "Tape recorders",
      },
      {
        id: 9,
        name: "Camcorders",
      },
      {
        id: 9,
        name: "DVD players",
      },
      {
        id: 9,
        name: "Electronics",
      },
      {
        id: 9,
        name: "Television",
      },
      {
        id: 9,
        name: "Film: 8, 16, 35mm & Super 8",
      },
      {
        id: 9,
        name: "Home Cinema",
      },
      {
        id: 9,
        name: "HiFi Components",
      },
      {
        id: 9,
        name: "Karaoke",
      },
      {
        id: 9,
        name: "Headphones",
      },
      {
        id: 9,
        name: "Loudspeakers",
      },
      {
        id: 9,
        name: "Microphones",
      },
      {
        id: 9,
        name: "Minidisc",
      },
      {
        id: 9,
        name: "Multimedia Player",
      },
      {
        id: 9,
        name: "Radios & Recorders",
      },
      {
        id: 9,
        name: "Rarities HiFi",
      },
      {
        id: 9,
        name: "Receiver",
      },
      {
        id: 9,
        name: "Satellite Systems & PayTV",
      },
      {
        id: 9,
        name: "Stereo Systems",
      },
      {
        id: 9,
        name: "Streamers",
      },
      {
        id: 9,
        name: "Portable Media Player",
      },
      {
        id: 9,
        name: "Video projectors",
      },
      {
        id: 9,
        name: "Accessories",
      },
    ],
  },
  {
    id: 10,
    name: "Music & Musical Instruments",
    icon: MusicIcon,
    subCategory: [
      {
        id: 10,
        name: "Lighting & Light Effects",
      },
      {
        id: 10,
        name: "Wind Instruments",
      },
      {
        id: 10,
        name: "CDs",
      },
      {
        id: 10,
        name: "DJ Equipment",
      },
      {
        id: 10,
        name: "Drums & Percussion",
      },
      {
        id: 10,
        name: "Fan articles",
      },
      {
        id: 10,
        name: "Mixers",
      },
      {
        id: 10,
        name: "Musical Instruments",
      },
      {
        id: 10,
        name: "Music cassettes",
      },
      {
        id: 10,
        name: "Sheet Music & Songbooks",
      },
      {
        id: 10,
        name: "Records",
      },
      {
        id: 10,
        name: "String & Plucked Instruments",
      },
      {
        id: 10,
        name: "Studio Equipment",
      },
      {
        id: 10,
        name: "Keyboard Instruments",
      },
      {
        id: 10,
        name: "Accessories",
      },
    ],
  },
  {
    id: 11,
    name: "Movies & Series",
    icon: MoviesIcon,
    subCategory: [
      {
        id: 11,
        name: "Documentaries",
      },
      {
        id: 11,
        name: "Music & Concert Videos",
      },
      {
        id: 11,
        name: "Other Movies & Series",
      },
      {
        id: 11,
        name: "Feature Films",
      },
      {
        id: 11,
        name: "TV series",
      },
    ],
  },
  {
    id: 12,
    name: "Games & Game Consoles",
    icon: GameIcon,
    subCategory: [
      {
        id: 12,
        name: "Gaming fan articles",
      },
      {
        id: 12,
        name: "Consoles",
      },
      {
        id: 12,
        name: "Games",
      },
      {
        id: 12,
        name: "Accessories",
      },
    ],
  },
  {
    id: 13,
    name: "Books & Comics",
    icon: BooksIcon,
    subCategory: [
      {
        id: 13,
        name: "Fiction",
      },
      {
        id: 13,
        name: "Illustrated books",
      },
      {
        id: 13,
        name: "Books",
      },
      {
        id: 13,
        name: "Comics",
      },
      {
        id: 13,
        name: "Food & Drink",
      },
      {
        id: 13,
        name: "Audio Books",
      },
      {
        id: 13,
        name: "Children & Youth Literature",
      },
      {
        id: 13,
        name: "Art & Culture",
      },
      {
        id: 13,
        name: "Travel literature",
      },
      {
        id: 13,
        name: "Religion & Theology",
      },
      {
        id: 13,
        name: "Non-Fiction & Guidebooks",
      },
      {
        id: 13,
        name: "Collections & Packages",
      },
      {
        id: 13,
        name: "School & Study",
      },
      {
        id: 13,
        name: "Journals & Magazines",
      },
    ],
  },
  {
    id: 14,
    name: "Clothing & Accessories",
    icon: ClothingIcon,
    subCategory: [
      {
        id: 14,
        name: "Accessories for ladies",
      },
      {
        id: 14,
        name: "Accessories for men",
      },
      {
        id: 14,
        name: "Ladies fashion",
      },
      {
        id: 14,
        name: "Ladies shoes",
      },
      {
        id: 14,
        name: "Carnival costumes",
      },
      {
        id: 14,
        name: "Men's fashion",
      },
      {
        id: 14,
        name: "Men's shoes",
      },
      {
        id: 14,
        name: "Wedding",
      },
      {
        id: 14,
        name: "Suitcases & Bags",
      },
      {
        id: 14,
        name: "Other clothing & accessories",
      },
      {
        id: 14,
        name: "Bags for ladies",
      },
      {
        id: 14,
        name: "Costume fashion",
      },
    ],
  },
  {
    id: 15,
    name: "Cosmetics & Care",
    icon: CosmeticsIcon,
    subCategory: [
      {
        id: 15,
        name: "Ophthalmic optics",
      },
      {
        id: 15,
        name: "Facial Care",
      },
      {
        id: 15,
        name: "Health & Wellness",
      },
      {
        id: 15,
        name: "Hair Care",
      },
      {
        id: 15,
        name: "Body Care",
      },
      {
        id: 15,
        name: "Make-up",
      },
      {
        id: 15,
        name: "Manicure & Pedicure",
      },
      {
        id: 15,
        name: "Natural Cosmetics",
      },
      {
        id: 15,
        name: "Perfume & Eau de Toilette",
      },
      {
        id: 15,
        name: "Other cosmetics & care",
      },
      {
        id: 15,
        name: "Tattoos & Accessories",
      },
      {
        id: 15,
        name: "Dental care",
      },
    ],
  },
  {
    id: 16,
    name: "Watches & Jewellery",
    icon: WatchesIcon,
    subCategory: [
      {
        id: 16,
        name: "Pendants",
      },
      {
        id: 16,
        name: "Bracelets & Bangles",
      },
      {
        id: 16,
        name: "Brooches & Pins",
      },
      {
        id: 16,
        name: "Gemstones",
      },
      {
        id: 16,
        name: "Esotericism & Mysticism",
      },
      {
        id: 16,
        name: "Chains",
      },
      {
        id: 16,
        name: "Luxury brand watches",
      },
      {
        id: 16,
        name: "Brand watches",
      },
      {
        id: 16,
        name: "Fashionable brand watches",
      },
      {
        id: 16,
        name: "Earrings & studs",
      },
      {
        id: 16,
        name: "Piercing jewelry",
      },
      {
        id: 16,
        name: "Rings",
      },
      {
        id: 16,
        name: "Other Jewelry",
      },
      {
        id: 16,
        name: "Floor & wall clocks",
      },
      {
        id: 16,
        name: "Clocks",
      },
      {
        id: 16,
        name: "Alarm clocks",
      },
      {
        id: 16,
        name: "Accessories",
      },
    ],
  },
  {
    id: 17,
    name: "Child & Baby",
    icon: ChildIcon,
    subCategory: [
      {
        id: 17,
        name: "Child car seats",
      },
      {
        id: 17,
        name: "Baby clothes",
      },
      {
        id: 17,
        name: "Baby care & accessories",
      },
      {
        id: 17,
        name: "Cribs & furniture",
      },
      {
        id: 17,
        name: "Stroller",
      },
      {
        id: 17,
        name: "Stroller accessories",
      },
      {
        id: 17,
        name: "Clothes for boys",
      },
      {
        id: 17,
        name: "Clothes for girls",
      },
      {
        id: 17,
        name: "Shoes for boys",
      },
      {
        id: 17,
        name: "Shoes for girls",
      },
      {
        id: 17,
        name: "Socks for children",
      },
      {
        id: 17,
        name: "Other for child & baby",
      },
    ],
  },
  {
    id: 18,
    name: "Toys & Crafts",
    icon: ToysIcon,
    subCategory: [
      {
        id: 18,
        name: "Baby & Toddler",
      },
      {
        id: 18,
        name: "Craft & Handicrafts",
      },
      {
        id: 18,
        name: "Building sets",
      },
      {
        id: 18,
        name: "Vehicles for children",
      },
      {
        id: 18,
        name: "Dolls",
      },
      {
        id: 18,
        name: "Dollhouses & Furniture",
      },
      {
        id: 18,
        name: "Doll carriage",
      },
      {
        id: 18,
        name: "Puzzles",
      },
      {
        id: 18,
        name: "Other toys & crafts",
      },
      {
        id: 18,
        name: "Other for dolls",
      },
      {
        id: 18,
        name: "Games",
      },
      {
        id: 18,
        name: "Play mat",
      },
      {
        id: 18,
        name: "Toys",
      },
      {
        id: 18,
        name: "Magic & Magic",
      },
    ],
  },
  {
    id: 19,
    name: "Model making & hobby",
    icon: ModelIcon,
    subCategory: [
      {
        id: 19,
        name: "Batteries, Chargers & Power Supplies",
      },
      {
        id: 19,
        name: "Electronics",
      },
      {
        id: 19,
        name: "Remote Controls",
      },
      {
        id: 19,
        name: "Literature & Catalogs",
      },
      {
        id: 19,
        name: "Model cars",
      },
      {
        id: 19,
        name: "Model kits & floor models",
      },
      {
        id: 19,
        name: "Model railroads",
      },
      {
        id: 19,
        name: "Motors",
      },
      {
        id: 19,
        name: "RC Model Making",
      },
      {
        id: 19,
        name: "Racing tracks",
      },
      {
        id: 19,
        name: "Showcase",
      },
      {
        id: 19,
        name: "Tools",
      },
      {
        id: 19,
        name: "Accessories",
      },
    ],
  },
  {
    id: 20,
    name: "Sport",
    icon: SportIcon,
    subCategory: [
      {
        id: 20,
        name: "Fishing",
      },
      {
        id: 20,
        name: "Mountaineering & Hiking",
      },
      {
        id: 20,
        name: "Bindings",
      },
      {
        id: 20,
        name: "Balls",
      },
      {
        id: 20,
        name: "Camping & Tents",
      },
      {
        id: 20,
        name: "Ice Hockey",
      },
      {
        id: 20,
        name: "Fanshop",
      },
      {
        id: 20,
        name: "Fitness & Home Training",
      },
      {
        id: 20,
        name: "Funsport",
      },
      {
        id: 20,
        name: "Football",
      },
      {
        id: 20,
        name: "Football & Hockey Goals",
      },
      {
        id: 20,
        name: "Golf",
      },
      {
        id: 20,
        name: "Gloves",
      },
      {
        id: 20,
        name: "Helmets",
      },
      {
        id: 20,
        name: "Inline skating & roller skates",
      },
      {
        id: 20,
        name: "Martial Arts",
      },
      {
        id: 20,
        name: "Karting",
      },
      {
        id: 20,
        name: "Kite",
      },
      {
        id: 20,
        name: "Mini & Pocketbikes",
      },
      {
        id: 20,
        name: "Cycling",
      },
      {
        id: 20,
        name: "Equestrian sports",
      },
      {
        id: 20,
        name: "Skates",
      },
      {
        id: 20,
        name: "Rackets",
      },
      {
        id: 20,
        name: "Shoes",
      },
      {
        id: 20,
        name: "Protection",
      },
      {
        id: 20,
        name: "Skiing",
      },
      {
        id: 20,
        name: "Snowboard",
      },
      {
        id: 20,
        name: "Other sports",
      },
      {
        id: 20,
        name: "Other accessories",
      },
      {
        id: 20,
        name: "Sports nutrition",
      },
      {
        id: 20,
        name: "Surfboards & Swimming boards",
      },
      {
        id: 20,
        name: "Bags",
      },
      {
        id: 20,
        name: "Diving",
      },
      {
        id: 20,
        name: "Tennis",
      },
      {
        id: 20,
        name: "Water Bottles",
      },
    ],
  },
  {
    id: 21,
    name: "Collect & Rare",
    icon: CollectIcon,
    subCategory: [
      {
        id: 21,
        name: "Albums",
      },
      {
        id: 21,
        name: "Postcards",
      },
      {
        id: 21,
        name: "Awards & Medals",
      },
      {
        id: 21,
        name: "Autographs",
      },
      {
        id: 21,
        name: "Aviation",
      },
      {
        id: 21,
        name: "Railroad",
      },
      {
        id: 21,
        name: "Fire department",
      },
      {
        id: 21,
        name: "Figures",
      },
      {
        id: 21,
        name: "Thimbles",
      },
      {
        id: 21,
        name: "Flacons",
      },
      {
        id: 21,
        name: "Pinball boxes",
      },
      {
        id: 21,
        name: "Fossils",
      },
      {
        id: 21,
        name: "Bells & Tinkers",
      },
      {
        id: 21,
        name: "Household & Kitchen",
      },
      {
        id: 21,
        name: "Coffee creamer lid",
      },
      {
        id: 21,
        name: "Maps & Atlases",
      },
      {
        id: 21,
        name: "Agriculture",
      },
      {
        id: 21,
        name: "Military",
      },
      {
        id: 21,
        name: "Minerals & Healing Stones",
      },
      {
        id: 21,
        name: "Marbles",
      },
      {
        id: 21,
        name: "Music Chests",
      },
      {
        id: 21,
        name: "Patches",
      },
      {
        id: 21,
        name: "Pins",
      },
      {
        id: 21,
        name: "Plaques & Badges",
      },
      {
        id: 21,
        name: "Police",
      },
      {
        id: 21,
        name: "Advertising & publicity",
      },
      {
        id: 21,
        name: "trading cards & trading cards",
      },
      {
        id: 21,
        name: "Signs",
      },
      {
        id: 21,
        name: "Keychains & Ribbons",
      },
      {
        id: 21,
        name: "Other collectibles & rarities",
      },
      {
        id: 21,
        name: "Money boxes",
      },
      {
        id: 21,
        name: "Slot machines",
      },
      {
        id: 21,
        name: "Music boxes",
      },
      {
        id: 21,
        name: "Pocket Knives",
      },
      {
        id: 21,
        name: "Telephone & tax cards",
      },
      {
        id: 21,
        name: "Uniforms",
      },
      {
        id: 21,
        name: "World of animals",
      },
      {
        id: 21,
        name: "Promotional items",
      },
    ],
  },
  {
    id: 22,
    name: "Coins",
    icon: MobileIcons,
    subCategory: [
      {
        id: 22,
        name: "All coins",
      },
      {
        id: 22,
        name: "Banknotes",
      },
      {
        id: 22,
        name: "Precious metals",
      },
      {
        id: 22,
        name: "European coins",
      },
      {
        id: 22,
        name: "Historical securities",
      },
      {
        id: 22,
        name: "International coins",
      },
      {
        id: 22,
        name: "Cantonal coins",
      },
      {
        id: 22,
        name: "Medals",
      },
      {
        id: 22,
        name: "Coin letters",
      },
      {
        id: 22,
        name: "Swiss coins",
      },
      {
        id: 22,
        name: "Accessories",
      },
    ],
  },
  {
    id: 23,
    name: "Stamps",
    icon: AnimalsIcon,
    subCategory: [
      {
        id: 23,
        name: "Varieties",
      },
      {
        id: 23,
        name: "All Stamps",
      },
      {
        id: 23,
        name: "CH Stamps",
      },
      {
        id: 23,
        name: "Official stamps & postage stamps",
      },
      {
        id: 23,
        name: "Airmail stamps",
      },
      {
        id: 23,
        name: "International",
      },
      {
        id: 23,
        name: "Lots & Collections",
      },
      {
        id: 23,
        name: "Motifs",
      },
      {
        id: 23,
        name: "Replica",
      },
      {
        id: 23,
        name: "Soldier Stamps",
      },
      {
        id: 23,
        name: "Other Stamps",
      },
      {
        id: 23,
        name: "UNO",
      },
      {
        id: 23,
        name: "Prephilately",
      },
      {
        id: 23,
        name: "Accessories",
      },
    ],
  },
  {
    id: 24,
    name: "Tickets & Vouchers",
    icon: TicketsIcon,
    subCategory: [
      {
        id: 24,
        name: "Vouchers",
      },
      {
        id: 24,
        name: "Collectible stamps & points",
      },
      {
        id: 24,
        name: "Tickets",
      },
    ],
  },
  {
    id: 25,
    name: "Photo & Optics",
    icon: PhotoIcon,
    subCategory: [
      {
        id: 25,
        name: "Action Cam",
      },
      {
        id: 25,
        name: "Slide photography",
      },
      {
        id: 25,
        name: "Photo services",
      },
      {
        id: 25,
        name: "Camera",
      },
      {
        id: 25,
        name: "Lab & Darkroom",
      },
      {
        id: 25,
        name: "Optics",
      },
      {
        id: 25,
        name: "Accessories",
      },
    ],
  },
  {
    id: 26,
    name: "Animal accessories",
    icon: AnimalsIcon,
    subCategory: [
      {
        id: 26,
        name: "Instructions & Guide",
      },
      {
        id: 26,
        name: "Aquarium",
      },
      {
        id: 26,
        name: "Clothing",
      },
      {
        id: 26,
        name: "Lighting",
      },
      {
        id: 26,
        name: "Ceilings & Ceiling Accessories",
      },
      {
        id: 26,
        name: "Decoration",
      },
      {
        id: 26,
        name: "Filter",
      },
      {
        id: 26,
        name: "Lining",
      },
      {
        id: 26,
        name: "Gaiters & Bandages",
      },
      {
        id: 26,
        name: "Heating",
      },
      {
        id: 26,
        name: "Cat tree - scratching post",
      },
      {
        id: 26,
        name: "Cages, Transport & Safety",
      },
      {
        id: 26,
        name: "Leash & Collar",
      },
      {
        id: 26,
        name: "Lying & sleeping places",
      },
      {
        id: 26,
        name: "Plants",
      },
      {
        id: 26,
        name: "Grooming & grooming products",
      },
      {
        id: 26,
        name: "Pumps",
      },
      {
        id: 26,
        name: "Saddle & Saddle Accessories",
      },
      {
        id: 26,
        name: "Signs & Plaques",
      },
      {
        id: 26,
        name: "Other",
      },
      {
        id: 26,
        name: "Other Animal Accessories",
      },
      {
        id: 26,
        name: "Toys",
      },
      {
        id: 26,
        name: "Stable Accessories",
      },
      {
        id: 26,
        name: "Terrarium",
      },
      {
        id: 26,
        name: "Bridle & Halter",
      },
    ],
  },
];

export const categoryJson = {
  household_and_living: {
    type: "",
    name: "household_and_living",
    icon: HomeIcon,
    children: {
      benches: {
        type: "",
        name: "benches",
        tags: {
          fuel: {
            type: FilterField.select,
            options: ["petrol", "disel", "electric", "hybrid", "cng", "other"],
            label: "Fuel", //should always be unique
          },
          transmission: {
            type: FilterField.select,
            options: ["manual", "auto"],
            label: "Transmission",
          },
          brand: {
            type: FilterField.select,
            options: ["honda", "suzuki", "toyota", "audi", "bmw", "mercedes", "rolls", "bently", "porche", "lambo"],
            label: "Brand",
          },
          kms_driven: {
            type: FilterField.number,
            label: "KM",
          },
          model: {
            type: FilterField.date,
            label: "Model",
          },
          variant: {
            type: FilterField.input,
            label: "Variant",
          },
          registration_date: {
            type: FilterField.date,
            label: "Regitration Date",
          },
          color: {
            type: FilterField.color,
            options: ["black", "chrome"],
            label: "Color",
          },
        },
      },
      buffet: {
        type: "",
        name: "buffet",
      },
      blankets: {
        type: "",
        name: "blankets",
      },
      decorations_and_accessories: {
        type: "",
        name: "decorations_and_accessories",
      },
      design_classics: {
        type: "",
        name: "design_classics",
      },
      wardrobe_cellar_and_shelves: {
        type: "",
        name: "wardrobe_cellar_and_shelves",
      },
      tableware_and_glasses: {
        type: "",
        name: "tableware_and_glasses",
      },
      household_appliances_and_kitchenware: {
        type: "",
        name: "household_appliances_and_kitchenware",
      },
      stools: {
        type: "",
        name: "stools",
      },
      coffee_and_espresso_machines: {
        type: "",
        name: "coffee_and_espresso_machines",
      },
      pillows: {
        type: "",
        name: "pillows",
      },
      air_conditioners_and_fans: {
        type: "",
        name: "air_conditioners_and_fans",
      },
      cooking_and_baking: {
        type: "",
        name: "cooking_and_baking",
      },
      chests_of_drawers: {
        type: "",
        name: "chests_of_drawers",
      },
      kitchens: {
        type: "",
        name: "kitchens",
      },
      refrigerators_and_freezers: {
        type: "",
        name: "refrigerators_and_freezers",
      },
      lamps_and_lighting: {
        type: "",
        name: "lamps_and_lighting",
      },
      loungers_and_recliners: {
        type: "",
        name: "loungers_and_recliners",
      },
      shelves: {
        type: "",
        name: "shelves",
      },
      bedroom: {
        type: "",
        name: "bedroom",
      },
      dressing_tables: {
        type: "",
        name: "dressing_tables",
      },
      desks: {
        type: "",
        name: "desks",
      },
      cabinets: {
        type: "",
        name: "cabinets",
      },
      serving_trolley: {
        type: "",
        name: "serving_trolley",
      },
      armchairs: {
        type: "",
        name: "armchairs",
      },
      sofas: {
        type: "",
        name: "sofas",
      },
      other_for_household_and_living: {
        type: "",
        name: "other_for_household_and_living",
      },
      mirrors: {
        type: "",
        name: "mirrors",
      },
      chairs: {
        type: "",
        name: "chairs",
      },
      tv_furniture: {
        type: "",
        name: "tv_furniture",
      },
      carpets_and_curtains: {
        type: "",
        name: "carpets_and_curtains",
      },
      tables: {
        type: "",
        name: "tables",
      },
      table_set: {
        type: "",
        name: "table_set",
      },
      display_cases: {
        type: "",
        name: "display_cases",
      },
    },
  },
  antiques_and_art: {
    type: "",
    name: "antiques_and_art",
    icon: AntiqueIcon,
    children: {
      antique_musical_instruments: {
        type: "",
        name: "antique_musical_instruments",
      },
      antique_toys: {
        type: "",
        name: "antique_toys",
      },
      antique_technology_and_appliances: {
        type: "",
        name: "antique_technology_and_appliances",
      },
      antique_furniture_and_furnishings: {
        type: "",
        name: "antique_furniture_and_furnishings",
      },
      antique_jewelry: {
        type: "",
        name: "antique_jewelry",
      },
      antique_books: {
        type: "",
        name: "antique_books",
      },
      cutlery: {
        type: "",
        name: "cutlery",
      },
      tins: {
        type: "",
        name: "tins",
      },
      figures: {
        type: "",
        name: "figures",
      },
      bottles: {
        type: "",
        name: "bottles",
      },
      photography_and_posters: {
        type: "",
        name: "photography_and_posters",
      },
      place_settings_and_sets: {
        type: "",
        name: "place_settings_and_sets",
      },
      glasses: {
        type: "",
        name: "glasses",
      },
      household_linen: {
        type: "",
        name: "household_linen",
      },
      international_art: {
        type: "",
        name: "international_art",
      },
      coffee_and_tea_sets: {
        type: "",
        name: "coffee_and_tea_sets",
      },
      carafes: {
        type: "",
        name: "carafes",
      },
      candlesticks: {
        type: "",
        name: "candlesticks",
      },
      artist_supplies: {
        type: "",
        name: "artist_supplies",
      },
      painting_and_graphics: {
        type: "",
        name: "painting_and_graphics",
      },
      dolls_and_accessories: {
        type: "",
        name: "dolls_and_accessories",
      },
      etchings_and_drawings: {
        type: "",
        name: "etchings_and_drawings",
      },
      bowls_and_dishes: {
        type: "",
        name: "bowls_and_dishes",
      },
      sculptures: {
        type: "",
        name: "sculptures",
      },
      other_antiques_and_art: {
        type: "",
        name: "other_antiques_and_art",
      },
      engravings: {
        type: "",
        name: "engravings",
      },
      plates: {
        type: "",
        name: "plates",
      },
      vases: {
        type: "",
        name: "vases",
      },
    },
  },
  craft_and_garden: {
    type: "",
    name: "craft_and_garden",
    icon: CraftIcon,
    children: {
      flooring: {
        type: "",
        name: "flooring",
      },
      fireplace_and_stove: {
        type: "",
        name: "fireplace_and_stove",
      },
      hardware: {
        type: "",
        name: "hardware",
      },
      electrical_material: {
        type: "",
        name: "electrical_material",
      },
      paints_and_varnish: {
        type: "",
        name: "paints_and_varnish",
      },
      garden_decorations: {
        type: "",
        name: "garden_decorations",
      },
      garden_tools: {
        type: "",
        name: "garden_tools",
      },
      garden_furniture: {
        type: "",
        name: "garden_furniture",
      },
      barbecue_accessories: {
        type: "",
        name: "barbecue_accessories",
      },
      home_technology: {
        type: "",
        name: "home_technology",
      },
      plants_and_seeds: {
        type: "",
        name: "plants_and_seeds",
      },
      cleaning_equipment: {
        type: "",
        name: "cleaning_equipment",
      },
      slide: {
        type: "",
        name: "slide",
      },
      sanitary_equipment: {
        type: "",
        name: "sanitary_equipment",
      },
      swing: {
        type: "",
        name: "swing",
      },
      safety_equipment: {
        type: "",
        name: "safety_equipment",
      },
      solar_equipment_and_products: {
        type: "",
        name: "solar_equipment_and_products",
      },
      other_for_the_garden: {
        type: "",
        name: "other_for_the_garden",
      },
      playhouse: {
        type: "",
        name: "playhouse",
      },
      trampoline: {
        type: "",
        name: "trampoline",
      },
      shelters: {
        type: "",
        name: "shelters",
      },
      wellness: {
        type: "",
        name: "wellness",
      },
      tools: {
        type: "",
        name: "tools",
      },
      walls_and_ceilings: {
        type: "",
        name: "walls_and_ceilings",
      },
    },
  },
  office_and_commercial: {
    type: "",
    name: "office_and_commercial",
    icon: OfficIcon,
    children: {
      all_machines: {
        type: "",
        name: "all_machines",
      },
      workwear_and_protection: {
        type: "",
        name: "workwear_and_protection",
      },
      handicapped_and_senior_friendly: {
        type: "",
        name: "handicapped_and_senior_friendly",
      },
      office_papers_and_envelopes: {
        type: "",
        name: "office_papers_and_envelopes",
      },
      office_supplies: {
        type: "",
        name: "office_supplies",
      },
      office_furniture: {
        type: "",
        name: "office_furniture",
      },
      office_technology: {
        type: "",
        name: "office_technology",
      },
      corporate_events_and_parties: {
        type: "",
        name: "corporate_events_and_parties",
      },
      gastronomy_and_hotel: {
        type: "",
        name: "gastronomy_and_hotel",
      },
      wholesale_and_remnants: {
        type: "",
        name: "wholesale_and_remnants",
      },
      industrial_supplies_and_electronics: {
        type: "",
        name: "industrial_supplies_and_electronics",
      },
      calendars_and_agendas: {
        type: "",
        name: "calendars_and_agendas",
      },
      writing_and_drawing: {
        type: "",
        name: "writing_and_drawing",
      },
      school_supplies: {
        type: "",
        name: "school_supplies",
      },
      other_trade: {
        type: "",
        name: "other_trade",
      },
      other_for_office_and_business: {
        type: "",
        name: "other_for_office_and_business",
      },
    },
  },
  vehicles: {
    type: "",
    name: "vehicles",
    icon: VehiclesIcon,
    children: {
      motorcycles: {
        type: "",
        name: "motorcycles",
      },
      commercial_vehicle: {
        type: "",
        name: "commercial_vehicle",
      },
      other_vehicles: {
        type: "",
        name: "other_vehicles",
      },
    },
  },
  car_accessories: {
    type: "",
    name: "car_accessories",
    icon: CarAccessories,
    children: {
      trailer_accessories: {
        type: "",
        name: "trailer_accessories",
      },
      exhaust_systems: {
        type: "",
        name: "exhaust_systems",
      },
      car_spare_parts: {
        type: "",
        name: "car_spare_parts",
      },
      car_tuning: {
        type: "",
        name: "car_tuning",
      },
      car_accessories: {
        type: "",
        name: "car_accessories",
      },
      boat_accessories: {
        type: "",
        name: "boat_accessories",
      },
      camping_accessories: {
        type: "",
        name: "camping_accessories",
      },
      car_hifi: {
        type: "",
        name: "car_hifi",
      },
      services_and_repairs: {
        type: "",
        name: "services_and_repairs",
      },
      electric: {
        type: "",
        name: "electric",
      },
      fan_articles: {
        type: "",
        name: "fan_articles",
      },
      rims_tires_and_wheels: {
        type: "",
        name: "rims_tires_and_wheels",
      },
      remote_controls: {
        type: "",
        name: "remote_controls",
      },
      helmets_and_protection: {
        type: "",
        name: "helmets_and_protection",
      },
      moped_accessories: {
        type: "",
        name: "moped_accessories",
      },
      engines: {
        type: "",
        name: "engines",
      },
      motorcycle_clothing: {
        type: "",
        name: "motorcycle_clothing",
      },
      motorcycle_spare_parts: {
        type: "",
        name: "motorcycle_spare_parts",
      },
      motorcycle_accessories: {
        type: "",
        name: "motorcycle_accessories",
      },
      navigation: {
        type: "",
        name: "navigation",
      },
      care_products: {
        type: "",
        name: "care_products",
      },
      scooter_spare_parts: {
        type: "",
        name: "scooter_spare_parts",
      },
      headlight: {
        type: "",
        name: "headlight",
      },
      other_vehicle_accessories: {
        type: "",
        name: "other_vehicle_accessories",
      },
      immobilizer: {
        type: "",
        name: "immobilizer",
      },
      workshop_supplies: {
        type: "",
        name: "workshop_supplies",
      },
      accessories_for_commercial_vehicles: {
        type: "",
        name: "accessories_for_commercial_vehicles",
      },
      oil_and_additives: {
        type: "",
        name: "oil_and_additives",
      },
    },
  },
  computer_and_network: {
    type: "",
    name: "computer_and_network",
    icon: ComputerNetworksIcon,
    children: {
      adapters_cables_and_connectors: {
        type: "",
        name: "adapters_cables_and_connectors",
      },
      batteries: {
        type: "",
        name: "batteries",
      },
      screen_mount: {
        type: "",
        name: "screen_mount",
      },
      cd_and_dvd_burners: {
        type: "",
        name: "cd_and_dvd_burners",
      },
      cd_and_dvd_blanks: {
        type: "",
        name: "cd_and_dvd_blanks",
      },
      coin_miner: {
        type: "",
        name: "coin_miner",
      },
      controller: {
        type: "",
        name: "controller",
      },
      covers_and_bags: {
        type: "",
        name: "covers_and_bags",
      },
      docking_station: {
        type: "",
        name: "docking_station",
      },
      printer: {
        type: "",
        name: "printer",
      },
      printer_cartridges_and_toner: {
        type: "",
        name: "printer_cartridges_and_toner",
      },
      electronic_component: {
        type: "",
        name: "electronic_component",
      },
      filament: {
        type: "",
        name: "filament",
      },
      firewall: {
        type: "",
        name: "firewall",
      },
      housing: {
        type: "",
        name: "housing",
      },
      graphic_cards: {
        type: "",
        name: "graphic_cards",
      },
      harddisks: {
        type: "",
        name: "harddisks",
      },
      hubs_and_switches: {
        type: "",
        name: "hubs_and_switches",
      },
      charger: {
        type: "",
        name: "charger",
      },
      mainboards: {
        type: "",
        name: "mainboards",
      },
      mouse: {
        type: "",
        name: "mouse",
      },
      memory__ram: {
        type: "",
        name: "memory__ram",
      },
      modems_and_routers: {
        type: "",
        name: "modems_and_routers",
      },
      monitors: {
        type: "",
        name: "monitors",
      },
      notebooks: {
        type: "",
        name: "notebooks",
      },
      pcs: {
        type: "",
        name: "pcs",
      },
      pdas: {
        type: "",
        name: "pdas",
      },
      racks_and_stands: {
        type: "",
        name: "racks_and_stands",
      },
      scanner: {
        type: "",
        name: "scanner",
      },
      server: {
        type: "",
        name: "server",
      },
      software: {
        type: "",
        name: "software",
      },
      other_computer_and_network: {
        type: "",
        name: "other_computer_and_network",
      },
      sound_cards: {
        type: "",
        name: "sound_cards",
      },
      streamer: {
        type: "",
        name: "streamer",
      },
      tablet_pc: {
        type: "",
        name: "tablet_pc",
      },
      keyboards: {
        type: "",
        name: "keyboards",
      },
      wireless: {
        type: "",
        name: "wireless",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  mobile_landline_radio: {
    type: "",
    name: "mobile_landline_radio",
    icon: MobileIcons,
    children: {
      cell_phones__smartphones: {
        type: "",
        name: "cell_phones__smartphones",
      },
      cell_phone_accessories: {
        type: "",
        name: "cell_phone_accessories",
      },
      prepaid_cards: {
        type: "",
        name: "prepaid_cards",
      },
      smartwatch: {
        type: "",
        name: "smartwatch",
      },
      smartwatch_accessories: {
        type: "",
        name: "smartwatch_accessories",
      },
      memory_cards: {
        type: "",
        name: "memory_cards",
      },
      phones_and_faxes: {
        type: "",
        name: "phones_and_faxes",
      },
    },
  },
  audio_tv_and_video: {
    type: "",
    name: "audio_tv_and_video",
    icon: AudioIcon,
    children: {
      tape_recorders: {
        type: "",
        name: "tape_recorders",
      },
      camcorders: {
        type: "",
        name: "camcorders",
      },
      dvd_players: {
        type: "",
        name: "dvd_players",
      },
      electronics: {
        type: "",
        name: "electronics",
      },
      television: {
        type: "",
        name: "television",
      },
      "film:_8_16_35mm_and_super_8": {
        type: "",
        name: "film:_8_16_35mm_and_super_8",
      },
      home_cinema: {
        type: "",
        name: "home_cinema",
      },
      hifi_components: {
        type: "",
        name: "hifi_components",
      },
      karaoke: {
        type: "",
        name: "karaoke",
      },
      headphones: {
        type: "",
        name: "headphones",
      },
      loudspeakers: {
        type: "",
        name: "loudspeakers",
      },
      microphones: {
        type: "",
        name: "microphones",
      },
      minidisc: {
        type: "",
        name: "minidisc",
      },
      multimedia_player: {
        type: "",
        name: "multimedia_player",
      },
      radios_and_recorders: {
        type: "",
        name: "radios_and_recorders",
      },
      rarities_hifi: {
        type: "",
        name: "rarities_hifi",
      },
      receiver: {
        type: "",
        name: "receiver",
      },
      satellite_systems_and_paytv: {
        type: "",
        name: "satellite_systems_and_paytv",
      },
      stereo_systems: {
        type: "",
        name: "stereo_systems",
      },
      streamers: {
        type: "",
        name: "streamers",
      },
      portable_media_player: {
        type: "",
        name: "portable_media_player",
      },
      video_projectors: {
        type: "",
        name: "video_projectors",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  music_and_musical_instruments: {
    type: "",
    name: "music_and_musical_instruments",
    icon: MusicIcon,
    children: {
      wind_instruments: {
        type: "",
        name: "wind_instruments",
      },
      cds: {
        type: "",
        name: "cds",
      },
      dj_equipment: {
        type: "",
        name: "dj_equipment",
      },
      drums_and_percussion: {
        type: "",
        name: "drums_and_percussion",
      },
      fan_articles: {
        type: "",
        name: "fan_articles",
      },
      mixers: {
        type: "",
        name: "mixers",
      },
      musical_instruments: {
        type: "",
        name: "musical_instruments",
      },
      music_cassettes: {
        type: "",
        name: "music_cassettes",
      },
      sheet_music_and_songbooks: {
        type: "",
        name: "sheet_music_and_songbooks",
      },
      records: {
        type: "",
        name: "records",
      },
      string_and_plucked_instruments: {
        type: "",
        name: "string_and_plucked_instruments",
      },
      studio_equipment: {
        type: "",
        name: "studio_equipment",
      },
      keyboard_instruments: {
        type: "",
        name: "keyboard_instruments",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  movies_and_series: {
    type: "",
    name: "movies_and_series",
    icon: MoviesIcon,
    children: {
      music_and_concert_videos: {
        type: "",
        name: "music_and_concert_videos",
      },
      other_movies_and_series: {
        type: "",
        name: "other_movies_and_series",
      },
      feature_films: {
        type: "",
        name: "feature_films",
      },
      tv_series: {
        type: "",
        name: "tv_series",
      },
    },
  },
  games_and_game_consoles: {
    type: "",
    name: "games_and_game_consoles",
    icon: GameIcon,
    children: {
      consoles: {
        type: "",
        name: "consoles",
      },
      games: {
        type: "",
        name: "games",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  books_and_comics: {
    type: "",
    name: "books_and_comics",
    icon: BooksIcon,
    children: {
      illustrated_books: {
        type: "",
        name: "illustrated_books",
      },
      books: {
        type: "",
        name: "books",
      },
      comics: {
        type: "",
        name: "comics",
      },
      food_and_drink: {
        type: "",
        name: "food_and_drink",
      },
      audio_books: {
        type: "",
        name: "audio_books",
      },
      children_and_youth_literature: {
        type: "",
        name: "children_and_youth_literature",
      },
      art_and_culture: {
        type: "",
        name: "art_and_culture",
      },
      travel_literature: {
        type: "",
        name: "travel_literature",
      },
      religion_and_theology: {
        type: "",
        name: "religion_and_theology",
      },
      "non-fiction_and_guidebooks": {
        type: "",
        name: "non-fiction_and_guidebooks",
      },
      collections_and_packages: {
        type: "",
        name: "collections_and_packages",
      },
      school_and_study: {
        type: "",
        name: "school_and_study",
      },
      journals_and_magazines: {
        type: "",
        name: "journals_and_magazines",
      },
    },
  },
  clothing_and_accessories: {
    type: "",
    name: "clothing_and_accessories",
    icon: ClothingIcon,
    children: {
      accessories_for_men: {
        type: "",
        name: "accessories_for_men",
      },
      ladies_fashion: {
        type: "",
        name: "ladies_fashion",
      },
      ladies_shoes: {
        type: "",
        name: "ladies_shoes",
      },
      carnival_costumes: {
        type: "",
        name: "carnival_costumes",
      },
      "men's_fashion": {
        type: "",
        name: "men's_fashion",
      },
      "men's_shoes": {
        type: "",
        name: "men's_shoes",
      },
      wedding: {
        type: "",
        name: "wedding",
      },
      suitcases_and_bags: {
        type: "",
        name: "suitcases_and_bags",
      },
      other_clothing_and_accessories: {
        type: "",
        name: "other_clothing_and_accessories",
      },
      bags_for_ladies: {
        type: "",
        name: "bags_for_ladies",
      },
      costume_fashion: {
        type: "",
        name: "costume_fashion",
      },
    },
  },
  cosmetics_and_care: {
    type: "",
    name: "cosmetics_and_care",
    icon: CosmeticsIcon,
    children: {
      facial_care: {
        type: "",
        name: "facial_care",
      },
      health_and_wellness: {
        type: "",
        name: "health_and_wellness",
      },
      hair_care: {
        type: "",
        name: "hair_care",
      },
      body_care: {
        type: "",
        name: "body_care",
      },
      "make-up": {
        type: "",
        name: "make-up",
      },
      manicure_and_pedicure: {
        type: "",
        name: "manicure_and_pedicure",
      },
      natural_cosmetics: {
        type: "",
        name: "natural_cosmetics",
      },
      perfume_and_eau_de_toilette: {
        type: "",
        name: "perfume_and_eau_de_toilette",
      },
      other_cosmetics_and_care: {
        type: "",
        name: "other_cosmetics_and_care",
      },
      tattoos_and_accessories: {
        type: "",
        name: "tattoos_and_accessories",
      },
      dental_care: {
        type: "",
        name: "dental_care",
      },
    },
  },
  watches_and_jewellery: {
    type: "",
    name: "watches_and_jewellery",
    icon: WatchesIcon,
    children: {
      bracelets_and_bangles: {
        type: "",
        name: "bracelets_and_bangles",
      },
      brooches_and_pins: {
        type: "",
        name: "brooches_and_pins",
      },
      gemstones: {
        type: "",
        name: "gemstones",
      },
      esotericism_and_mysticism: {
        type: "",
        name: "esotericism_and_mysticism",
      },
      chains: {
        type: "",
        name: "chains",
      },
      luxury_brand_watches: {
        type: "",
        name: "luxury_brand_watches",
      },
      brand_watches: {
        type: "",
        name: "brand_watches",
      },
      fashionable_brand_watches: {
        type: "",
        name: "fashionable_brand_watches",
      },
      earrings_and_studs: {
        type: "",
        name: "earrings_and_studs",
      },
      piercing_jewelry: {
        type: "",
        name: "piercing_jewelry",
      },
      rings: {
        type: "",
        name: "rings",
      },
      other_jewelry: {
        type: "",
        name: "other_jewelry",
      },
      floor_and_wall_clocks: {
        type: "",
        name: "floor_and_wall_clocks",
      },
      clocks: {
        type: "",
        name: "clocks",
      },
      alarm_clocks: {
        type: "",
        name: "alarm_clocks",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  child_and_baby: {
    type: "",
    name: "child_and_baby",
    icon: ChildIcon,
    children: {
      baby_clothes: {
        type: "",
        name: "baby_clothes",
      },
      baby_care_and_accessories: {
        type: "",
        name: "baby_care_and_accessories",
      },
      cribs_and_furniture: {
        type: "",
        name: "cribs_and_furniture",
      },
      stroller: {
        type: "",
        name: "stroller",
      },
      stroller_accessories: {
        type: "",
        name: "stroller_accessories",
      },
      clothes_for_boys: {
        type: "",
        name: "clothes_for_boys",
      },
      clothes_for_girls: {
        type: "",
        name: "clothes_for_girls",
      },
      shoes_for_boys: {
        type: "",
        name: "shoes_for_boys",
      },
      shoes_for_girls: {
        type: "",
        name: "shoes_for_girls",
      },
      socks_for_children: {
        type: "",
        name: "socks_for_children",
      },
      other_for_child_and_baby: {
        type: "",
        name: "other_for_child_and_baby",
      },
    },
  },
  toys_and_crafts: {
    type: "",
    name: "toys_and_crafts",
    icon: ToysIcon,
    children: {
      craft_and_handicrafts: {
        type: "",
        name: "craft_and_handicrafts",
      },
      building_sets: {
        type: "",
        name: "building_sets",
      },
      vehicles_for_children: {
        type: "",
        name: "vehicles_for_children",
      },
      dolls: {
        type: "",
        name: "dolls",
      },
      dollhouses_and_furniture: {
        type: "",
        name: "dollhouses_and_furniture",
      },
      doll_carriage: {
        type: "",
        name: "doll_carriage",
      },
      puzzles: {
        type: "",
        name: "puzzles",
      },
      other_toys_and_crafts: {
        type: "",
        name: "other_toys_and_crafts",
      },
      other_for_dolls: {
        type: "",
        name: "other_for_dolls",
      },
      games: {
        type: "",
        name: "games",
      },
      play_mat: {
        type: "",
        name: "play_mat",
      },
      toys: {
        type: "",
        name: "toys",
      },
      magic_and_magic: {
        type: "",
        name: "magic_and_magic",
      },
    },
  },
  model_making_and_hobby: {
    type: "",
    name: "model_making_and_hobby",
    icon: ModelIcon,
    children: {
      electronics: {
        type: "",
        name: "electronics",
      },
      remote_controls: {
        type: "",
        name: "remote_controls",
      },
      literature_and_catalogs: {
        type: "",
        name: "literature_and_catalogs",
      },
      model_cars: {
        type: "",
        name: "model_cars",
      },
      model_kits_and_floor_models: {
        type: "",
        name: "model_kits_and_floor_models",
      },
      model_railroads: {
        type: "",
        name: "model_railroads",
      },
      motors: {
        type: "",
        name: "motors",
      },
      rc_model_making: {
        type: "",
        name: "rc_model_making",
      },
      racing_tracks: {
        type: "",
        name: "racing_tracks",
      },
      showcase: {
        type: "",
        name: "showcase",
      },
      tools: {
        type: "",
        name: "tools",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  sport: {
    type: "",
    name: "sport",
    icon: SportIcon,
    children: {
      mountaineering_and_hiking: {
        type: "",
        name: "mountaineering_and_hiking",
      },
      bindings: {
        type: "",
        name: "bindings",
      },
      balls: {
        type: "",
        name: "balls",
      },
      camping_and_tents: {
        type: "",
        name: "camping_and_tents",
      },
      ice_hockey: {
        type: "",
        name: "ice_hockey",
      },
      fanshop: {
        type: "",
        name: "fanshop",
      },
      fitness_and_home_training: {
        type: "",
        name: "fitness_and_home_training",
      },
      funsport: {
        type: "",
        name: "funsport",
      },
      football: {
        type: "",
        name: "football",
      },
      football_and_hockey_goals: {
        type: "",
        name: "football_and_hockey_goals",
      },
      golf: {
        type: "",
        name: "golf",
      },
      gloves: {
        type: "",
        name: "gloves",
      },
      helmets: {
        type: "",
        name: "helmets",
      },
      inline_skating_and_roller_skates: {
        type: "",
        name: "inline_skating_and_roller_skates",
      },
      martial_arts: {
        type: "",
        name: "martial_arts",
      },
      karting: {
        type: "",
        name: "karting",
      },
      kite: {
        type: "",
        name: "kite",
      },
      mini_and_pocketbikes: {
        type: "",
        name: "mini_and_pocketbikes",
      },
      cycling: {
        type: "",
        name: "cycling",
      },
      equestrian_sports: {
        type: "",
        name: "equestrian_sports",
      },
      skates: {
        type: "",
        name: "skates",
      },
      rackets: {
        type: "",
        name: "rackets",
      },
      shoes: {
        type: "",
        name: "shoes",
      },
      protection: {
        type: "",
        name: "protection",
      },
      skiing: {
        type: "",
        name: "skiing",
      },
      snowboard: {
        type: "",
        name: "snowboard",
      },
      other_sports: {
        type: "",
        name: "other_sports",
      },
      other_accessories: {
        type: "",
        name: "other_accessories",
      },
      sports_nutrition: {
        type: "",
        name: "sports_nutrition",
      },
      surfboards_and_swimming_boards: {
        type: "",
        name: "surfboards_and_swimming_boards",
      },
      bags: {
        type: "",
        name: "bags",
      },
      diving: {
        type: "",
        name: "diving",
      },
      tennis: {
        type: "",
        name: "tennis",
      },
      water_bottles: {
        type: "",
        name: "water_bottles",
      },
    },
  },
  collect_and_rare: {
    type: "",
    name: "collect_and_rare",
    icon: CollectIcon,
    children: {
      postcards: {
        type: "",
        name: "postcards",
      },
      awards_and_medals: {
        type: "",
        name: "awards_and_medals",
      },
      autographs: {
        type: "",
        name: "autographs",
      },
      aviation: {
        type: "",
        name: "aviation",
      },
      railroad: {
        type: "",
        name: "railroad",
      },
      fire_department: {
        type: "",
        name: "fire_department",
      },
      figures: {
        type: "",
        name: "figures",
      },
      thimbles: {
        type: "",
        name: "thimbles",
      },
      flacons: {
        type: "",
        name: "flacons",
      },
      pinball_boxes: {
        type: "",
        name: "pinball_boxes",
      },
      fossils: {
        type: "",
        name: "fossils",
      },
      bells_and_tinkers: {
        type: "",
        name: "bells_and_tinkers",
      },
      household_and_kitchen: {
        type: "",
        name: "household_and_kitchen",
      },
      coffee_creamer_lid: {
        type: "",
        name: "coffee_creamer_lid",
      },
      maps_and_atlases: {
        type: "",
        name: "maps_and_atlases",
      },
      agriculture: {
        type: "",
        name: "agriculture",
      },
      military: {
        type: "",
        name: "military",
      },
      minerals_and_healing_stones: {
        type: "",
        name: "minerals_and_healing_stones",
      },
      marbles: {
        type: "",
        name: "marbles",
      },
      music_chests: {
        type: "",
        name: "music_chests",
      },
      patches: {
        type: "",
        name: "patches",
      },
      pins: {
        type: "",
        name: "pins",
      },
      plaques_and_badges: {
        type: "",
        name: "plaques_and_badges",
      },
      police: {
        type: "",
        name: "police",
      },
      advertising_and_publicity: {
        type: "",
        name: "advertising_and_publicity",
      },
      trading_cards_and_trading_cards: {
        type: "",
        name: "trading_cards_and_trading_cards",
      },
      signs: {
        type: "",
        name: "signs",
      },
      keychains_and_ribbons: {
        type: "",
        name: "keychains_and_ribbons",
      },
      other_collectibles_and_rarities: {
        type: "",
        name: "other_collectibles_and_rarities",
      },
      money_boxes: {
        type: "",
        name: "money_boxes",
      },
      slot_machines: {
        type: "",
        name: "slot_machines",
      },
      music_boxes: {
        type: "",
        name: "music_boxes",
      },
      pocket_knives: {
        type: "",
        name: "pocket_knives",
      },
      telephone_and_tax_cards: {
        type: "",
        name: "telephone_and_tax_cards",
      },
      uniforms: {
        type: "",
        name: "uniforms",
      },
      world_of_animals: {
        type: "",
        name: "world_of_animals",
      },
      promotional_items: {
        type: "",
        name: "promotional_items",
      },
    },
  },
  coins: {
    type: "",
    name: "coins",
    icon: MobileIcons,
    children: {
      banknotes: {
        type: "",
        name: "banknotes",
      },
      precious_metals: {
        type: "",
        name: "precious_metals",
      },
      european_coins: {
        type: "",
        name: "european_coins",
      },
      historical_securities: {
        type: "",
        name: "historical_securities",
      },
      international_coins: {
        type: "",
        name: "international_coins",
      },
      cantonal_coins: {
        type: "",
        name: "cantonal_coins",
      },
      medals: {
        type: "",
        name: "medals",
      },
      coin_letters: {
        type: "",
        name: "coin_letters",
      },
      swiss_coins: {
        type: "",
        name: "swiss_coins",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  stamps: {
    type: "",
    name: "stamps",
    icon: AnimalsIcon,
    children: {
      all_stamps: {
        type: "",
        name: "all_stamps",
      },
      ch_stamps: {
        type: "",
        name: "ch_stamps",
      },
      official_stamps_and_postage_stamps: {
        type: "",
        name: "official_stamps_and_postage_stamps",
      },
      airmail_stamps: {
        type: "",
        name: "airmail_stamps",
      },
      international: {
        type: "",
        name: "international",
      },
      lots_and_collections: {
        type: "",
        name: "lots_and_collections",
      },
      motifs: {
        type: "",
        name: "motifs",
      },
      replica: {
        type: "",
        name: "replica",
      },
      soldier_stamps: {
        type: "",
        name: "soldier_stamps",
      },
      other_stamps: {
        type: "",
        name: "other_stamps",
      },
      uno: {
        type: "",
        name: "uno",
      },
      prephilately: {
        type: "",
        name: "prephilately",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  tickets_and_vouchers: {
    type: "",
    name: "tickets_and_vouchers",
    icon: TicketsIcon,
    children: {
      collectible_stamps_and_points: {
        type: "",
        name: "collectible_stamps_and_points",
      },
      tickets: {
        type: "",
        name: "tickets",
      },
    },
  },
  photo_and_optics: {
    type: "",
    name: "photo_and_optics",
    icon: PhotoIcon,
    children: {
      slide_photography: {
        type: "",
        name: "slide_photography",
      },
      photo_services: {
        type: "",
        name: "photo_services",
      },
      camera: {
        type: "",
        name: "camera",
      },
      lab_and_darkroom: {
        type: "",
        name: "lab_and_darkroom",
      },
      optics: {
        type: "",
        name: "optics",
      },
      accessories: {
        type: "",
        name: "accessories",
      },
    },
  },
  animal_accessories: {
    type: "",
    name: "animal_accessories",
    icon: AnimalsIcon,
    children: {
      aquarium: {
        type: "",
        name: "aquarium",
      },
      clothing: {
        type: "",
        name: "clothing",
      },
      lighting: {
        type: "",
        name: "lighting",
      },
      ceilings_and_ceiling_accessories: {
        type: "",
        name: "ceilings_and_ceiling_accessories",
      },
      decoration: {
        type: "",
        name: "decoration",
      },
      filter: {
        type: "",
        name: "filter",
      },
      lining: {
        type: "",
        name: "lining",
      },
      gaiters_and_bandages: {
        type: "",
        name: "gaiters_and_bandages",
      },
      heating: {
        type: "",
        name: "heating",
      },
      "cat_tree_-_scratching_post": {
        type: "",
        name: "cat_tree_-_scratching_post",
      },
      cages_transport_and_safety: {
        type: "",
        name: "cages_transport_and_safety",
      },
      leash_and_collar: {
        type: "",
        name: "leash_and_collar",
      },
      lying_and_sleeping_places: {
        type: "",
        name: "lying_and_sleeping_places",
      },
      plants: {
        type: "",
        name: "plants",
      },
      grooming_and_grooming_products: {
        type: "",
        name: "grooming_and_grooming_products",
      },
      pumps: {
        type: "",
        name: "pumps",
      },
      saddle_and_saddle_accessories: {
        type: "",
        name: "saddle_and_saddle_accessories",
      },
      signs_and_plaques: {
        type: "",
        name: "signs_and_plaques",
      },
      other: {
        type: "",
        name: "other",
      },
      other_animal_accessories: {
        type: "",
        name: "other_animal_accessories",
      },
      toys: {
        type: "",
        name: "toys",
      },
      stable_accessories: {
        type: "",
        name: "stable_accessories",
      },
      terrarium: {
        type: "",
        name: "terrarium",
      },
      bridle_and_halter: {
        type: "",
        name: "bridle_and_halter",
      },
    },
  },
};



export const enums = {
  "User": {
    "role": {
      "Admin": 0,
      "Private": 1,
      "Commercial": 2
    },
    "salutation": {
      "Mr": 0,
      "Ms": 1,
      "Other": 2
    },
    "accountStatus": {
      "blocked": 0,
      "active": 1,
      "deactivated": 2
    },
    "oAuthIds": {
      "google": "google",
      "facebook": "facebook",
      "apple": "apple"
    },
    "idVerificationStatus": {
      "notSubmitted": 0,
      "submittedProcessing": 1,
      "approved": 2,
      "rejected": 3
    }
  },
  "OTP": {
    "purpose": {
      "resetPwd": 0,
      "emailVerification": 1,
      "phoneVerification": 2
    }
  },
  "IdVerificationRequest": {
    "typeOfDocument": {
      "drivingLicense": 0,
      "passport": 1,
      "idCard": 2
    },
    "status": {
      "pending": 0,
      "approved": 1,
      "rejected": 2,
      "deprecated": 3
    }
  },
  "CommercialSellerRequest": {
    "status": {
      "pending": 0,
      "approved": 1,
      "rejected": 2
    }
  },
  "gender": {
    "Male": 0,
    "Female": 1,
    "Other": 2
  },
  "Report": {
    "subject": {
      "spam": "spam",
      "fraud": "fraud",
      "saleOfIllegal": "saleOfIllegal",
      "missInform": "missInform",
      "missInformAboutProduct": "missInformAboutProduct",
      "other": "other"
    },
    "status": {
      "open": 0,
      "close": 1
    },
    "type": {
      "advert": 0,
      "user": 1
    }
  },
  "Payment": {
    "type": {
      "sold": 0,
      "boost": 1,
      "refund": 2
    },
    "status": {
      "unpaid": 0,
      "paid": 1
    },
    "pay": {
      "full": 0,
      "overDue": 1
    },
    "fee": {
      "Admin": 1,
      "Private": 0.025,
      "Commercial": 0.015
    }
  },
  "Advert": {
    "pickup__addressType": {
      "primary": "primary",
      "secondary1": "secondary1",
      "secondary2": "secondary2"
    },
    "shipping__shippingType": {
      "package": "package",
      "letter": "letter"
    },
    "shipping__weightUpto": {
      "package": {
        "twoKg": "2kg",
        "tenKg": "10kg",
        "thirtyKg": "30kg"
      },
      "letter": {
        "hundredGram": "100g",
        "twoFiftyGram": "250g"
      }
    },
    "shipping__service": {
      "package": {
        "a_post": "a_post",
        "b_post": "b_post"
      },
      "letter": {
        "a_mail": "a_mail",
        "b_mail": "b_mail"
      }
    },
    "shipping__letterSize": {
      "b5": "b5",
      "b4": "b4"
    },
    "shipping__thickness": {
      "twoCm": "2cm",
      "fiveCm": "5cm"
    },
    "condition": {
      "used": 0,
      "goodAsNew": 1,
      "newAndUnopened": 2,
      "defective": 3
    },
    "priceType": {
      "auction": 0,
      "fixed": 1
    },
    "biddingStatus": {
      "none": 0,
      "active": 1,
      "paused": 2,
      "finished": 3
    },
    "durationDays": {
      "oneDay": 1,
      "sevenDays": 7,
      "fourteenDays": 14,
      "twentyOneDays": 21,
      "twentyEightDays": 28
    },
    "paymentMethod": {
      "cod": 0,
      "bank": 1,
      "both": 2
    },
    "boost": {
      "none": 0,
      "lite": 1,
      "plus": 2,
      "premium": 3
    },
    "creationStage": {
      "itemDetails": 1,
      "pricing": 2,
      "delivery": 3,
      "boost": 4
    },
    "status": {
      "draft": 0,
      "active": 1,
      "notSold": 2,
      "sold": 3
    }
  },
  "Chat": {
    "role": {
      "seller": 0,
      "buyer": 1
    }
  },
  "Rating": {
    "role": {
      "seller": 0,
      "buyer": 1
    },
    "stars": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  "Proposal": {
    "status": {
      "accept": "accept",
      "decline": "decline",
      "expire": "expire",
      "pending": "pending"
    },
    "minPrice": 0.3
  },
  "Purchase": {
    "paymentMethod": {
      "cashPayment": 0,
      "bankTransfer": 1
    },
    "collection": {
      "parcel": 0,
      "pickup": 1
    }
  }
}