const particleConfig = {
  particles: {
    number: {
      value: 75
    },
    size: {
      value: 3.5
    },
    opacity: {
      value: 1
    },
    line_linked: {
      width: 1.2,
      opacity: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      }
    }
  }
};
export default particleConfig;
