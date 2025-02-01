// Portfolio Content Configuration
const portfolioData = {
    profile: {
      name: "Onyango Henry Ogutu",
      title: "Electrical & Electronic Engineering Student",
      contact: {
        phone: "+254 718 483 870",
        email: "hrkabasa@gmail.com",
        location: "Kenya"
      }
    },
  
    projects: [
      {
        id: 1,
        title: "Smart EV Wireless Charging System",
        image: "images/ev-project.jpg",
        description: "Developed resonant inductive coupling prototype for electric vehicles",
        skills: ["LTspice", "PCB Design", "Power Electronics"],
        category: "Embedded Systems"
      },
      {
        id: 2,
        title: "Industrial Control Panel Design",
        image: "images/control-panel.jpg",
        description: "PLC-based automation system for manufacturing",
        skills: ["AutoCAD", "PLC Programming", "VFD"],
        category: "Industrial Automation"
      }
    ],
  
    skills: {
      technical: ["C/C++", "MATLAB", "AutoCAD", "5G Planning"],
      tools: ["Proteus", "LTspice", "Arduino IDE"],
      certifications: ["Huawei 5G Technologies", "IoT Fundamentals"]
    }
  };
  
  export default portfolioData;