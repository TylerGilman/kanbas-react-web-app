import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
  <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
    <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-12 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                   CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/htmx.png" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS2000 Introduction To HTMX
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Hypermedia
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col-12 col-sm-6 col-md-4 col-lg-3 mb-4"  style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/databases.png" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS3200 Introduction to Databases
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Relational Databases
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
        <div className="wd-dashboard-course col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/ai.png" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS4000 Introduction to Machine Learning
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Machine Learning and Data Analysis
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
        <div className="wd-dashboard-course col-12 col-sm-12 col-md-4 col-lg-3 mb-4" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/404.png" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS404 Not Found
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Understanding 404 Errors
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
        <div className="wd-dashboard-course col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/jsml.png" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS4800 Javascript AI
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Training AI Models with Javascript
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col-sm-12 col-md-6 col-lg-3 mb-4" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/webgl.png" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5000 Web GL
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Using 3D Graphics on the Web  
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
);
}
