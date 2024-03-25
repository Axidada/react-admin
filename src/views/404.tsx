import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/404.scss';

interface Icanvas {
  words: number[];
  width: number;
  height: number;
}
const canvasObj: Icanvas = {
  width: 0,
  height: 0,
  words: []
};
let timeDraw: NodeJS.Timeout; //eslint-disable-line
let canvas2d: CanvasRenderingContext2D | null;
export default function NoMatch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const history = useNavigate();

  // 返回首页
  function toHome() {
    history('/');
  }
  // 绘制canvas
  function draw() {
    if (canvas2d) {
      canvas2d.fillStyle = 'rgba(0,0,0,0.05)';
      canvas2d.fillRect(0, 0, canvasObj.width, canvasObj.height);
      canvas2d.fillStyle = color2();
      canvasObj.words.map(function (y, n) {
        const text = String.fromCharCode(Math.ceil(65 + Math.random() * 57));
        const x = n * 10;
        if (canvas2d) {
          canvas2d.fillText(text, x, y);
        }
        canvasObj.words[n] = y > 758 + Math.random() * 484 ? 0 : y + 10;
      });
    }
  }
  // 生成随机色
  function color2() {
    let color = Math.ceil(Math.random() * 16777215).toString(16);
    while (color.length < 6) {
      color = '0' + color;
    }
    return '#' + color;
  }
  // 初始化canvas
  function canvasInit() {
    canvas2d = canvasRef.current?.getContext('2d') || null;
    if (canvas2d) {
      canvasObj.width = canvas2d.canvas.width = window.screen.width;
      canvasObj.height = canvas2d.canvas.height = window.screen.height;
      canvas2d.fillStyle = color2();
      canvasObj.words = Array(256).fill(1);
      timeDraw = setInterval(draw, 100);
    }
  }

  useEffect(() => {
    canvasInit();
    return () => {
      clearInterval(timeDraw);
    };
  }, []);
  return (
    <div className="error404">
      <div className="error404-bg">
        <canvas ref={canvasRef} id="canvas" width="1000" height="500"></canvas>
      </div>
      <div className="error404-content">
        <h3>404</h3>
        <div>
          <span className="error404-button" onClick={toHome.bind(this)}>
            返回首页
          </span>
        </div>
      </div>
    </div>
  );
}
