const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "748px",
  laptop: "1000px",
  laptopM: "1346px",
  laptopL: "1420px",
  laptopXL: "1580px",
  fhd: "1900px",
  desktop: "2540px",
}

const Device = {
  max: {
    MobileS: `(max-width: ${size.mobileS})`,
    MobileM: `(max-width: ${size.mobileM})`,
    MobileL: `(max-width: ${size.mobileL})`,
    Tablet: `(max-width: ${size.tablet})`,
    Laptop: `(max-width: ${size.laptop})`,
    LaptopM: `(max-width: ${size.laptopM})`,
    LaptopL: `(max-width: ${size.laptopL})`,
    LaptopXL: `(max-width: ${size.laptopXL})`,
    FHD: `(max-width: ${size.fhd})`,
    Desktop: `(max-width: ${size.desktop})`,
  },
  min: {
    MobileS: `(min-width: ${size.mobileS})`,
    MobileM: `(min-width: ${size.mobileM})`,
    MobileL: `(min-width: ${size.mobileL})`,
    Tablet: `(min-width: ${size.tablet})`,
    Laptop: `(min-width: ${size.laptop})`,
    LaptopM: `(min-width: ${size.laptopM})`,
    LaptopL: `(min-width: ${size.laptopL})`,
    LaptopXL: `(min-width: ${size.laptopXL})`,
    FHD: `(min-width: ${size.fhd})`,
    Desktop: `(min-width: ${size.desktop})`,
  },
}

export default Device
