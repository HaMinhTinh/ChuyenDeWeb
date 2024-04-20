// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread_thit.png";
import product_06_image_02 from "../images/banh_mi_cha.png";
import product_06_image_03 from "../images/bread_thit.png";

const products = [
  {
    id: "01",
    title: "Hamburger Gà",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Bánh mì hamburger đùi gà lọc xương, xà lách, cà chua. Tương cà, tương ớt, mù tạc mật ong, Mayonnaise",
  },

  {
    id: "02",
    title: "Pizza Chay",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    
    desc: "Thanh Nhẹ Với Ô Liu Đen Tuyệt Hảo, Cà Chua Bi Tươi Ngon, Nấm, Thơm, Bắp, Hành Tây Và Phô Mai Mozzarella Cho Bạn Bữa Tiệc Rau Củ Tròn Vị",
  },

  {
    id: "03",
    title: "Pizza Thập Cẩm",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    
    desc: "Thịt bò, thịt xông khói, pepperoni, thơm, ớt chuông, nấm, hành tây trên nền xốt cà chua, phô mai mozzarella",
  },

  {
    id: "04",
    title: "Pizza Thường",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    
    desc: "Thơm Ngon Và Giàu Protein Với Thịt Xông Khói, Xúc Xích, ThịT Bò, Giăm Bông Và Pepperoni",
  },

  {
    id: "05",
    title: "Hamburger cá hồi",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Với hương vị độc đáo, ít tanh, cá hồi chính là một nguồn cung cấp Omega – 3, Vitamin B và chứa những chất dinh dưỡng đặc biệt như Kali giúp Bé yêu nhà mình thêm thông minh, khỏe mạnh. Ngoài ra còn giúp Ba giảm huyết áp, Selenium giúp giảm nguy cơ mắc bệnh ung thư và Astaxanthin chống oxy hóa nữa nè! ",
  },
  {
    id: "06",
    title: "Hamburger cá ngừ",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Vị béo thơm đặc trưng của cá ngừ, vị thanh mát của xà lách, vị chua dịu của cà chua cộng thêm chút bùi béo của sốt đậm đà, còn có lớp phô mai mềm tan chảy,… Tất cả hài hòa tạo nên món burger cá ngừ cực hấp dẫn cho một bữa sáng tràn đầy năng lượng",
  },

  {
    id: "07",
    title: "Pizza Hải Sản",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    
    desc: "Pizza Hải Sản Với Hải Sản (MựC, Thanh Cua) Nhân Đôi Cùng Với Thơm, Ớt Chuông Xanh, HàNh Tây, Phủ Phô Mai Mozzarella Từ New Zealand Trên Nền XốT Cheesy Mayo.",
  },

  {
    id: "08",
    title: "Pizza Phô Mai",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    
    desc: "Thưởng thức vị gà Karaage chiên giòn cắt lát trên nền pizza đậm vị, cùng nấm tươi, hành tây hoà quyện xốt phô mai",
  },

  {
    id: "09",
    title: "Pizza Gà Nướng Nấm",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
    
    desc: "Pizza Gà Nướng Nấm Trong Cuộc Phiêu Lưu Vị Giác Với Thịt Gà, Nấm, Thơm, Cà Rốt Và Rau Mầm Phủ Xốt Tiêu Đen Thơm Nồng",
  },

  {
    id: "10",
    title: "Hamburger Bò",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Bò được chọn lọc kĩ càng ngay từ khâu đầu vào, thịt bò mềm được tẩm ướp bằng các nguyên liệu đảm bảo vệ sinh an toàn thực phẩm. Bò được chế biến cực ngon, thịt bên trong chín mềm. Độ ngon ngọt của thịt bò được giữ trọn trong từng thớ thịt.",
  },

  {
    id: "11",
    title: "Bánh Mì Thịt",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Sản phẩm gồm thịt, bơ, chả, pate nóng. Đặc biệt, rau dưa sẽ được để riêng nên các khách hàng dễ dàng order, không sợ nhầm lẫn đơn hàng!",
  },

  {
    id: "13",
    title: "Bánh Mì Chả",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Thành phần nguyên liệu đều được chọn lọc từ những nhà cung cấp hàng đầu cả nước và được chứng nhận bởi cơ quan chức năng. Khâu sản xuất là dây chuyền khép kín trong môi trường tuyệt đối vô trùng, được xử lý bằng tia cực tím trước khi đóng gói nên đảm bảo tuyệt đối an toàn vệ sinh thực phẩm.",
  },
];

export default products;
