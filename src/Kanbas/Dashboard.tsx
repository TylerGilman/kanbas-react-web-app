import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/htmx.png" width={200} />
            <div>
              <h5>
                 CS2000 Introduction To HTMX
              </h5>
              <p className="wd-dashboard-course-title">
                Hypermedia
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/databases.png" width={200} />
            <div>
              <h5>
                 CS3200 Introduction to Databases
              </h5>
              <p className="wd-dashboard-course-title">
                Relational Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/ai.png" width={200} />
            <div>
              <h5>
                 CS4000 Introduction to Machine Learning
              </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning and Data Analysis
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/404.png" width={200} />
            <div>
              <h5>
                 CS404 Not Found
              </h5>
              <p className="wd-dashboard-course-title">
                Understanding 404 Errors
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/jsml.png" width={200} />
            <div>
              <h5>
                 CS4800 Javascript AI
              </h5>
              <p className="wd-dashboard-course-title">
                Training AI Models with Javascript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/webgl.png" width={200} />
            <div>
              <h5>
                 CS5000 Web GL
              </h5>
              <p className="wd-dashboard-course-title">
                Using 3D Graphics on the Web  
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
