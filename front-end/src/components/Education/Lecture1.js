import NavBar from "../NavBar"
import "./EducationComponents.css"
import { Link } from "react-router-dom"

function Lecture1(){
    return(
        <div>
            <NavBar/>
            <div className="lectureTitle">
                <div id="lecture-title">
                <Link to="/education/learnTopics/content"><i className="fa fa-arrow-left"></i></Link>
                    <h3 className="lecture1"><b>Lecture 1</b></h3>
                    <Link to="/education/learnTopics/content/Lecture2"><i className="fa fa-arrow-right"></i></Link>
                </div>
                <div>
                    <h4 id="subtitle1">What goes on during your monthly cycle</h4>
                </div>               
            </div>

            <div>
                <p id="black" className="lectures">During your Week 1, estrogen starts out at its lowest point and begins a steady climb. For the first day or so of this cycle week, the low level of this hormone combined with period-related aches and fatigue may make you a bit quiet and have you preferring to stay close to home.
                However, as estrogen rises throughout this cycle week, this hormone will be boosting your mood, energy and patience and ratcheting up your desire for adventure and to socialize.
                You become more and more optimistic and motivated, your verbal skills and memory improve and it’s easier to absorb new facts and learn new skills.
                For some women, these hormone-fueled benefits kick in quickly; for others it takes a few days or longer. It depends on your personal sensitivity to hormone fluctuations as well as if you’re eating enough iron-rich foods to make up for iron loss as you bleed during menstruation. (When iron dips, it can trigger fatigue, fogginess and a down mood. If you’re not getting enough iron in your diet, ask your healthcare provider if you can take an iron supplement.)
                Some other effects to look forward to in your Week 1: You have more interest in romance and your libido climbs steadily. As a result, you may seek out ways to meet new people or spend more time with your current partner.
                You’re also building more muscle and building it faster when you do resistance exercises, such as lifting weights or using resistance bands, due to rising estrogen.
                Rising estrogen also has a slight appetite-suppressing effect, which makes it a bit easier to eat smaller portions and opt for healthier foods.
                You may find that chronic or recurring health issues, such as asthma, eczema and irritable bowel syndrome, crop up at the start of your Week 1. This is because, even though your estrogen level is climbing daily, you still start out with a relatively low level of this hormone. However, as estrogen continues to climb throughout this week, symptoms generally lessen.</p>

                <img src="sex-hormones.png" alt="Loading..."/>

                <p id="black" className="lectures">During your Week 1, estrogen starts out at its lowest point and begins a steady climb. For the first day or so of this cycle week, the low level of this hormone combined with period-related aches and fatigue may make you a bit quiet and have you preferring to stay close to home.
                However, as estrogen rises throughout this cycle week, this hormone will be boosting your mood, energy and patience and ratcheting up your desire for adventure and to socialize.
                You become more and more optimistic and motivated, your verbal skills and memory improve and it’s easier to absorb new facts and learn new skills.
                For some women, these hormone-fueled benefits kick in quickly; for others it takes a few days or longer. It depends on your personal sensitivity to hormone fluctuations as well as if you’re eating enough iron-rich foods to make up for iron loss as you bleed during menstruation. (When iron dips, it can trigger fatigue, fogginess and a down mood. If you’re not getting enough iron in your diet, ask your healthcare provider if you can take an iron supplement.)
                Some other effects to look forward to in your Week 1: You have more interest in romance and your libido climbs steadily. As a result, you may seek out ways to meet new people or spend more time with your current partner.
                You’re also building more muscle and building it faster when you do resistance exercises, such as lifting weights or using resistance bands, due to rising estrogen.
                Rising estrogen also has a slight appetite-suppressing effect, which makes it a bit easier to eat smaller portions and opt for healthier foods.
                You may find that chronic or recurring health issues, such as asthma, eczema and irritable bowel syndrome, crop up at the start of your Week 1. This is because, even though your estrogen level is climbing daily, you still start out with a relatively low level of this hormone. However, as estrogen continues to climb throughout this week, symptoms generally lessen.</p>

            </div>

        </div>
    )
}

export default Lecture1