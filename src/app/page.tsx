import "../style/page.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page-box">
      <div className="about-content-box">
        <div className="home-image-container">
          <Image
            className="main-image"
            src="/01_javed_pic.png"
            alt="Profile-pic"
            width={300}
            height={300}
          />
        </div>
        
        <div className="text-container">
          <h1>Hi I&apos;m Javed Ali</h1>
          <h2>Web Developer and</h2>
          <h2>Agentic AI Engineer</h2>
          <p>
            I&apos;m a passionate web developer and Agentic AI engineer
          </p>
          <h2>Web Developer</h2>
          <p>
            I&apos;m a passionate web developer and 
            <br />
            Here you can explore my expertise and creative projects
          </p>
        </div>
      </div>
    </div>
  );
}
