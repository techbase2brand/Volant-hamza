import React, {useEffect} from "react";
import useScreenType from "react-screentype-hook";
import './video.css';
import bg from "./video1.png";


const Video = () => {

  
useEffect(() => {
  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //       e.preventDefault();
  
  //       document.querySelector(this.getAttribute('href')).scrollIntoView({
  //           behavior: 'smooth'
  //       });
  //   });
  // });


  var meta=document.createElement('meta');
  meta.name='viewport';

  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');

  document.getElementsByTagName('head')[0].appendChild(meta);

}, []);


const screenType = useScreenType();

  return (
    <div className="px-4 mx-auto xl:mt-[89px]" id={screenType.isMobile ? '' : 'videoSection'}>
      <div className="">
      {/* <iframe className="video-container mx-auto w-full aspect-video" src="https://vimeo.com/708424316" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      <iframe className="video-container mx-auto w-full aspect-video"  src="https://player.vimeo.com/video/708424316?h=096dfaafef" width="640" height="auto" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Video;
