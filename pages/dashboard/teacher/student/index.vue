<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>teacher Dashboard</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Student</li>
        </ul>
      </div>
      <div class="row">
        <!-- STudent Profile -->
        <div class="col-4-xxxl col-12">
          <div class="card dashboard-card-ten">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>About Me</h3>
                </div>
                <div class="dropdown">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >...</a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-times text-orange-red"></i>Close
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs text-dark-pastel-green"></i>Edit
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-redo-alt text-orange-peel"></i>Refresh
                    </a>
                  </div>
                </div>
              </div>
              <div class="student-info">
                <div class="media media-none--xs">
                  <div class="item-img">
                    <img src="img/figure/student.png" class="media-img-auto" alt="student" />
                  </div>
                  <div class="media-body">
                    <h3 class="item-title">Jessia Rose</h3>
                    <p>
                      Aliquam erat volutpat. Curabiene natis massa
                      sedde lacustiquen sodale word moun taiery.
                    </p>
                  </div>
                </div>
                <div class="table-responsive info-table">
                  <table class="table text-nowrap">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td class="font-medium text-dark-medium">Jessia Rose</td>
                      </tr>
                      <tr>
                        <td>Gender:</td>
                        <td class="font-medium text-dark-medium">Female</td>
                      </tr>
                      <tr>
                        <td>Father Name:</td>
                        <td class="font-medium text-dark-medium">Fahim Rahman</td>
                      </tr>
                      <tr>
                        <td>Mother Name:</td>
                        <td class="font-medium text-dark-medium">Jannatul Kazi</td>
                      </tr>
                      <tr>
                        <td>Date Of Birth:</td>
                        <td class="font-medium text-dark-medium">07.08.2006</td>
                      </tr>
                      <tr>
                        <td>Religion:</td>
                        <td class="font-medium text-dark-medium">Islam</td>
                      </tr>
                      <tr>
                        <td>Father Occupation:</td>
                        <td class="font-medium text-dark-medium">Graphic Designer</td>
                      </tr>
                      <tr>
                        <td>E-Mail:</td>
                        <td class="font-medium text-dark-medium">jessiarose@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Admission Date:</td>
                        <td class="font-medium text-dark-medium">05.01.2019</td>
                      </tr>
                      <tr>
                        <td>Class:</td>
                        <td class="font-medium text-dark-medium">2</td>
                      </tr>
                      <tr>
                        <td>Section:</td>
                        <td class="font-medium text-dark-medium">Pink</td>
                      </tr>
                      <tr>
                        <td>Roll:</td>
                        <td class="font-medium text-dark-medium">10005</td>
                      </tr>
                      <tr>
                        <td>Adress:</td>
                        <td class="font-medium text-dark-medium">
                          House #10, Road #6,
                          Australia
                        </td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td class="font-medium text-dark-medium">+ 88 9856418</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Student Info Area -->
        <div class="col-8-xxxl col-12">
          <div class="row">
            <div class="col-lg-4">
              <div class="dashboard-summery-one">
                <div class="row">
                  <div class="col-6">
                    <div class="item-icon bg-light-magenta">
                      <i class="flaticon-shopping-list text-magenta"></i>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="item-content">
                      <div class="item-title">Notification</div>
                      <div class="item-number">
                        <span>12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="dashboard-summery-one">
                <div class="row">
                  <div class="col-6">
                    <div class="item-icon bg-light-blue">
                      <i class="flaticon-calendar text-blue"></i>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="item-content">
                      <div class="item-title">Events</div>
                      <div class="item-number">
                        <span>06</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="dashboard-summery-one">
                <div class="row">
                  <div class="col-6">
                    <div class="item-icon bg-light-yellow">
                      <i class="flaticon-percentage-discount text-orange"></i>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="item-content">
                      <div class="item-title">Attendance</div>
                      <div class="item-number">
                        <span>94</span>
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Exam Result Area Starts here -->
          <div class="col-lg-12">
            <div class="table-box-wrap">
              <form class="search-form-box">
                <div class="row gutters-8">
                  <div class="col-lg-4 col-12 form-group">
                    <input type="text" placeholder="Search by Exam ..." class="form-control" />
                  </div>
                  <div class="col-lg-3 col-12 form-group">
                    <input type="text" placeholder="Search by Subject ..." class="form-control" />
                  </div>
                  <div class="col-lg-3 col-12 form-group">
                    <input type="text" placeholder="dd/mm/yyyy" class="form-control" />
                  </div>
                  <div class="col-lg-2 col-12 form-group">
                    <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                  </div>
                </div>
              </form>
              <div class="card">
                <div class="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ReqNO</th>
                        <th>Result Type</th>
                        <th>Subject</th>
                        <th>Grade</th>
                        <th>Percent</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                      <tr>
                        <td>001</td>
                        <td>Test</td>
                        <td>Agric</td>
                        <td>A</td>
                        <td>90</td>
                        <td>22/02/2019</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "teacher"
};
</script>

<style>
</style>