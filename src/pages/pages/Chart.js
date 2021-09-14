import React from "react";

function Chart() {
  return (
    <div>
      <body class="bg">
        <div class="container-scroller">
          <nav class="navbar default-layout col-lg-12 col-12 p-0 d-flex align-items-top flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
              <div class="me-3">
                <button
                  class="navbar-toggler navbar-toggler align-self-center"
                  type="button"
                  data-bs-toggle="minimize"
                >
                  <span class="icon-menu"></span>
                </button>
              </div>
              <div>
                <a class="navbar-brand brand-logo" href="index.html">
                  <b>A.R.E</b>
                </a>
                <a class="navbar-brand brand-logo-mini" href="index.html">
                  <b>A.R.E</b>
                </a>
              </div>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-top">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <form class="search-form" action="#">
                    <i class="icon-search"></i>
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                  </form>
                </li>
                <li class="nav-item dropdown d-none d-lg-block user-dropdown">
                  <a
                    class="nav-link"
                    id="UserDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />

                  <i class="ti ti-user"></i>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="UserDropdown"
                  >
                    <div class="dropdown-header text-center">
                      <img
                        class="img-md rounded-circle"
                        src="assets/images/profile.jpg"
                        alt="Profile image"
                      />
                      <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                      <p class="fw-light text-muted mb-0">
                        allenmoreno@gmail.com
                      </p>
                    </div>
                    <a class="dropdown-item">
                      <i class="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>{" "}
                      My Profile{" "}
                      <span class="badge badge-pill badge-danger">1</span>
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>{" "}
                      Messages
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>{" "}
                      Activity
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>{" "}
                      FAQ
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                      Sign Out
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link count-indicator"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="ti ti-check-box"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="notificationDropdown"
                  >
                    <a class="dropdown-item py-3 border-bottom">
                      <p class="mb-0 font-weight-medium float-left">
                        You have 4 new notifications{" "}
                      </p>
                      <span class="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </a>
                    <a class="dropdown-item preview-item py-3">
                      <div class="preview-thumbnail">
                        <i class="mdi mdi-alert m-auto text-primary"></i>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject fw-normal text-dark mb-1">
                          Application Error
                        </h6>
                        <p class="fw-light small-text mb-0"> Just now </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item py-3">
                      <div class="preview-thumbnail">
                        <i class="mdi mdi-settings m-auto text-primary"></i>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject fw-normal text-dark mb-1">
                          Settings
                        </h6>
                        <p class="fw-light small-text mb-0">
                          {" "}
                          Private message{" "}
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item py-3">
                      <div class="preview-thumbnail">
                        <i class="mdi mdi-airballoon m-auto text-primary"></i>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject fw-normal text-dark mb-1">
                          New user registration
                        </h6>
                        <p class="fw-light small-text mb-0"> 2 days ago </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link count-indicator"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="ti ti-time"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="notificationDropdown"
                  >
                    <a class="dropdown-item py-3 border-bottom">
                      <p class="mb-0 font-weight-medium float-left">
                        You have 4 new notifications{" "}
                      </p>
                      <span class="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </a>
                    <a class="dropdown-item preview-item py-3">
                      <div class="preview-thumbnail">
                        <i class="mdi mdi-alert m-auto text-primary"></i>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject fw-normal text-dark mb-1">
                          Application Error
                        </h6>
                        <p class="fw-light small-text mb-0"> Just now </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item py-3">
                      <div class="preview-thumbnail">
                        <i class="mdi mdi-settings m-auto text-primary"></i>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject fw-normal text-dark mb-1">
                          Settings
                        </h6>
                        <p class="fw-light small-text mb-0">
                          {" "}
                          Private message{" "}
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item py-3">
                      <div class="preview-thumbnail">
                        <i class="mdi mdi-airballoon m-auto text-primary"></i>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject fw-normal text-dark mb-1">
                          New user registration
                        </h6>
                        <p class="fw-light small-text mb-0"> 2 days ago </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link count-indicator"
                    id="countDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="icon-bell"></i>
                    <span class="count"></span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="countDropdown"
                  >
                    <a class="dropdown-item py-3">
                      <p class="mb-0 font-weight-medium float-left">
                        You have 7 unread mails{" "}
                      </p>
                      <span class="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <img
                          src="assets/images/profile.jpg"
                          alt="image"
                          class="img-sm profile-pic"
                        />
                      </div>
                      <div class="preview-item-content flex-grow py-2">
                        <p class="preview-subject ellipsis font-weight-medium text-dark">
                          Marian Garner{" "}
                        </p>
                        <p class="fw-light small-text mb-0">
                          {" "}
                          The meeting is cancelled{" "}
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <img
                          src="assets/images/profile.jpg"
                          alt="image"
                          class="img-sm profile-pic"
                        />
                      </div>
                      <div class="preview-item-content flex-grow py-2">
                        <p class="preview-subject ellipsis font-weight-medium text-dark">
                          David Grey{" "}
                        </p>
                        <p class="fw-light small-text mb-0">
                          {" "}
                          The meeting is cancelled{" "}
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <img
                          src="assets/images/profile.jpg"
                          alt="image"
                          class="img-sm profile-pic"
                        />
                      </div>
                      <div class="preview-item-content flex-grow py-2">
                        <p class="preview-subject ellipsis font-weight-medium text-dark">
                          Travis Jenkins{" "}
                        </p>
                        <p class="fw-light small-text mb-0">
                          {" "}
                          The meeting is cancelled{" "}
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <button
                class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-bs-toggle="offcanvas"
              >
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>

          <div class="container-fluid page-body-wrapper">
            <div id="right-sidebar" class="settings-panel">
              <i class="settings-close ti-close"></i>
              <ul
                class="nav nav-tabs border-top"
                id="setting-panel"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
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
                <li class="nav-item">
                  <a
                    class="nav-link"
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
              <div class="tab-content" id="setting-content">
                <div
                  class="tab-pane fade show active scroll-wrapper"
                  id="todo-section"
                  role="tabpanel"
                  aria-labelledby="todo-section"
                >
                  <div class="add-items d-flex px-3 mb-0">
                    <form class="form w-100">
                      <div class="form-group d-flex">
                        <input
                          type="text"
                          class="form-control todo-list-input"
                          placeholder="Add To-do"
                        />
                        <button
                          type="submit"
                          class="add btn btn-primary todo-list-add-btn"
                          id="add-task"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="list-wrapper px-3">
                    <ul class="d-flex flex-column-reverse todo-list">
                      <li>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="checkbox" type="checkbox" />
                            Team review meeting at 3.00 PM
                          </label>
                        </div>
                        <i class="remove ti-close"></i>
                      </li>
                      <li>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="checkbox" type="checkbox" />
                            Prepare for presentation
                          </label>
                        </div>
                        <i class="remove ti-close"></i>
                      </li>
                      <li>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="checkbox" type="checkbox" />
                            Resolve all the low priority tickets due today
                          </label>
                        </div>
                        <i class="remove ti-close"></i>
                      </li>
                      <li class="completed">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="checkbox" type="checkbox" checked />
                            Schedule meeting for next week
                          </label>
                        </div>
                        <i class="remove ti-close"></i>
                      </li>
                      <li class="completed">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="checkbox" type="checkbox" checked />
                            Project review
                          </label>
                        </div>
                        <i class="remove ti-close"></i>
                      </li>
                    </ul>
                  </div>
                  <h4 class="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                  <div class="events pt-4 px-3">
                    <div class="wrapper d-flex mb-2">
                      <i class="ti-control-record text-primary me-2"></i>
                      <span>Feb 11 2018</span>
                    </div>
                    <p class="mb-0 font-weight-thin text-gray">
                      Creating component page build a js
                    </p>
                    <p class="text-gray mb-0">The total number of sessions</p>
                  </div>
                  <div class="events pt-4 px-3">
                    <div class="wrapper d-flex mb-2">
                      <i class="ti-control-record text-primary me-2"></i>
                      <span>Feb 7 2018</span>
                    </div>
                    <p class="mb-0 font-weight-thin text-gray">
                      Meeting with Alisa
                    </p>
                    <p class="text-gray mb-0 ">Call Sarah Graves</p>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="chats-section"
                  role="tabpanel"
                  aria-labelledby="chats-section"
                >
                  <div class="d-flex align-items-center justify-content-between border-bottom">
                    <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                      Friends
                    </p>
                    <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">
                      See All
                    </small>
                  </div>
                  <ul class="chat-list">
                    <li class="list active">
                      <div class="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span class="online"></span>
                      </div>
                      <div class="info">
                        <p>Thomas Douglas</p>
                        <p>Available</p>
                      </div>
                      <small class="text-muted my-auto">19 min</small>
                    </li>
                    <li class="list">
                      <div class="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span class="offline"></span>
                      </div>
                      <div class="info">
                        <div class="wrapper d-flex">
                          <p>Catherine</p>
                        </div>
                        <p>Away</p>
                      </div>
                      <div class="badge badge-success badge-pill my-auto mx-2">
                        4
                      </div>
                      <small class="text-muted my-auto">23 min</small>
                    </li>
                    <li class="list">
                      <div class="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span class="online"></span>
                      </div>
                      <div class="info">
                        <p>Daniel Russell</p>
                        <p>Available</p>
                      </div>
                      <small class="text-muted my-auto">14 min</small>
                    </li>
                    <li class="list">
                      <div class="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span class="offline"></span>
                      </div>
                      <div class="info">
                        <p>James Richardson</p>
                        <p>Away</p>
                      </div>
                      <small class="text-muted my-auto">2 min</small>
                    </li>
                    <li class="list">
                      <div class="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span class="online"></span>
                      </div>
                      <div class="info">
                        <p>Madeline Kennedy</p>
                        <p>Available</p>
                      </div>
                      <small class="text-muted my-auto">5 min</small>
                    </li>
                    <li class="list">
                      <div class="profile">
                        <img src="assets/images/profile.jpg" alt="image" />
                        <span class="online"></span>
                      </div>
                      <div class="info">
                        <p>Sarah Graves</p>
                        <p>Available</p>
                      </div>
                      <small class="text-muted my-auto">47 min</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <nav class="sidebar sidebar-offcanvas" id="sidebar">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-grid-large menu-icon"></i>
                    <span class="menu-title">Dashboard</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-grid-large menu-icon"></i>
                    <span class="menu-title">Create a New Role</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-grid-large menu-icon"></i>
                    <span class="menu-title">Modify Existing Role</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-grid-large menu-icon"></i>
                    <span class="menu-title">Team Grouping</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="main-panel">
              <div class="content-wrapper">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-6 mb-4">
                        <div class="card card-square box-shadow-none">
                          <div class="card-body p-0">
                            <div class="p-3">
                              <div class="row overflow-hidden flex-row position-relative">
                                <div class="col-auto d-block">
                                  <img src="assets/https://via.placeholder.com/100x100" />
                                </div>
                                <div class="col d-flex flex-column position-static p-0">
                                  <p class="color-text pe-3">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This is a wider card with
                                    supporting text below as a natural lead-in
                                    to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="footer-column-style-1 text-center">
                              <button
                                class="btn btn-primary text-white mb-2 me-0 w-50 m-auto"
                                type="button"
                              >
                                Group Team
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="card card-square box-shadow-none">
                          <div class="card-body p-0">
                            <div class="p-3">
                              <div class="row overflow-hidden flex-row position-relative">
                                <div class="col-auto d-block">
                                  <img src="assets/https://via.placeholder.com/100x100" />
                                </div>
                                <div class="col d-flex flex-column position-static p-0">
                                  <p class="color-text pe-3">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This is a wider card with
                                    supporting text below as a natural lead-in
                                    to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="footer-column-style-1 text-center">
                              <button
                                class="btn btn-primary text-white mb-2 me-0 w-50 m-auto"
                                type="button"
                              >
                                Update Role
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-1 mb-5">
                  <div class="col-lg-12 mt-5">
                    <div class="bg-white">
                      <h4 class="overlap-card-title">Team Analytics</h4>

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="card card-square box-shadow-none">
                            <div class="card-body">
                              <canvas id="pieChart"></canvas>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="card card-square box-shadow-none">
                            <div class="card-body">
                              <canvas id="barChart"></canvas>
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

          <footer class="footer">
            <div class="row flex-row">
              <div class="col-lg-6">
                <div class="justify-content-center justify-content-sm-between text-start">
                  <span class="text-white flex-column d-block mt-1">
                    Copyright © infogravity 2021. All rights reserved.
                  </span>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="justify-content-center justify-content-sm-between">
                  <span class="text-white d-flex flex-column d-block mt-1 text-sm-end text-start">
                    <a
                      href="www.infogravity-us.com"
                      target="_blank"
                      class="text-white text-decoration-none"
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
        <script src="assets/vendors/chart.js/Chart.min.js"></script>

        <script src="assets/js/off-canvas.js"></script>
        <script src="assets/js/hoverable-collapse.js"></script>
        <script src="assets/js/template.js"></script>
        <script src="assets/js/chart.js"></script>
      </body>
    </div>
  );
}

export default Chart;
