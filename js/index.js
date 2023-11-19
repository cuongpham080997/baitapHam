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
    return !isNaN(num) && num >= 0 && num !== "";
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

//* Start lesson 1
const KHU_VUC_A = 2;
const KHU_VUC_B = 1;
const KHU_VUC_C = 0.5;
const DOI_TUONG_1 = 2.5;
const DOI_TUONG_2 = 1.5;
const DOI_TUONG_3 = 1;

domId("btn-1").onclick = function () {
  var diemChuan = domId("diemChuan").value;
  var diemMon1 = domId("diemMon1").value;
  var diemMon2 = domId("diemMon2").value;
  var diemMon3 = domId("diemMon3").value;

  if (!areValidNumbers(diemChuan, diemMon1, diemMon2, diemMon3) || !checkRadioButtons('selector1','selector2')) {
    domId("result1").style.display = "none";
    return;
  }
  ///Xử lý tiếp ở đây
};

//* End lesson 1

//* Start lesson 2
//* End lesson 2

//* Start lesson 3
//* End lesson 3
