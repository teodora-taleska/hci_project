import "./EducationComponents.css"

function ContentLectures(){
    return(
        <div>
            <div className="learnTitle">
                <button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button>
                <h3 id="learnwbutton"><b>Learn</b></h3> 
            </div>
            <h5 className="subtitle">Content</h5>
            <div>
            <div className="Lectures">

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle"><b>Lecture 1.</b> What goes on during your monthly cycle?</p>
                    </div>
                        <p className="lectureTime"><i>5:35 mins reading</i></p>
                        <button type="button" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle"><b>Lecture 2.</b> Week 1: Estrogen rises</p>
                    </div>
                        <p className="lectureTime"><i>15:37 mins reading</i></p>
                        <button type="button" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle"><b>Lecture 3.</b> Week 1: Estrogen rises</p>
                    </div>
                        <p className="lectureTime"><i>15:37 mins reading</i></p>
                        <button type="button" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle"><b>Lecture 4.</b> Week 1: Estrogen rises</p>
                    </div>
                        <p className="lectureTime"><i>15:37 mins reading</i></p>
                        <button type="button" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle"><b>Lecture 5.</b> Week 1: Estrogen rises</p>
                    </div>
                        <p className="lectureTime"><i>15:37 mins reading</i></p>
                        <button type="button" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContentLectures