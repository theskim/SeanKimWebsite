import "./Style.css";
import Project from "./ProjectSample";
import { HsodeFirst, HsodeSecond, HsodeThird, HsodeFourth } from '../../../assets';

const images = [
  HsodeFirst,
  HsodeSecond,
  HsodeThird,
  HsodeFourth
];

const HsodeDes = () => {
    const hsode = {
        title: "Linear Second ODE Solver",
        date: "Feb 2022",
        skills: "C",
        img: images,
        link: {
            availability: false,
        }, 
        github: {
            availability: true,
            url: "https://github.com/skim1601/HomogenousLinearSODE",
        }, 
    }

    return (
        <Project project={hsode}>
             An algorithm that solves a Homogenous Linear Second Order Differential Equation The idea of it is quite simple; I used characteristic equations and evaluated the characterstic root (two, one, or no root). Then I applied the appropriate formula to calculate each case seperately.
        </Project>
    );
}

export default HsodeDes;