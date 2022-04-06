import synthKeyboad from '../../../../assets/projects/keyboard.jpg'
import fridgeBob from '../../../../assets/projects/fridgebob.jpg'
import neuralNet from '../../../../assets/projects/neuralNet.jpg'
import compiler from '../../../../assets/projects/compiler.jpg'
import rayTracing from '../../../../assets/projects/rayTracing.jpg'
import fpgaKeyboard from '../../../../assets/projects/fpgaKeyboard.jpg'
import youngEnterprise from '../../../../assets/projects/youngEnterprise.jpg'
import epq from '../../../../assets/projects/epq.jpg'

export const ProjectGridItems = [{
    name: 'Music Synthesiser',
    description: 'The aim of this project was to build a real time audio synthesizer by interfacing with keyboard hardware. Real time programming techniques such as multi-threading and concurrency analysis were incorporated to implement multiple features ranging from tone generation to polyphony and filtering (e.g vibrato, tremolo, low-pass filtering etc).',
    image: synthKeyboad,
    technology: ['Arduino', 'C++', 'Microcontrollers', 'Threading'],
    links: [],
  },
  {
    name: 'Fridge Monitoring Device',
    description: 'Fridge-Bob is a wonderful little device placed in one corner of your fridge which takes continuous real-time readings of the temperature, humidity,  and air quality of the inside of your fridge. You can see all the readings and also assess the condition of the fridge from the errors/warnings listed on the Message Board so you know when to repair your Fridge.',
    image: fridgeBob,
    technology: ['JavaScript', 'HTML/CSS', 'Python', 'MQTT'],
    links: [{
      linkNamme: "Demo/Ad Video",
      link: "https://www.youtube.com/watch?v=vFSkY3HxUXQ",
    }, ],
  },
  {
    name: 'House Price Prediction',
    description: 'Used a neural network with trained with information such as number of rooms and bathrooms to predict the price of a given house. It utilised multiple layers with varying activation functions as well as some data-preprocessing. Features such as dropout and batch normalisation were used to prevent the network being too specific to the training data.',
    image: neuralNet,
    technology: ['Python', 'Numpy', 'PyTorch', 'Pandas', 'Docker', 'Flutter',
      'Express JS API', 'MySQL'
    ],
    links: [{
      linkNamme: "GitHub",
      link: "https://github.com/TeDand/house-price-prediction",
    }, ],
  },
  {
    name: 'MIPS Simulator and Compiler',
    description: 'Created a simulator that emulated MIPS architecture in high level code  (breaking down instructions and pipelining). Also created a C++ implementation of an ANSI-C to MIPS compiler as part of a project for the Electronic and Information Engineering Year 2 course at Imperial College London. The submission also included a basic ANSI-C to Python translator.',
    image: compiler,
    technology: ['C++', 'Testbenching', 'Lexer/Parser',
      'Language Processing'
    ],
    links: [{
        linkNamme: "GitHub(Compiler)",
        link: "https://github.com/TeDand/MIPS-Compiler/tree/master/src",
      },
      {
        linkNamme: "GitHub(Simulator)",
        link: "https://github.com/TeDand/MIPS-Simulator",
      },
    ],
  },
  {
    name: 'Ray Tracing',
    description: 'Learned basic ray tracing techniques using C++ by following the tutorial made by Peter Shirley in "Ray Tracing in One Weekend". Instead of manually rendering light and its various effects rays are simulated and according to certain rules their reflection or refraction off defined surfaces creates realistic final images.',
    image: rayTracing,
    technology: ['C++', 'OOP'],
    links: [{
      linkNamme: "GitHub",
      link: "https://github.com/TeDand/Ray-Tracing",
    }, ],
  },
  {
    name: 'Keyboard Detection',
    description: 'Making use of the FPGA on the ’PYNQ’ board, this project aimed to eliminate the need for a physical keyboard when operating a computer. A user could instead simply draw out a keyboard on a piece of plain paper, which would then be placed in front of a camera for use. The stream of frames from the camera were processed in real time by;\n1. Finding the edges of keys using vertical and horizontal edge detection\n2. Finding the location of the users hand by locating occurrences of the coloured markers the user will wear\n3. detecting the direction of the ﬁngers’ motion to determine if a key press is occurring (i.e. down then up)\n4. checking the number of edges around the key press to determine which key is being pressed\nThe final result is a fully functioning virtual keyboard.',
    image: fpgaKeyboard,
    technology: ['Verilog and High Level Synthesis on FPGA',
      'Real-time image processing', 'Pipelining',
      'High level testing and optimising hardware usage'
    ],
    links: [{
      linkNamme: "Download Report",
      link: "PUT PDF LINK HERE",
    }, ],
  },
  {
    name: 'Young Enterprise',
    description: 'Created and led a business called Gastronomical (acting as Managing Director) that created a novel dessert item. Working with a group of friends we oversaw the design of the product to the eventual sale of it. It allowed for me to get comfortable with public speaking and selling a product, as well as the financial side of starting a new business.',
    image: youngEnterprise,
    technology: [],
    links: [],
  },
  {
    name: 'Extended Project Qualification',
    description: 'I created a device that measures and outputs the RPM of an electric car (i.e. a tachometer). It acted as a demonstration of the Internet of Things (IoT), making use of a Raspberry Pi\'s internet capabilities to remotely access the data it measured. It allowed me to better understand what the IoT is, and what hurdles we need to overcome if it was to become staple of modern technology.',
    image: epq,
    technology: ['Bread-boarding', 'Using a strip-board to solder onto',
      'I2C protocol using microcontrollers',
      'Python'
    ],
    links: [{
      linkNamme: "Download Report",
      link: "PUT PDF LINK HERE",
    }, ],
  },
]