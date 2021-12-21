import style from "./BrowseTemplates.module.css";
import T1 from "../../Templates/T1/T1";
import T2 from "../../Templates/T2/T2";
import T3 from "../../Templates/T3/T3";
import T4 from "../../Templates/T4/T4";
import React, { useState } from "react";
import { demoProfileData } from "../../../Helpers";
import EachEdu from "../../Templates/components/EachEdu";
import EachExperience from "../../Templates/components/EachExperience";
import EachSkill from "../../Templates/components/EachSkill";

const BrowseTemplates = () => {
  const [step, setStep] = useState(1);
  const handleArrow = () => {
    if (step === 2) {
      setStep(1);
      return;
    }
    setStep(step + 1);
  };

  const temp=()=>{
    // this function is only present to remove errors in console. its an empty function which will get updated soon
    return
  }

  return (
    <div className={style.container}>


      
      <div className={style.template_info}>
        <div className={`${style.personal} ${style.each_info}`}>
          <b className={style.name}>Name:</b>{" "}
          <input type="text" value={demoProfileData.name} onChange={temp} />
          <br></br>
          <b className={style.profession}>Current Profession:</b>{" "}
          <input type="text" value={demoProfileData.currentProfession} onChange={temp} />
        </div>
        <div className={`${style.education} ${style.each_info}`}>
          {demoProfileData.education.map((each, i) => (
            <EachEdu
              key={i}
              {...{
                institution_name: (
                  <input type="text" value={each.institution_name}  onChange={temp} />
                ),
                enroll_year: <input type="text" value={each.enroll_year} onChange={temp} />,
                passout_year: <input type="text" value={each.passout_year} onChange={temp} />,
                grades: <input type="text" value={each.grades}  onChange={temp} />,
              }}
            />
          ))}
        </div>
        <div className={`${style.skills} ${style.each_info}`}>
          {demoProfileData.skills.map((each, i) => (
            <EachSkill
              key={i}
              {...{
                skillName: <input type="text" value={each.skillName} onChange={temp} />,
                proficiency: <input type="text" value={each.proficiency} onChange={temp} />,
              }}
            />
          ))}
        </div>
        <div className={`${style.experience} ${style.each_info}`}>
          {demoProfileData.experience.map((each, i) => (
            <EachExperience
              key={i}
              {...{
                title: <input type="text" value={each.title} onChange={temp} />,
                period: <input type="text" value={each.period} onChange={temp} />,
                organization: <input type="text" value={each.organization} onChange={temp} />,
              }}
            />
          ))}
        </div>
      </div>



      <div>
        <div className={style.all_templates}>
          {step === 1 && <T1 />}
          {step === 1 && <T2 />}
          {step === 1 && <T3 />}
          {step === 2 && <T4 />}
        </div>

        <div className={style.arrow} onClick={handleArrow}>
          <ion-icon name="arrow-dropright-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default BrowseTemplates;
