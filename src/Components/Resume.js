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
              My name is Tshegofatso Nkutshweu, and I consider myself to be enthusiastic, responsible, self-driven, and diligent.
I can work effectively under pressure and meet deadlines that are very specific.
My experience working on many projects enabled me to rapidly adapt to changes and developed me as a mature team player.
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
                  "I was working assigned to update, write content and proof head content for the clients website using Umbraco."
                ]
              }
            />
            <Experience
              startYear={"February 2018"}
              endYear={"January 2019"}
              jobName={"Internship"}
              companyName={"Ziko GPS Surveys"}
              jobDesc={[
                "I worked as a trainee, aim was to get first hand experience on field and administration work.",
                "In my 1 year as a trainee I was assigned to complete a subdivision survey, beacon relocation for new RDP stands in Sabie Mpumalanga. ",
                "I was taught how to correctly complete a levelling, triangulation, setting out and detail survey."
                
              ]
              }
            />
          

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              StartYear={2016}
              EndYear={2019}
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
