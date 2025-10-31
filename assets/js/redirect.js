// redirect.js
// ---------------------------
// 点击按钮后跳转到指定网址
// 可在任意页面引入
// ---------------------------

// 页面加载完成后绑定事件
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("jumpButton");

  // 如果页面上存在该按钮
  if (button) {
    button.addEventListener("click", function () {
      // 这里替换为你要跳转的地址
      const targetUrl = "https://chromaverse.top/payment";  
      
      // 动画反馈（可选）
      button.style.transform = "scale(0.95)";
      button.style.transition = "transform 0.1s ease";

      // 延时跳转（给用户轻微反馈）
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 150);
    });
  }
});
