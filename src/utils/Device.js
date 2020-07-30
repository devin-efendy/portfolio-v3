const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  laptopXL: "1600px",
  desktop: "2560px",
}

const Device = {
  max: {
    MobileS: `(max-width: ${size.mobileS})`,
    MobileM: `(max-width: ${size.mobileM})`,
    MobileL: `(max-width: ${size.mobileL})`,
    Tablet: `(max-width: ${size.tablet})`,
    Laptop: `(max-width: ${size.laptop})`,
    LaptopL: `(max-width: ${size.laptopL})`,
    LaptopXL: `(max-width: ${size.laptopXL})`,
    Desktop: `(max-width: ${size.desktop})`,
  },
  min: {
    MobileS: `(min-width: ${size.mobileS})`,
    MobileM: `(min-width: ${size.mobileM})`,
    MobileL: `(min-width: ${size.mobileL})`,
    Tablet: `(min-width: ${size.tablet})`,
    Laptop: `(min-width: ${size.laptop})`,
    LaptopL: `(min-width: ${size.laptopL})`,
    LaptopXL: `(min-width: ${size.laptopXL})`,
    Desktop: `(min-width: ${size.desktop})`,
  },
}

export default Device
