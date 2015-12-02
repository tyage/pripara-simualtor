import { buttonPositionX, buttonPositionY, buttonRadius, width, height, maxScore } from './config';

let drawButton = ctx => {
  ctx.save();

  ctx.translate(buttonPositionX, buttonPositionY);

  // 一番外のふち
  ctx.strokeStyle = '#ca31cd';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(0, 0, buttonRadius, 0, Math.PI * 2, false);
  ctx.stroke();

  // 一つ中にあるふち
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(0, 0, buttonRadius, 0, Math.PI * 2, false);
  ctx.stroke();

  // 一番中のふち
  let grad = ctx.createLinearGradient(0, 0, 0, buttonRadius * 2);
  grad.addColorStop(0, '#a77518');
  grad.addColorStop(1, '#f3e244');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, buttonRadius, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.restore();
};

let drawStage1 = ctx => {
  ctx.save();

  drawButton(ctx);

  // 下部のテキスト
  ctx.font = '25px "TakaoPGothic"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#37ade1';
  ctx.fillText('画面をおしてね！', width / 2, height - 40);

  ctx.restore();
};

let drawScore = (ctx, score) => {
  ctx.save();

  // スコアのゲージ
  let grad = ctx.createLinearGradient(20, 30, width - 40, 30);
  grad.addColorStop(0, '#7cffad');
  grad.addColorStop(0.33, '#fbff6b');
  grad.addColorStop(0.66, '#f28346');
  grad.addColorStop(1, '#d91b94');

  ctx.fillStyle = grad;
  let scoreWidth = (width - 40) * (score < maxScore ? score / maxScore : 1);
  ctx.fillRect(20, 30, scoreWidth, 30);

  // 縁
  ctx.strokeStyle = '#c4b6d7';
  ctx.shadowColor = '#e9d2e9';
  ctx.shadowBlur = 10;
  ctx.lineWidth = 5;
  ctx.strokeRect(20, 30, width - 40, 30);

  ctx.restore();
};

let drawCommonBackground = (ctx, score) => {
  drawScore(ctx, score);
};

export { drawStage1, drawCommonBackground };
