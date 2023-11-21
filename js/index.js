//? GLOBAL
for (let i = 1; i <= 4; i++) {
  document.querySelector(`#animated-svg${i}`).onclick = function () {
    document.querySelector(`#item${i}`).classList.toggle("open");
  };
}

var buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    for (let i = 1; i <= 4; i++)
      document.querySelector(`#item${i}`).classList.remove("open");
  });
});

function domId(id) {
  return document.getElementById(id);
}

function areValidNumbers(...nums) {
  return nums.every(function (num) {
    return num >= 0 && num !== "";
  });
}


function checkRadioButtons(...strs) {
  for (const str of strs) {
    var selectedRadioButton = document.querySelector(`input[name=${str}]:checked`);
    if (!selectedRadioButton) {
      return false; // Nếu có bất kỳ radio button nào trong các nhóm không được chọn, trả về false
    }
  }

  return true; // Nếu tất cả các nhóm radio button đều có ít nhất một radio button được chọn, trả về true
}

function uncheckRadio(str) {
  // Lựa chọn radio button cần bỏ chọn bằng cách sử dụng CSS selector
  var radio = document.querySelector(`input[name=${str}]:checked`);

  // Nếu có radio được chọn, bỏ chọn nó
  if (radio) {
    radio.checked = false;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 1
const KHU_VUC_A = 2;
const KHU_VUC_B = 1;
const KHU_VUC_C = 0.5;
const DOI_TUONG_1 = 2.5;
const DOI_TUONG_2 = 1.5;
const DOI_TUONG_3 = 1;

function getCheckedOptionValue(options) {
  for (var option in options) {
    if (domId(option).checked) {
      return options[option];
    }
  }
  return 0;
}

domId("btn-1").onclick = function () {
  var diemChuan = domId("diemChuan").value;
  var diemMon1 = domId("diemMon1").value;
  var diemMon2 = domId("diemMon2").value;
  var diemMon3 = domId("diemMon3").value;

  if (!areValidNumbers(diemChuan, diemMon1, diemMon2, diemMon3) || !checkRadioButtons('selector1', 'selector2')) {
    domId("result1").style.display = "none";
    return;
  }
  domId("result1").style.display = "block";
  // convert string to number
  diemChuan = +diemChuan;
  diemMon1 = +diemMon1;
  diemMon2 = +diemMon2;
  diemMon3 = +diemMon3


  var area_options = {
    'khuVucA': KHU_VUC_A,
    'khuVucB': KHU_VUC_B,
    'khuVucC': KHU_VUC_C,
  };

  var object_options = {
    'object1': DOI_TUONG_1,
    'object2': DOI_TUONG_2,
    'object3': DOI_TUONG_3,
  };

  var areaScore = getCheckedOptionValue(area_options);
  var objectScore = getCheckedOptionValue(object_options)
  var totalScore = 0;
  totalScore = diemMon1 + diemMon2 + diemMon3 + areaScore + objectScore;

  var monHocVaDiem = {
    'Môn 1': diemMon1,
    'Môn 2': diemMon2,
    'Môn 3': diemMon3
  };

  var monRot = [];

  for (var mon in monHocVaDiem) {
    if (monHocVaDiem[mon] === 0) {
      monRot.push(mon);
    }
  }

  if (monRot.length > 0) {
    domId('result1').innerHTML = `Bạn đã rớt do có điểm 0 ở: ${monRot.join(', ')}`
    return;
  }

  if (totalScore >= diemChuan) {
    domId('result1').innerHTML = `Bạn đã đậu với tổng điểm ${totalScore}.`
  } else {
    domId('result1').innerHTML = `Bạn đã rớt do tổng điểm: ${totalScore} thấp hơn điểm chuẩn: ${diemChuan}.`
  }
};
//* End lesson 1

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 2
const KW_1_50 = 500;
const KW_51_100 = 650;
const KW_101_200 = 850;
const KW_201_350 = 1_100;
const KW_TREN_350 = 1_300;

domId('btn-2').onclick = function () {
  var customerName = domId('customerName').value
  var soKw = domId('soKw').value
  var tienDien = 0;
  if (!areValidNumbers(soKw) || customerName == '' || !isNaN(+customerName) || soKw == 0) {
    domId("result2").style.display = "none";
    return;
  }

  soKw = + soKw

  if (soKw >= 1 && soKw <= 50) {
    tienDien = soKw * KW_1_50;
  } else if (soKw >= 51 && soKw <= 100) {
    tienDien = 50 * KW_1_50 + (soKw - 50) * KW_51_100;
  } else if (soKw >= 101 && soKw <= 200) {
    tienDien = 50 * (KW_1_50 + KW_51_100) + (soKw - 100) * KW_101_200;
  } else if (soKw >= 201 && soKw <= 350) {
    tienDien = 50 * (KW_1_50 + KW_51_100) + 100 * KW_101_200 + (soKw - 200) * KW_201_350;
  } else if (soKw > 350) {
    tienDien = 50 * (KW_1_50 + KW_51_100) + 100 * KW_101_200 + 150 * KW_201_350 + (soKw - 350) * KW_TREN_350;
  }

  domId('result2').innerHTML = `Khách hàng: ${customerName} cần thanh toán ${new Intl.NumberFormat('vn-VN').format(tienDien)} VNĐ tiền điện tháng này`
  domId('result2').style.display = 'block';
}
//* End lesson 2

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 3
const THUE_SUAT_DEN_60 = 0.05;
const THUE_SUAT_TREN_60_DEN_120 = 0.10;
const THUE_SUAT_TREN_120_DEN_210 = 0.15;
const THUE_SUAT_TREN_210_DEN_384 = 0.20;
const THUE_SUAT_TREN_384_DEN_624 = 0.25;
const THUE_SUAT_TREN_624_DEN_960 = 0.30;
const THUE_SUAT_TREN_960 = 0.35;

const CHIU_THUE_60 = 60e+6;
const CHIU_THUE_120 = 120e+6;
const CHIU_THUE_210 = 210e+6;
const CHIU_THUE_384 = 384e+6;
const CHIU_THUE_624 = 624e+6;
const CHIU_THUE_960 = 960e+6;
domId('btn-3').onclick = function () {
  var hoTen = domId('hoTen').value;
  var tongThuNhap = domId('tongThuNhap').value;
  var soNguoiPhuThuoc = domId('nguoiPhuThuoc').value;
  if (hoTen == '' || !isNaN(+hoTen) || !areValidNumbers(tongThuNhap, soNguoiPhuThuoc) || !Number.isInteger(+soNguoiPhuThuoc) || tongThuNhap <= (4e+6)) {
    domId("result3").style.display = "none";
    return;
  }

  tongThuNhap = +tongThuNhap;
  soNguoiPhuThuoc = +soNguoiPhuThuoc;

  var thuNhapChiuThue = tongThuNhap - (4e+6) - soNguoiPhuThuoc * (1.6e+6)

  if (thuNhapChiuThue < 0) {
    domId("result3").style.display = "none";
    return
  }

  var thueThuNhapCaNhan = 0;
  if (thuNhapChiuThue <= CHIU_THUE_60) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_DEN_60;
  } else if (thuNhapChiuThue > CHIU_THUE_60 && thuNhapChiuThue <= CHIU_THUE_120) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_TREN_60_DEN_120
  } else if (thuNhapChiuThue > CHIU_THUE_120 && thuNhapChiuThue <= CHIU_THUE_210) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_TREN_120_DEN_210
  } else if (thuNhapChiuThue > CHIU_THUE_210 && thuNhapChiuThue <= CHIU_THUE_384) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_TREN_210_DEN_384
  } else if (thuNhapChiuThue > CHIU_THUE_384 && thuNhapChiuThue <= CHIU_THUE_624) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_TREN_384_DEN_624;
  } else if (thuNhapChiuThue > CHIU_THUE_624 && thuNhapChiuThue <= CHIU_THUE_960) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_TREN_624_DEN_960;
  } else if (thuNhapChiuThue > CHIU_THUE_960) {
    thueThuNhapCaNhan = thuNhapChiuThue * THUE_SUAT_TREN_960;
  }

  domId('result3').style.display = 'block'
  domId('result3').innerHTML = `Khách hàng ${hoTen} có tiền thuế thu nhập cá nhân là ${new Intl.NumberFormat('vn-VN').format(thueThuNhapCaNhan)} VNĐ `
}

