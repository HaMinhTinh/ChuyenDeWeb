
// all images imported from images directory
import product_01_image_01 from "../images/giay1.jpg";
import product_01_image_02 from "../images/giay1_1.jpg";
import product_01_image_03 from "../images/giay1_2.jpg";

import product_02_image_01 from "../images/giay2.jpg";
import product_02_image_02 from "../images/giay2_1.jpg";
import product_02_image_03 from "../images/giay2_2.jpg";

import product_03_image_01 from "../images/giay3.png";
import product_03_image_02 from "../images/giay3_1.jpg";
import product_03_image_03 from "../images/giay3_2.jpg";

import product_04_image_01 from "../images/giay4.jpg";
import product_04_image_02 from "../images/giay4_1.jpg";
import product_04_image_03 from "../images/giay4_2.jpg";

import product_05_image_01 from "../images/giay5.jpg";
import product_05_image_02 from "../images/giay5_1.jpg";
import product_05_image_03 from "../images/giay5_2.jpg";

import product_06_image_01 from "../images/giay6.jpg";
import product_06_image_02 from "../images/giay6_1.jpg";
import product_06_image_03 from "../images/giay6_2.jpg";


const products = [
  {
    id: "01",
    title: "Adidas NMD R1 Grey",
    price: 640000.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Adidas",

    desc: "Phù hợp: nam nữ, đi học, đi làm, tập gym. Size: 36-44. Chất liệu: Vải dệt Primeknit. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng.",
  },

  {
    id: "02",
    title: "Vans Style 36 “Marshmallow”",
    price: 500000.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Vans",

    desc: "Phù hợp: nam nữ, đi học, đi làm, hoạt động thể thao. Size: 36-44. Chất liệu: Canvas. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },

  {
    id: "03",
    title: "Giày New Balance Pro Court 'Beige Navy' [PROCTCCF]",
    price: 450000.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "New Balance",

    desc: "",
  },

  {
    id: "04",
    title: "Balenciaga Triple S Trainer Grey",
    price: 780000.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Balenciaga",

    desc: "Đế giày tăng chiều cao. Phù hợp: nam nữ, đi học, đi làm, hoạt động thể thao. Size: 36-44. Chất liệu: Da. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },

  {
    id: "05",
    title: "Air Force 1 Shadow Phantom",
    price: 630000.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Nike",

    desc: "Phù hợp: Nữ, đi học, đi làm, hoạt động thể thao. Size: 36-39. Chất liệu: Da. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },
  {
    id: "06",
    title: "Converse Chuck 70 Low Top White",
    price: 540000.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Converse",

    desc: "Phù hợp: nam nữ, đi học, đi làm, hoạt động thể thao. Size: 36-44. Chất liệu: Canvas. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },

  {
    id: "07",
    title: "Air Force 1 Shadow Spruce ",
    price: 580000.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Nike",

    desc: "",
  },

  {
    id: "08",
    title: "Nike Gives the Air Max 97 Ultra  Platinum Makeover",
    price: 620000.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Nike",

    desc: "Đế giày tăng chiều cao. Phù hợp: nam nữ, đi học, đi làm, hoạt động thể thao. Size: 36-44. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },

  {
    id: "09",
    title: "Adidas Prophere Grey Solar Red",
    price: 750000.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Adidas",

    desc: "",
  },

  {
    id: "10",
    title: "Nike Air Force 1 White Low",
    price: 800000.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Nike",

    desc: "Thiết kế ấn tượng, tính năng thời trang All-In-One, công nghệ đế Air độc quyền, bảo hành lên đến 3 tháng ",
  },

  {
    id: "11",
    title: "Vans Old Skool Classic Black",
    price: 850000.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Vans",

    desc: "Phù hợp: nam nữ, đi học, đi làm, hoạt động thể thao. Size: 36-44. Chất liệu: Canvas. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },

  {
    id: "12",
    title: "Adidas Stan Smith Fairway",
    price: 640000.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Adidas",

    desc: "Phù hợp: nam nữ, đi học, đi làm, tập gym. Size: 36-44. Êm chân, thoáng khí. Giao hàng toàn quốc. Bảo hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.",
  },
];

export default products;
