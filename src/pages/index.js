/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import CleanCard from '../components/CleanCard';
import SplitSection from '../components/SplitSection';

import TechIcons from '../svg/_icons';
import GithubIcon from '../svg/github';
import FacebookIcon from '../svg/facebook';
import LinkedInIcon from '../svg/linkedin';
import InstagramIcon from '../svg/instagram';
import EmailIcon from '../svg/email';
import ImageProgrammer from '../svg/programmer';

export default ({ data }) => {
  return (
    <Layout>
      <section id="about" className="pt-10 md:pt-20 bg-gradient">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2 sm:mb-3">
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold leading-none robot-name">
              Vasil Panov
            </h1>
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-none">
              Mobile Application Developer
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Hi. I'm Vasil, a native mobile app developer based in Strumica, North Macedonia.
            </p>
            <br />
            <CleanCard className="q-a-card">
              <h3 className="font-semibold text-lg">Find me here:</h3>
              {/* <p>
                Employment status: <span className="text-green-500">Employed</span>
              </p>
              <p>
                Location: <span className="text-green-500">Milan, Italy</span>
              </p>
              <p>
                Eligible to work in the EU?{' '}
                <span className="text-green-500">Yes, I&apos;m an EU citizen</span>
              </p>
              <p>
                Latest working experience?{' '}
                <span className="text-green-500">Junior frontend developer</span>
              </p> */}
              {/* <p>
                Goal: <span className="text-green-500">Frontend developer position</span>
              </p> */}
              <div className="socials flex justify-center lg:justify-start">
                <ul className="flex justify-between w:100px">
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="https://www.linkedin.com/in/vasil-panov-251b5b203/"
                      alt="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon classes="social-button w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="https://github.com/vasep"
                      alt="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon classes="social-button w-6" />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="icon-anchor-link"
                      href="https://www.facebook.com/slaveatanasov"
                      alt="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon classes="social-button w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="https://www.instagram.com/slaveatan"
                      alt="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon classes="social-button w-6" />
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="mailto:mrvasep@gmail.com"
                      alt="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <EmailIcon classes="social-button w-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </CleanCard>
          </div>
          <div className="lg:w-1/2">
            <div className="image-sa-wrapper">
              <Img
                fluid={data.goodLookingDude.childImageSharp.fluid}
                alt="Good Looking Dude"
                className="image-sa xl:ml-14"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="qualifications" className="pt-12 md:pt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Qualifications</h2>
          <div className="flex flex-col lg:flex-wrap lg:flex-row sm:-mx-3 mt-6 md:mt-12">
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Technology</p>
                <hr />
                <p className="text-md">I have experience with</p>
                <ul className="list-tech flex flex-row flex-wrap justify-center">
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.html}</span>
                    <span>HTML 5</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.css}</span>
                    <span>CSS 3</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.js}</span>
                    <span>JavaScript</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.java}</span>
                    <span>Java</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.android}</span>
                    <span>Android Studio</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.kotlin}</span>
                    <span>Kotlin</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.swift}</span>
                    <span>Swift</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.xcode}</span>
                    <span>XCode</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.git}</span>
                    <span>Git</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.firebase}</span>
                    <span>Firebase</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.vscode}</span>
                    <span>VSCode</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Work experience</p>
                <hr />
                <ul className="list-workexp mt-4 text-left">
                  <li>
                    <p className="text-sm">03/2019 – Present</p>
                    <h4>Native Mobile App Developer</h4>
                    <a
                      href="https://adamantus.com/"
                      alt="Adamantus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Adamantus - Strumica, North Macedonia
                    </a>
                    <p className="mt-1">
                      Working in the mobile app division of Adamantus on projects for internal products, 
                      and delivering solutions to international clients.
                    </p>
                  </li>
                  {/* <hr /> */}
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Education and Training</p>
                <hr />
                <ul className="list-edu mt-4 text-left">
                <li>
                  <p className="text-sm">2009 – 2013</p>
                  <h4>Applied Foreign Languages - AUE FON University</h4>
                  <a
                      href="http://aue.edu.eu/schools/school-of-education/applied-linguistics-teaching-stream-ba-intefl-with-foreign-language-b.aspx"
                      alt="AUE FON University"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bachelor's degree - English literature
                    </a>
                  </li>
                  <li>
                    <p className="text-sm">2018 – 2019</p>
                    <h4>Mobile Development - Adamantus Academy</h4>
                    <a
                      href="https://adamantus.com/"
                      alt="Adamantus Academy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adamantus Academy - Strumica, North Macedonia
                    </a>
                    <p className="mt-1">
                      I spent over 7 months as a trainee learning mobile development technologies such as Java, Swift, Android Studio, and others.
                    </p>
                  </li>

                  {/* <hr /> */}
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Personal skills</p>
                <hr />
                <ul className="list-skills mt-4 text-left">
                  <li>
                    <span>
                      Friendly and communicative personality
                    </span>
                  </li>
                  <li>
                    <span>Task-oriented and deadline-focused</span>
                  </li>
                  <li>
                    <span>Team player</span>
                  </li>
                  <li>
                    <span>Responsible</span>
                  </li>
                  <li>
                    <span>Adaptive</span>
                  </li>
                  <li>
                    <span>Resourceful</span>
                  </li>
                  <li>
                    <span>Motivated in developing new skills</span>
                  </li>
                  <li>
                    <span>English - Full professional proficiency level</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="projects" className="pt-12 md:pt-20">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Portfolio projects</h2>
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">FreightOne</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Mainly done to assist a truck managing software. Made for android and ios. The following core features is included:</p>
              <dl className="mt-2 text-xl font-light leading-relaxed">
                <dt className="font-semibold">Login Screen:</dt>
                <dd>Using a unique generated access token to gain access to the server.</dd>
                <dt className="font-semibold">Dashboard Fragment Tabs:</dt>
                <dd>Getting a list of items from the server.</dd>
                <dt className="font-semibold">Detailed Item Screen:</dt>
                <dd>Displays information about the selected item. Allows the user to check off their delivery/pick ups, this info is also sent to the server.</dd>
              </dl>

              <p className="mt-2 text-xl font-light leading-relaxed">
                
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.perssonified.childImageSharp.fluid}
              alt="perssonified"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <dl className="mt-2 text-xl font-light leading-relaxed">
                <dt className="font-semibold">Share PDF Files:</dt>
                <dd>This feature enables the app to share stored files from a third party application (Office Lens, Adobe Scanner) through our application and send the selected files to the server.</dd>
              </dl>

              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://github.com/vasep/TruckingAndroid"
                  alt="GitHub Trucking Android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub/Android
                </a>
                {' and '}
                <a
                  href="https://github.com/vasep/TruckingiOS"
                  alt="GitHub Trucking Ios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub/iOS
                </a>
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.landingPageProject.childImageSharp.fluid}
              alt="Landing page project"
              className="project-img"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight">Other projects</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                <a
                  href="https://github.com/vasep?tab=repositories"
                  alt="GitHub Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore all projects on GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check out my GitHub account for other projects I&apos;ve built.
              </p>
            </div>
          }
          secondarySlot={<ImageProgrammer />}
        />
      </div>
      <h2 className="text-2xl lg:text-3xl pt-16 font-semibold text-center">Contact</h2>
    </Layout>
  );
};

export const query = graphql`
  query Images {
    acconote: file(relativePath: { eq: "acconote.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    perssonified: file(relativePath: { eq: "freightOne-sample-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landingPageProject: file(relativePath: { eq: "Etka.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sacom: file(relativePath: { eq: "slaveatanasovcom.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project5mins: file(relativePath: { eq: "project-5mins.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    goodLookingDude: file(relativePath: { eq: "vp_img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
