const config = {
  viewWidth: 750, // 设计图宽度
};

// 设置 rem 函数
export default function setRem() {
  
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const remWidth = document.documentElement.clientWidth >= 750 ? 750 : document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${remWidth / config.viewWidth * 100}px`;
  
  // 改变窗口大小时重新设置 rem
  window.onresize = () => {
    setRem();
  };
}