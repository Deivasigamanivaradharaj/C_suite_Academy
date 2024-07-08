import React, { useEffect, useState } from "react";
import Nolesson from "../../Assets/Images/no-lesson-illustration.svg";
import Trash from "../../Assets/Images/trash.png";
// import Edit from "../../Assets/Images/edit.png";
import EditImg from "../../Assets/Images/edit.png";
import { useNavigate } from "react-router-dom";
import NewLesson from "./NewLesson";
import { addnewCourse } from "../../../api/baseApi";

const NewCourse = () => {
  const [popupOpen, setPopupOpen] = useState({ open: false, data: null });
  const [currentOverview, setCurrentOverview] = useState({
    title: "",
    description: "",
    updateIndex: null,
  });

  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    coursename: "",
    description: "",
    price: null,
    thumbnail: null,
    overviews: [],
    lessons: [],
  });

  useEffect(() => {
    if (popupOpen) window.scrollTo(0, 0);
  }, [popupOpen]);

  const handledirectInput = (type, value) => {
    setCourseData({ ...courseData, [type]: value });
  };

  const handleOverviewInput = (type, value) => {
    setCurrentOverview({ ...currentOverview, [type]: value });
  };

  const addNewOverview = () => {
    if (currentOverview.title && currentOverview.description) {
      const newOverview = courseData.overviews;
      if (currentOverview.updateIndex === null) {
        newOverview.push({
          ...currentOverview,
          updateIndex: newOverview.length > 0 ? newOverview?.length : 0,
        });
        setCourseData({ ...courseData, overviews: newOverview });
      } else {
        newOverview[currentOverview?.updateIndex] = currentOverview;
        setCourseData({ ...courseData, overviews: newOverview });
      }
      setCurrentOverview({
        title: "",
        description: "",
        updateIndex: null,
      });
    }
  };

  const addLessontoCourse = (lesson) => {
    const newLessons = [...courseData.lessons];
    if (lesson.updateIndex === null) {
      newLessons.push({
        ...lesson,
        updateIndex: newLessons?.length > 0 ? newLessons?.length : 0,
      });
      setCourseData({ ...courseData, lessons: newLessons });
    } else {
      newLessons[lesson.updateIndex] = lesson;
      setCourseData({ ...courseData, lessons: newLessons });
    }
    setPopupOpen({ open: false });
  };

  const uploadCourse = async () => {
    if (
      courseData.coursename &&
      courseData.description &&
      courseData.lessons.length > 0 &&
      courseData.price
    ) {
      try {
        const { data } = await addnewCourse(courseData);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRemoveOverview = (index) => {
    const newOverviews = [...courseData.overviews];
    newOverviews.splice(index, 1);
    setCourseData({ ...courseData, overviews: newOverviews });
  };

  return (
    <div
      className="course-list-cnt new-course"
      style={{
        // height: popupOpen.open ? "100vh" : "auto",
        overflow: popupOpen.open ? "hidden" : "scroll",
      }}
    >
      <div className="top-header-cnt">
        <div>
          <h3 className="course-new-title">Create New Course</h3>
          <p className="course-new-discription">
            Create new course and lets publish
          </p>
        </div>
        <div className="top-btn-cnt">
          <div className=" course-delete-btn " onClick={() => navigate("../admin")}>
            Cancel
          </div>
          <div className="add-new-lesson-btn" onClick={() => uploadCourse()}>
            Save Course
          </div>
        </div>
      </div>
      <div className="input-split-cover">
        <form className="left-form">
          <div className="course-name-cnt">
            <p>Enter course Name</p>
            <input
              type="text"
              name=""
              id=""
              value={courseData?.coursename}
              className="name-input"
              onChange={(e) => handledirectInput("coursename", e.target.value)}
            />
          </div>

          <div className="course-description-cnt">
            <p>Describe course</p>
            <textarea
              type="text"
              name=""
              id=""
              value={courseData?.description}
              className="description-input"
              onChange={(e) => handledirectInput("description", e.target.value)}
            />
          </div>
          <div className="flex-input">
            <div className="course-name-cnt">
              <p>Enter course price</p>
              <input
                type="number"
                name=""
                id=""
                value={courseData.price !== null ? courseData.price : ""}
                className="name-input price-input"
                placeholder="₹"
                onChange={(e) => handledirectInput("price", e.target.value)}
              />
            </div>
            <div className="course-name-cnt">
              <p>Upload course thumnale</p>
              <input
                type="file"
                name=""
                id=""
                className="styled-input"
                placeholder=""
              />
            </div>
          </div>
          <div className="course-description-cnt">
            <p>OverviewPoints</p>
            <div className="overview-input-cnt">
              <input
                type="text"
                name=""
                id=""
                className="name-input"
                value={currentOverview.title}
                placeholder="Heading"
                onChange={(e) => handleOverviewInput("title", e.target.value)}
              />
              <textarea
                type="text"
                name=""
                id=""
                className=" overview-input name-input"
                placeholder="Description"
                value={currentOverview.description}
                onChange={(e) =>
                  handleOverviewInput("description", e.target.value)
                }
              />
              <div
                className="overview-add-btn"
                onClick={() => addNewOverview()}
              >
                <p>Add</p>
              </div>
            </div>
            {courseData?.overviews?.map((overview, index) => (
              <div className="overviewPoint-cnt" key={index}>
                <div className="overview-head-cnt">
                  <p className="overviewPoint-heading">{overview?.title}</p>
                  <div className="action-btn-cnt-overview">
                    <img
                      src={Trash}
                      alt="delete"
                      className="action-img-overview"
                      onClick={() => handleRemoveOverview(index)}
                    />
                    <img
                      src={EditImg}
                      alt="edit"
                      className="action-img-overview"
                      onClick={() => setCurrentOverview(overview)}
                      // onClick={() => openEdit()}
                    />
                  </div>
                </div>
                <p className="overviewPoint-content">{overview?.description}</p>
              </div>
            ))}
          </div>
        </form>
        <form className="form-right">
          <div className="form-right-header">
            <h3 className="course-new-title form-right-heading">
              List The Lessons
            </h3>
            <div
              className="add-new-lesson-btn"
              onClick={() => setPopupOpen({ open: true, data: null })}
            >
              Add new lesson
            </div>
          </div>

          <div className="lesson-list-cnt">
            {courseData.lessons?.length > 0 ? (
              courseData?.lessons?.map((lesson, index) => (
                <div
                  className="lesson"
                  onClick={() => setPopupOpen({ open: true, data: lesson })}
                >
                  <h1 className="lesson-number">{index + 1}</h1>
                  <div className="lesson-title-cnt">
                    <h3 className="lesson-title">{lesson?.title}</h3>
                  </div>
                  <ul className="lesson-subtitle-cnt">
                    {lesson?.sublessons?.map((sublesson) => (
                      <li>
                        <p className="lesson-subtitle">{sublesson?.title}</p>
                        <p className="lesson-duration-txt">
                          duration : {sublesson?.duration}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="no-lesson-cnt">
                <img
                  src={Nolesson}
                  alt="no-lesson"
                  className="empty-lesson-img"
                />
              </div>
            )}
            {/*  */}
          </div>
        </form>
      </div>
      {popupOpen.open && (
        <NewLesson
          addLesson={(lesson) => addLessontoCourse(lesson)}
          editData={popupOpen?.data}
          cancel={() => setPopupOpen({ open: false, data: null })}
        />
      )}
    </div>
  );
};

export default NewCourse;
