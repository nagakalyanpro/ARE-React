import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BharatUser1 from "./BharatUser1";
import BharateUser2 from "./BharatUser2";

const report =
  "http://localhost:8080/reportees?managerID=6135fa6f348654ad496b83d2";

const designation =
  "http://localhost:8080/getGroupingValues?criteriaName=Lateral%20Hires%20Manager&loggedInManagerID=6135fa6f348654ad496b83d2";

function Home() {
  const [show, setShow] = useState(false);
  const [post, setPost] = useState(false);

  const [persons, setPersons] = useState([]);
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    const response = await fetch(designation);
    const roles = await response.json();
    setRoles(roles);
  };
  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchPersons = async () => {
    const response = await fetch(report);
    const persons = await response.json();
    setPersons(persons);
  };
  useEffect(() => {
    fetchPersons();
  }, []);

  roles.map(() => {
    return (
      <section>
        <div>{roles[0]}</div>
        <div>{roles[1]}</div>
        <div>{roles[2]}</div>
        <div>{roles[3]}</div>
        <div>{roles[4]}</div>
      </section>
    );
  });

  const newPersons = persons.map((person) => {
    const { username } = person;
    return <div>{username}</div>;
  });

  return (
    <div>
      <body className="bg">
        <div>
          <div>
            <Link to="/laxman">
              <button>Laxman</button>
            </Link>
          </div>
          <div>
            <Link to="/bharat">
              <button>Bharat</button>
            </Link>
          </div>
          <div>
            <Link to="/shatru">
              <button>Shatru</button>
            </Link>
          </div>
          <div>
            <Link to="/hanuman">
              <button>Hanuman</button>
            </Link>
          </div>
        </div>

        <div className="container-scroller">
          <nav className="navbar default-layout col-lg-12 col-12 p-0 d-flex align-items-top flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
              <div className="me-3">
                <button
                  className="navbar-toggler navbar-toggler align-self-center"
                  type="button"
                  data-bs-toggle="minimize"
                >
                  <span className="icon-menu"></span>
                </button>
              </div>
              <div>
                <a className="navbar-brand brand-logo" href="index.html">
                  <b>A.R.E</b>
                </a>
                <a className="navbar-brand brand-logo-mini" href="index.html">
                  <b>A.R.E</b>
                </a>
              </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-top">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <form className="search-form" action="#">
                    <i className="icon-search"></i>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                  </form>
                </li>
                <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                  <a
                    className="nav-link"
                    id="UserDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-user"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="UserDropdown"
                  >
                    <div className="dropdown-header text-center">
                      <img
                        className="img-md rounded-circle"
                        src="assets/images/profile.jpg"
                        alt="Profile image"
                      />
                      <p className="mb-1 mt-3 font-weight-semibold">
                        Allen Moreno
                      </p>
                      <p className="fw-light text-muted mb-0">
                        allenmoreno@gmail.com
                      </p>
                    </div>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>
                      My Profile
                      <span className="badge badge-pill badge-danger">1</span>
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>
                      Messages
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>
                      Activity
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>
                      FAQ
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                      Sign Out
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-check-box"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="notificationDropdown"
                  >
                    <a className="dropdown-item py-3 border-bottom">
                      <p className="mb-0 font-weight-medium float-left">
                        You have 4 new notifications
                      </p>
                      <span className="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-alert m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Application Error
                        </h6>
                        <p className="fw-light small-text mb-0"> Just now </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-settings m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Settings
                        </h6>
                        <p className="fw-light small-text mb-0">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-airballoon m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          New user registration
                        </h6>
                        <p className="fw-light small-text mb-0"> 2 days ago </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-time"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="notificationDropdown"
                  >
                    <a className="dropdown-item py-3 border-bottom">
                      <p className="mb-0 font-weight-medium float-left">
                        You have 4 new notifications
                      </p>
                      <span className="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-alert m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Application Error
                        </h6>
                        <p className="fw-light small-text mb-0"> Just now </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-settings m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Settings
                        </h6>
                        <p className="fw-light small-text mb-0">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-airballoon m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          New user registration
                        </h6>
                        <p className="fw-light small-text mb-0"> 2 days ago </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator"
                    id="countDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon-bell"></i>
                    <span className="count"></span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="countDropdown"
                  >
                    <a className="dropdown-item py-3">
                      <p className="mb-0 font-weight-medium float-left">
                        You have 7 unread mails
                      </p>
                      <span className="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="assets/images/profile.jpg"
                          alt="image"
                          className="img-sm profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          Marian Garner
                        </p>
                        <p className="fw-light small-text mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="assets/images/profile.jpg"
                          alt="image"
                          className="img-sm profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          David Grey
                        </p>
                        <p className="fw-light small-text mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="assets/images/profile.jpg"
                          alt="image"
                          className="img-sm profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          Travis Jenkins
                        </p>
                        <p className="fw-light small-text mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-bs-toggle="offcanvas"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>

          <div className="container-fluid page-body-wrapper">
            <div id="right-sidebar" className="settings-panel">
              <i className="settings-close ti-close"></i>
              <ul
                className="nav nav-tabs border-top"
                id="setting-panel"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="todo-tab"
                    data-bs-toggle="tab"
                    href="#todo-section"
                    role="tab"
                    aria-controls="todo-section"
                    aria-expanded="true"
                  >
                    TO DO LIST
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="chats-tab"
                    data-bs-toggle="tab"
                    href="#chats-section"
                    role="tab"
                    aria-controls="chats-section"
                  >
                    CHATS
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="setting-content">
                <div
                  className="tab-pane fade show active scroll-wrapper"
                  id="todo-section"
                  role="tabpanel"
                  aria-labelledby="todo-section"
                >
                  <div className="add-items d-flex px-3 mb-0">
                    <form className="form w-100">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control todo-list-input"
                          placeholder="Add To-do"
                        />
                        <button
                          type="submit"
                          className="add btn btn-primary todo-list-add-btn"
                          id="add-task"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="list-wrapper px-3">
                    <ul className="d-flex flex-column-reverse todo-list">
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Team review meeting at 3.00 PM
                          </label>
                        </div>
                        <i className="remove ti-close"></i>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Prepare for presentation
                          </label>
                        </div>
                        <i className="remove ti-close"></i>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Resolve all the low priority tickets due today
                          </label>
                        </div>
                        <i className="remove ti-close"></i>
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              checked
                            />
                            Schedule meeting for next week
                          </label>
                        </div>
                        <i className="remove ti-close"></i>
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              checked
                            />
                            Project review
                          </label>
                        </div>
                        <i className="remove ti-close"></i>
                      </li>
                    </ul>
                  </div>
                  <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                  <div className="events pt-4 px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="ti-control-record text-primary me-2"></i>
                      <span>Feb 11 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">
                      Creating component page build a js
                    </p>
                    <p className="text-gray mb-0">
                      The total number of sessions
                    </p>
                  </div>
                  <div className="events pt-4 px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="ti-control-record text-primary me-2"></i>
                      <span>Feb 7 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">
                      Meeting with Alisa
                    </p>
                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="chats-section"
                  role="tabpanel"
                  aria-labelledby="chats-section"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                      Friends
                    </p>
                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">
                      See All
                    </small>
                  </div>
                  <ul className="chat-list">
                    <li className="list active">
                      <div className="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span className="online"></span>
                      </div>
                      <div className="info">
                        <p>Thomas Douglas</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">19 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span className="offline"></span>
                      </div>
                      <div className="info">
                        <div className="wrapper d-flex">
                          <p>Catherine</p>
                        </div>
                        <p>Away</p>
                      </div>
                      <div className="badge badge-success badge-pill my-auto mx-2">
                        4
                      </div>
                      <small className="text-muted my-auto">23 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span className="online"></span>
                      </div>
                      <div className="info">
                        <p>Daniel Russell</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">14 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span className="offline"></span>
                      </div>
                      <div className="info">
                        <p>James Richardson</p>
                        <p>Away</p>
                      </div>
                      <small className="text-muted my-auto">2 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span className="online"></span>
                      </div>
                      <div className="info">
                        <p>Madeline Kennedy</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">5 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span className="online"></span>
                      </div>
                      <div className="info">
                        <p>Sarah Graves</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">47 min</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Create a New Role</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Modify Existing Role</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Team Grouping</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="home-tab">
                      <div className="tab-content tab-content-basic">
                        <div
                          className="tab-pane fade show active"
                          id="overview"
                          role="tabpanel"
                          aria-labelledby="overview"
                        >
                          <div className="row">
                            <div className="col-lg-3 d-flex flex-column order-lg-1">
                              <div className="row flex-grow">
                                <div className="col-12 grid-margin stretch-card">
                                  <div className="card card-square">
                                    <div className="card-body p-0">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="justify-content-between align-items-center mb-3 heading">
                                            <div>
                                              <h4 className="card-title card-title-dash">
                                                User Profile Attribute
                                              </h4>
                                            </div>
                                          </div>
                                          <div className="mt-3">
                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[0]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[1]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[2]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[3]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[4]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[5]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[6]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[7]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[8]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {newPersons[9]}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 d-flex flex-column order-lg-2 order-sm-first order-first">
                              <div className="row flex-grow">
                                <div className="col-12 grid-margin stretch-card">
                                  <div className="card card-square card-transparent">
                                    <div className="card-body p-1">
                                      <div className="align-items-start">
                                        <div className="form-group row mb-0">
                                          <label
                                            className="col-sm-6 white-heading text-end"
                                            // style="line-height: 2;"
                                          >
                                            Auto Grouping
                                          </label>
                                          <div className="col-sm-6">
                                            <select className="form-control styled-select">
                                              <option>Job Title</option>
                                              <option>Option Two</option>
                                              <option>Option Three</option>
                                              <option>Option Four</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row flex-grow">
                                <div className="col-md-6 col-lg-6 grid-margin">
                                  <div className="card card-square">
                                    <div className="card-body card-square p-0">
                                      <div className="claims-text">
                                        <p>Claims Processor Medical Claims</p>
                                        <p>
                                          Claims Processors managing Facts
                                          Claims
                                        </p>
                                        <button onClick={() => setShow(!show)}>
                                          {newPersons[0]}
                                        </button>
                                        <p className="job-title pt-2">
                                          JOB TITLE
                                        </p>
                                        <p className="title">{roles[0]}</p>
                                      </div>
                                      <div className="card-stripe-blue">
                                        <ul>
                                          <li>Users</li>
                                          <li>Common Roles</li>
                                          <li>Smart Suggestions</li>
                                        </ul>
                                      </div>

                                      <div className="card-stripe-white">
                                        <ul>
                                          <li>12</li>
                                          <li>5-12%</li>
                                          <li>3-8%</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-6 grid-margin">
                                  <div className="card card-square card-alternate-bg">
                                    <div className="card-body card-square p-0">
                                      <div className="claims-text">
                                        <p>Claims Processor Medical Claims</p>
                                        <p>
                                          Claims Processors managing Facts
                                          Claims
                                        </p>
                                        <button
                                          onClick={() => {
                                            setPost(!post);
                                          }}
                                        >
                                          {newPersons[1]}
                                        </button>
                                        <p className="job-title pt-2">
                                          JOB TITLE
                                        </p>
                                        <p className="title">{roles[1]}</p>
                                      </div>
                                      <div className="card-stripe-blue">
                                        <ul>
                                          <li>Users</li>
                                          <li>Common Roles</li>
                                          <li>Smart Suggestions</li>
                                        </ul>
                                      </div>

                                      <div className="card-stripe-white">
                                        <ul>
                                          <li>12</li>
                                          <li>5-12%</li>
                                          <li>3-8%</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-6 grid-margin">
                                  <div className="card card-square card-alternate-bg">
                                    <div className="card-body card-square p-0">
                                      <div className="claims-text">
                                        <p>Claims Processor Medical Claims</p>
                                        <p>
                                          Claims Processors managing Facts
                                          Claims
                                        </p>
                                        <p>Mr Manager</p>
                                        <p className="job-title pt-2">
                                          JOB TITLE
                                        </p>
                                        <p className="title">{roles[2]}</p>
                                      </div>
                                      <div className="card-stripe-blue">
                                        <ul>
                                          <li>Users</li>
                                          <li>Common Roles</li>
                                          <li>Smart Suggestions</li>
                                        </ul>
                                      </div>

                                      <div className="card-stripe-white">
                                        <ul>
                                          <li>12</li>
                                          <li>5-12%</li>
                                          <li>3-8%</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-6 grid-margin">
                                  <div className="card card-square card-transparent dotted-border">
                                    <div className="card-body card-square p-0">
                                      <div className="create-group">
                                        <div className="text">
                                          Click to create new group
                                        </div>
                                        <div className="add">
                                          <a href="#">
                                            <i className="ti-plus"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row flex-grow mt-5 mb-5">
                                <div className="col-md-6 col-lg-6">
                                  <div>
                                    <button
                                      className="btn btn-primary btn-lg text-white mb-2 me-0 w-100"
                                      type="button"
                                    >
                                      Save
                                    </button>
                                  </div>
                                </div>

                                <div className="col-md-6 col-lg-6">
                                  <div>
                                    <button
                                      className="btn btn-primary btn-lg text-white mb-2 me-0 w-100"
                                      type="button"
                                    >
                                      Analyze
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-3 d-flex flex-column order-lg-3">
                              <div className="row flex-grow">
                                <div className="col-12 grid-margin stretch-card">
                                  <div className="card card-square">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="mt-3">
                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center">
                                                    {show && <BharatUser1 />}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>
                                            {post && <BharateUser2 />}
                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="wrapper  align-items-center justify-content-between py-2">
                                              <div className="">
                                                <div className="wrapper">
                                                  <p className="ms-1 mb-1 fw-bold text-center"></p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="row flex-row">
              <div className="col-lg-6">
                <div className="justify-content-center justify-content-sm-between text-start">
                  <span className="text-white flex-column d-block mt-1">
                    Copyright © infogravity 2021. All rights reserved.
                  </span>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="justify-content-center justify-content-sm-between">
                  <span className="text-white d-flex flex-column d-block mt-1 text-sm-end text-start">
                    <a
                      href="www.infogravity-us.com"
                      target="_blank"
                      className="text-white text-decoration-none"
                    >
                      www.infogravity-us.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <script src="assets/vendors/js/vendor.bundle.base.js"></script>

        <script src="assets/js/off-canvas.js"></script>
        <script src="assets/js/hoverable-collapse.js"></script>
        <script src="assets/js/template.js"></script>
      </body>
    </div>
  );
}

export default Home;