//* End lesson 3

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 4
function toggleInput() {

  domId('connect-num').style.display = domId('business').checked ? 'flex' : 'none';
}

// Xóa chọn trạng thải của radiobutton khi load lại trang
var domItem4 = domId('item4')
if (!domItem4.classList.contains('open')) {
  uncheckRadio('selector1')
}

const XU_LY_HOA_DON_HOUSE = 4.5
const DV_CO_BAN_HOUSE = 20.5
const KENH_CAO_CAP_HOUSE = 7.5

const XU_LY_HOA_DON_BUSINESS = 15
const DV_CO_BAN_BUSINESS = 75
const KET_NOI_THEM = 5
const KENH_CAO_CAP_BUSINESS = 50

function checkSoKetNoi(soKetNoi, domRadio) {
  if (domRadio.checked) {
    if (!areValidNumbers(soKetNoi) || !Number.isInteger(+soKetNoi)) {
      return false
    }
  }
  return true

}

domId('btn-4').onclick = function () {
  var maKhachhang = domId('maKhachHang').value
  var soKenhCaoCap = domId('soKenh').value
  var soKetNoi = domId('soKetNoi').value
  var tienCap =0;

  if (maKhachhang == '' || !areValidNumbers(soKenhCaoCap) || !Number.isInteger(+soKenhCaoCap) || !checkSoKetNoi(soKetNoi,domId('business'))) {
    domId("result4").style.display = "none";
    return;
  }

  soKenhCaoCap = +soKenhCaoCap
  soKetNoi = +soKetNoi
  if(domId('nhaDan').checked){
    tienCap = XU_LY_HOA_DON_HOUSE + DV_CO_BAN_HOUSE + KENH_CAO_CAP_HOUSE*soKenhCaoCap
  }else{
    var phiDV = soKetNoi<=10 ? DV_CO_BAN_BUSINESS : DV_CO_BAN_BUSINESS+(soKetNoi-10)*KET_NOI_THEM 
    tienCap = XU_LY_HOA_DON_BUSINESS + phiDV + KENH_CAO_CAP_BUSINESS*soKenhCaoCap
  }

  domId('result4').style.display = 'block'
  domId('result4').innerHTML = `Mã khách hàng: ${maKhachhang} ; Tiền cáp: ${tienCap}$`
}

//* End lesson 4  