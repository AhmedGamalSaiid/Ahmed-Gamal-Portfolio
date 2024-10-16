import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import Skills from "../skills/Skills";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import wordpress from "../../assets/images/wordpress.svg";
import angular from "../../assets/images/angular.svg";
import htmlIcon from "../../assets/images/html-icon.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import sassIcon from "../../assets/images/sass-icon.svg";
import jsIcon from "../../assets/images/js-icon.svg";
import nodeIcon from "../../assets/images/node-icon.svg";
import reactIcon from "../../assets/images/react-icon.svg";
import typescriptIcon from "../../assets/images/typescript-icon.svg";
import primeNgIcon from "../../assets/images/primeng.svg";
import boostrapIcon from "../../assets/images/bootstrap-icon.svg";
import vscodeIcon from "../../assets/images/vscode-icon.svg";
import Ex from "../ex/ex";

export function Main() {
  const theme = {
    body: "#212121",
    text: "white",
    expTxtColor: "#000a12",
    highlight: "#4f5b62",
    dark: "#000a12",
    secondaryText: "#f3f6f3",
    imageHighlight: "#607d8b",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#8eacbb",
    headerColor: "#34515e",
    splashBg: "#4f5b62",
  };
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: boostrapIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: cssIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: wordpress,
                  width: 20,
                  height: 20,
                },
                {
                  src: angular,
                  width: 20,
                  height: 20,
                },
                {
                  src: htmlIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: jsIcon,
                  width: 20,
                  height: 20,
                },
                // {
                //   "src": mysqlIcon,
                //   "width": 20,
                //   "height": 20
                // },
                {
                  src: nodeIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: reactIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: sassIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: typescriptIcon,
                  width: 20,
                  height: 20,
                },
                {
                  "src": vscodeIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  src: primeNgIcon,
                  width: 20,
                  height: 20,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Skills theme={theme}></Skills>
      {/* <Ex></Ex> */}
      {/* <Project></Project> */}
      <Contact></Contact>
    </Container>
  );
}
