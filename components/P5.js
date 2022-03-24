import React, { Component } from "react";
import p5 from "p5";

var bear;

export default class App extends Component {
  //React ref for div reference we pass into p5
  sketchRef = React.createRef();

  //P5 instance mode
  initSketch = (p) => {
    p.preload = () => {
      p.bear = p.loadModel("https://7e7qt0.csb.app/Bear.obj");
    };

    p.windowResized = () => {
      //handle window resize here
      if (p.windowWidth < 980) {
        p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
      } else {
        p.resizeCanvas(p.windowWidth / 2, p.windowHeight);
      }
    };
    p.setup = () => {
      //setup canvas and init values here
      p.createCanvas(p.windowWidth / 2, p.windowHeight, p.WEBGL);

      if (p.windowWidth < 980) {
        p.createCanvas(p.windowWidth, p.windowHeight / 2, p.WEBGL);
      } else {
        p.createCanvas(p.windowWidth / 2, p.windowHeight, p.WEBGL);
      }
    };

    p.draw = () => {
      //update canvas here
      p.background(0);
      if (p.windowWidth < 980) {
        p.scale(120);
      } else {
        p.scale(200);
      }
      p.noStroke();

      p.ambientLight(100);
      p.specularMaterial(255);
      p.directionalLight(250, 250, 250, 250, 250, -1);

      p.rotateX(3);
      p.rotateY(p.frameCount * 0.005);
      p.rotateZ(p.frameCount * 0.005);

      if (p.windowWidth > 980) {
        p.rotateY(-p.mouseX * 0.005);
        p.rotateZ(-p.mouseY * 0.005);
      }

      p.translate(0, -1);
      p.model(p.bear);
    };
  };

  componentDidMount() {
    //Create p5 canvas once component mounts
    this.p5Canvas = new p5(this.initSketch, this.sketchRef.current);
  }

  render() {
    //this div will contain the sketch canvas
    return <div className="pfive" ref={this.sketchRef} />;
  }
}
