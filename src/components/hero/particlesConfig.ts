import { tsParticles } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";

export const initParticles = async (id: string) => {
  await tsParticles.load({
    id,
    options: {
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      background: {
        color: {
          value: "transparent"
        }
      },
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: "#00BFFF"
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: {
            default: "out"
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        }
      },
      detectRetina: true
    } as ISourceOptions
  });
};
