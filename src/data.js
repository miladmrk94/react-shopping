// import bcrypt from "bcryptjs";

export const products = [
  {
    id: 1,
    name: "Chuck 70 Vintage Canvas",
    type: "shoes",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      { title: "Vintage star ankle patch and license plate" },
      { title: "Archive-inspired, glossy egret midsole" },
      { title: "Ortholite insole cushioning" },
    ],
    price: 85,
    offPrice: 82,
    discount: 3,
    image: "https://s6.uupload.ir/files/01_mgms.jpg",
  },
  {
    id: 2,
    name: "Chuck Taylor All Star Washed Canvas",
    type: "shoes",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      { title: "High-top sneaker with canvas upper" },
      { title: "AOrthoLite cushioning for all-day comfort" },
      { title: "Recycled mesh lining for breathability" },
    ],
    price: 65,
    offPrice: 63,
    discount: 2,
    image: "https://s6.uupload.ir/files/02_gxn6.jpg",
  },
  {
    id: 3,
    name: "Chuck 70 Sunny-Floral",
    type: "shoes",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      { title: "Unity wordmark is a meaningful design update" },
      { title: "Pop-color vintage star ankle patch" },
      { title: "Winged tongue stitching helps keep it in place" },
    ],
    price: 89,
    offPrice: 89,
    discount: 0,
    image: "https://s6.uupload.ir/files/03_sc00.jpg",
  },
  {
    id: 4,
    name: "Chuck 70 Sunny Floral",
    type: "shoes",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      { title: "Sun wordmark is a meaningful design update" },
      { title: "Vintage license plate" },
      { title: "OrthoLite insole helps keep it comfortable" },
    ],
    price: 80,
    offPrice: 80,
    discount: 0,
    image: "https://s6.uupload.ir/files/04_9jz.jpg",
  },
  {
    id: 5,
    name: "Chuck 70 Crafted Patchwork",
    type: "shoes",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      { title: "High-top with premium canvas upper" },
      { title: "OrthoLite sockliner for all-day comfort" },
      { title: "Archive-inspired, glossy egret midsole" },
    ],
    price: 86,
    offPrice: 84,
    discount: 2,
    image: "https://s6.uupload.ir/files/05_q5pn.jpg",
  },
  {
    id: 6,
    name: "Chuck 70 '90s Marbled",
    type: "shoes",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      { title: "High-top, premium shoe with 100% recycled polyester upper" },
      { title: "Bold, all-over print inspired by paper marbling" },
      { title: "Rubber heel plate ties in '70s heritage" },
    ],
    price: 93,
    offPrice: 90,
    discount: 3,
    image: "https://s6.uupload.ir/files/06_vmyg.jpg",
  },
  {
    id: 7,
    name: "LEFT CHEST LOGO",
    type: "t-shirt",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      {
        title:
          "The Left Chest Logo T-Shirt is a 100% carded ringspun cotton t-shirt with simple graphics at the left chest. Cut: classic.",
      },
      { title: "100% COTTON" },
    ],
    price: 25,
    offPrice: 25,
    discount: 0,
    image: "https://s6.uupload.ir/files/07_97m8.jpg",
  },
  {
    id: 8,
    name: "LEFT CHEST LOGO TEE",
    type: "t-shirt",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      {
        title:
          "The Left Chest Logo T-Shirt is a 100% carded ringspun cotton t-shirt with simple graphics at the left chest. Cut: classic.",
      },
      { title: "100% COTTON" },
    ],
    price: 23,
    offPrice: 21,
    discount: 2,
    image: "https://s6.uupload.ir/files/08_yl3j.jpg",
  },
  {
    id: 9,
    name: "BANDANA PAISLEY",
    type: "t-shirt",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      {
        title:
          "The Left Chest Logo T-Shirt is a 100% carded ringspun cotton t-shirt with simple graphics at the left chest. Cut: classic.",
      },
      { title: "100% COTTON" },
    ],
    price: 38,
    offPrice: 35,
    discount: 3,
    image: "https://s6.uupload.ir/files/09_6es3.jpg",
  },
  {
    id: 10,
    name: "CLASSIC PRINT BOX",
    type: "t-shirt",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      {
        title:
          "The Left Chest Logo T-Shirt is a 100% carded ringspun cotton t-shirt with simple graphics at the left chest. Cut: classic.",
      },
      { title: "100% COTTON" },
    ],
    price: 33,
    offPrice: 33,
    discount: 0,
    image: "https://s6.uupload.ir/files/10_ahar.jpg",
  },
  {
    id: 11,
    name: "VINTAGE PEACE OF MIND",
    type: "t-shirt",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      {
        title:
          "The Left Chest Logo T-Shirt is a 100% carded ringspun cotton t-shirt with simple graphics at the left chest. Cut: classic.",
      },
      { title: "100% COTTON" },
    ],
    price: 50,
    offPrice: 48,
    discount: 2,
    image: "https://s6.uupload.ir/files/11_qy15.jpg",
  },
  {
    id: 12,
    name: "WOVEN PATCH POCKET",
    type: "t-shirt",
    description: [
      { feat: "DESCRIPTION AND FEATURES" },
      {
        title:
          "The Left Chest Logo T-Shirt is a 100% carded ringspun cotton t-shirt with simple graphics at the left chest. Cut: classic.",
      },
      { title: "100% COTTON" },
    ],
    price: 35,
    offPrice: 35,
    discount: 0,
    image: "https://s6.uupload.ir/files/12_h2k0.jpg",
  },
];

// export const users = [
//   {
//     name: "Saheb mohamadi",
//     email: "saheb.ex@gmail.com",
//     password: bcrypt.hashSync("12345", 8),
//     phoneNumber: "09180000000",
//     isAdmin: true,
//   },
//   {
//     name: "John",
//     email: "user@example.com",
//     password: bcrypt.hashSync("1234", 8),
//     isAdmin: false,
//     phoneNumber: "09181230000",
//   },
// ];
