import React from "react";
import "./App.css";
import boxDesktop from "./assets/illustration-box-desktop.svg";
import womanDesktop from "./assets/illustration-woman-online-desktop.svg";
import womanMobile from "./assets/illustration-woman-online-mobile.svg";
import arrow from "./assets/icon-arrow-down.svg";
import pattern from "./assets/bg-pattern-desktop.svg";
import patternMobile from "./assets/bg-pattern-mobile.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div className="w-full h-screen bg flex justify-center items-center">
      <div className="md:w-2/3 md:h-3/4 xs:w-11/12 xs:h-4/5 bg-white xs:mt-20 md:mt-0  rounded-3xl shadow-2xl flex md:flex-row xs:flex-col">
        <img
          className="absolute  top-[325px] z-20 -translate-x-[93px] xs:hidden md:block"
          src={boxDesktop}
          alt="boxDesktop"
        />
        <img className="md:hidden translate-x-1/4 -translate-y-28 z-10 h-44 absolute" src={womanMobile} alt='woman' />
        <div className="md:w-[45%] md:h-full xs:w-full xs:h-1/5 relative overflow-hidden  ">
          <img src={patternMobile} alt='patern' className="md:hidden m-auto" />
          <img
            className="h-[700px] scale-150 -translate-y-36 -translate-x-36  xs:hidden md:block"
            src={pattern}
            alt="pattern"
          />
          <img
            className="md:block z-10 xs:hidden absolute top-28 -translate-x-14 scale-110"
            src={womanDesktop}
            alt="womanDesktop"
          />
        </div>
        <div className="md:w-[55%] md:h-full p-4 overflow-hidden">
          <h1 className="text-3xl font-extrabold md:mt-12 xs:text-center md:text-start ">FAQ</h1>
          <div className="md:mt-10 xs:mt-5">
            <Accordion>
              <AccordionSummary
                expandIcon={<img src={arrow} alt="arrow" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{fontWeight:'bold',color:'#4B4C5F'}} className="hover:text-[#F47B56] ">
                  How many team members can I invite?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='text-[#4B4C5F]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<img src={arrow} alt="arrow" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{fontWeight:'bold',color:'#4B4C5F'}} className="hover:text-[#F47B56] ">
                  What is the maximum file upload size?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='text-[#4B4C5F]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<img src={arrow} alt="arrow" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{fontWeight:'bold',color:'#4B4C5F'}} className="hover:text-[#F47B56] ">
                  How do I reset my password?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='text-[#4B4C5F]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<img src={arrow} alt="arrow" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{fontWeight:'bold',color:'#4B4C5F'}} className="hover:text-[#F47B56] ">
                  Can I cancel my subscription?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='text-[#4B4C5F]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<img src={arrow} alt="arrow" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{fontWeight:'bold',color:'#4B4C5F'}} className="hover:text-[#F47B56] ">
                  Do you provide additional support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='text-[#4B4C5F]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
