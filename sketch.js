let hueOffset = 0; // 用於控制色相偏移的變數

function setup() {
  createCanvas(windowWidth, windowHeight); // 使用全螢幕畫布
  colorMode(HSB, 360, 100, 100, 1); // 設定使用 HSB 顏色模式，並啟用 alpha 通道
  //noStroke(); // 移除邊框
}

function draw() {
  background('#ffafcc');
  let circleDiameter = min(width / 20, height / 20); // 根據視窗大小計算圓的直徑，確保圓能完整顯示
  let circleSpacingX = circleDiameter; // 調整圓之間的水平間距，使其不重疊
  let circleSpacingY = circleDiameter; // 調整圓之間的垂直間距，使其不重疊

  let numberOfCirclesX = Math.floor(width / circleSpacingX); // 計算視窗中水平方向可以容納的圓的數量
  //let numberOfCirclesY = Math.floor(height / circleSpacingY); // 計算視窗中垂直方向可以容納的圓的數量

  let startX = (width - numberOfCirclesX * circleSpacingX) / 2 + circleDiameter / 2; // 調整起始 x 座標，使圓在水平方向居中顯示
  let startY = height / 2; // 調整起始 y 座標，使圓在垂直方向居中顯示，固定在畫面中間

  //for (let j = 0; j < numberOfCirclesY; j++) {
    for (let i = 0; i < numberOfCirclesX; i++) {
      let x = startX + i * circleSpacingX;
      let y = startY;
      let hue = map(x, startX, startX + (numberOfCirclesX - 1) * circleSpacingX, 0, 360); // 將 x 座標映射到色相值
      hue = (hue + hueOffset) % 360; // 增加色相偏移，並使用模數運算確保色相值在 0-360 範圍內
      let brightness = map(mouseY, 0, height, 100, 0); // 根據滑鼠的垂直位置映射亮度值
      let saturation = map(mouseX, 0, width, 0, 100); // 根據滑鼠的水平位置映射飽和度值
      fill(hue, saturation, brightness, 1); // 設定填充顏色，使用滑鼠控制的亮度和飽和度
      ellipse(x, y, circleDiameter, circleDiameter); // 繪製圓圈
    }
  //}

  hueOffset = (hueOffset + 1) % 360; // 每次 draw 迴圈增加色相偏移
  //noLoop(); // 移除 noLoop，以便持續更新畫面
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 調整視窗大小時重新調整畫布大小
  draw(); // 重新繪製
}
