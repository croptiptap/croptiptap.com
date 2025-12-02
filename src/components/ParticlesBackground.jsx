import { useEffect } from 'react';

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#00f0ff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "bounce",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 1222.7772227772227,
                            "size": 39.96003996003996,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 175.82417582417582,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }

        // Cleanup function to remove particles instance on unmount
        return () => {
            // particles.js doesn't have a clean destroy method exposed easily on window, 
            // but we can try to clear the array if we had access to the instance.
            // For now, we rely on the fact that re-initializing might overwrite.
            // However, to be safe, we can clear the innerHTML of the container if needed,
            // but React will handle the node removal.
            const container = document.getElementById('particles-js');
            if (container) {
                // Optional: cancel animation frame if possible, but pJSDom is global
                if (window.pJSDom && window.pJSDom.length > 0) {
                    // Attempt to clean up the last instance
                    // window.pJSDom[0].pJS.fn.vendors.destroypJS(); // This is internal API, might not work
                }
            }
        };
    }, []);

    return (
        <>
            <style>
                {`
          #particles-js canvas {
            display: block;
            width: 100%;
            height: 100%;
          }
        `}
            </style>
            <div
                id="particles-js"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    backgroundColor: 'transparent',
                }}
            />
        </>
    );
};

export default ParticlesBackground;
