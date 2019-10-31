<template>
  <div>
    <div class="dashboard-page-one">
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>All Subjects</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Subjects</li>
          </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- All Subjects Area Start Here -->
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Add New Subject</h3>
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
                <form class="new-added-form">
                  <div class="row">
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Subject Name *</label>
                      <input type="text" placeholder class="form-control" />
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Subject Type *</label>
                      <select class="form-control">
                        <option value>Please Select</option>
                        <option value="1">Bangla</option>
                        <option value="2">English</option>
                        <option value="3">Mathematics</option>
                        <option value="3">Economics</option>
                        <option value="3">Chemistry</option>
                      </select>
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Class *</label>
                      <select class="form-control">
                        <option value="0">Please Select</option>
                        <option value="1">Play</option>
                        <option value="2">Nursery</option>
                        <option value="3">One</option>
                        <option value="3">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Code</label>
                      <select class="form-control">
                        <option value="0">Please Select</option>
                        <option value="1">00524</option>
                        <option value="2">00525</option>
                        <option value="3">00526</option>
                        <option value="3">00527</option>
                        <option value="3">00528</option>
                      </select>
                    </div>
                    <div class="col-12 form-group mg-t-8">
                      <button
                        type="submit"
                        class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      >Save</button>
                      <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-12">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>All Subjects</h3>
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
                <form class="mg-b-20">
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
                <div class="table-responsive">
                  <table class="table display text-nowrap">
                    <thead>
                      <tr>
                        <th>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input checkAll" />
                            <label class="form-check-label">Roll</label>
                          </div>
                        </th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Parents</th>
                        <th>Address</th>
                        <th>Date Of Birth</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td class="text-center">
                          <img src="/dashboard/img/figure/student2.png" alt="student" />
                        </td>
                        <td>Mark Willy</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>A</td>
                        <td>Jack Sparrow</td>
                        <td>TA-107 Newyork</td>
                        <td>02/05/2001</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- All Subjects Area End Here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subject",
  layout: "teacher",
};
</script>

<style>
</style>