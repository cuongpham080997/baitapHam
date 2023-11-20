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


















//* End lesson 3
