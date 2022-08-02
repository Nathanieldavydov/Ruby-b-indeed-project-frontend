import React from 'react'



function Job (){
 
 
    return(
        <div id="block">
        <div id="filtered">
          <h5>Filtered Jobs</h5>
          <div class="ruby-jobs">
              <h5>Job Title</h5>
              <p>Job Description</p>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
              <p>Job Salary</p>
          </div>
        </div>
        <div id="jobs">
          
          <label class="container">
          <input checked="checked" type="checkbox"></input>
          <div class="checkmark"></div>
      </label>
          
        </div>
        <div id="footer"></div>
      </div>
    )

} 
export default Job