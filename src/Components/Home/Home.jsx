import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import {
  RiBookOpenFill,
  RiCalendarEventFill,
  RiCommunityFill,
  RiFacebookBoxFill,
  RiGraduationCapFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMenu3Fill,
  RiPauseFill,
  RiPlayFill,
  RiPresentationFill,
  RiRoadMapFill,
  RiTrophyFill,
  RiTwitterFill,
  RiUserStarFill,
  RiVolumeMuteFill,
  RiVolumeUpFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "@remixicon/react";
import { AllCities } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import LocomotiveScroll from "locomotive-scroll";
import VideosSwiper from "./VideosSwiper";
import { Link } from "react-router-dom";
import RotatingText from './RotatingText';

export default function Home() {

  return (
    <div>
      <div className="fixed top-0 h-16 text-white items-center pr-5 w-full flex justify-between   z-10">
        <img className="h-full" src="/Images/logo.png" alt="" />
        <RiMenu3Fill size={30}/>
      </div>

      <div className=" relative w-full flex gradient  h-[100vh]">
        <div className="w-[50%] h-full flex flex-col  items-start px-20 justify-center text-white">
      <p className="text-4xl font-semibold">"Aspire to Study Abroad? We've Got You Covered!"</p>
      <p className="opacity-70 mt-5">Unlock your personalized AI-powered roadmap to success. Our intelligent planner crafts a monthly skill-building strategy tailored just for you. Complete tasks, enhance your portfolio, and transform your journey into a professional success story.</p>
          <button className="btn btn-gradient-border btn-glow mt-10 rounded-lg  px-4 text-xl py-2   whitespace-nowrap">
            <Link to="/createroadmap">Generate Roadmap ✨</Link>
          </button>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center ">

        <video
          loop
          autoPlay
          muted
          className="w-[80%] h-full object-contain"
          src="/Videos/videoplayback.mp4"
        ></video>

        </div>
        
      </div>


    </div>
  );
}
