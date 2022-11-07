import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/Tshegofatso Nkutshweu.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Tshegofatso Nkutshweu</h2>
            <h4 style={{ color: "grey" }}>Aspiring Full Stack Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Tshegofatso Nkutshweu. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Physical Address</h5>
            <p>6 Yale, The Campus, Van Dalen North Road, Ruimsig, Johannesburg </p>
            <h5>Phone Numbers</h5>
            <p>(+27) 762516155/ (+27) 659194892</p>
            <h5>Email Address</h5>
            <p>amandankutshweu@gmail.com</p>
          
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"May 2019"}
              endYear={"September 2019"}              
              jobName={"Freelance Data Capturer"}
              companyName={"Hello Computer"}
              jobDesc={
                [
                  "Improving functionality and incorporating new features as per requirements on a Communicative tool for building management to be used by owners, residents, building managers, and strata managers. StrataSpot Built using .Net Framework and MSSQL",
                  "Worked on building different sections for the e-commerce platform of Transcom Digital. Built using NextJs, .Net Core 3.1 & MongoDB",
                  "Enhancing features and improvements existing functionality of a social media platform for the Hawai’i-based volunteering students to organize, plan and collaborate as the Global Aloha initiative built using Angular, .Net Core 3.1 & PostgreSQL",
                  "Supported frontend by providing Rest API.",
                  "Revised, modularized and updated old code bases, reducing operating costs."
                ]
              }
            />
            <Experience
              startYear={"February 2018"}
              endYear={"January 2019"}
              jobName={"Internship"}
              companyName={"Ziko GPS Surveys"}
              jobDesc={[
                "Worked on active development project. DevSkill built using Asp .Net-5 & MSSQL",
                "Writing, improving & fixing Unit tests.",
                "Designing & developing new features."
              ]
              }
            />
          

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              StartYear={2021}
              EndYear={2023}
              Institution={"Tshwane University of Technology"}
              Qualification={"National Diploma in Surveying"}

              startYear={2021}
              endYear={2023}
              schoolName={"WeThinkCode_"}
              degreeName={"Software Development"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML"} progress={90} />
            <Skills skill={"Java"} progress={60} />
            <Skills skill={"Python"} progress={70} />
            <Skills skill={"CSS"} progress={80} />

            <hr style={{ borderTop: "3px solid #e22947" }} />
           
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
