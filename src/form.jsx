export default function () {
  const styles={
        width:'15%'
    }
    const table={
        tableSecondary:'lightgray'
    }
  return (
    <>
      <div className="container m-auto d-block ">
        <form>
          <div>
    
             <i className="bi bi-arrow-left-short blockquote  "></i> <span className=" blockquote ">
             Refer Candidate
            </span>
          </div>

          <h6 className="mt-3">Basic Details</h6>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name:
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
             Email id :
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Contact Number
            </label>
            <input
              
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

         
          <div className="mt-4 mb-3">
             <div class="form-check form-check-inline">
                <input
                class="form-check-input border-black"
                type="checkbox"
                name="inlinecheckOptions "
                id="inlinecheck2"
                value="option2"
                />
                <label class="form-check-label px-3" for="inlineRadio2">
                    Add From Database
                </label>
            </div>
          </div>
          
          <div class="mb-3 mt-3">
             <p className="fw-bolder mt-3 mb-3 blockquote">Professional Qualification</p>
            <label for="exampleInputPassword1" class="form-label">
                College/University/Name :
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="row g-3 mt-3">
            <div class="col">
                <label htmlFor="" className="mb-2">Degree Name</label>
              <input
                type="text"
                class="form-control"
         
                aria-label="First name"
              />
            </div>
            <div class="col mt-3">
                        <label htmlFor="" className="mb-2">Passout Year (mm/yy) :</label>    
              <input
                type="text"
                class="form-control"
  
                aria-label="Last name"
              />
            </div>

            <p className="text-primary">
              <i class="bi bi-plus"></i>Add New
            </p>
          </div>
          <div class=" m-auto d-block w-50">
            <table class="table table-bordered table-secondary  text-center " style={{backgroundColor:'lightgray'}} >
             
              <tbody>
                <tr class="py-3">
                  <td scope="row">Collage/University
                  <p>Name</p></td>
                  <td colspan='2' class="">
                   Degree Name
                  </td>
                  <td>Passout Year</td>
                </tr>
                <tr>
                  <td scope="row">Sample</td>
                  <td colspan="2">Sample</td>
                  <td>Sample</td>
                </tr>
                <tr>
                  <td scope="row">Sample</td>
                  <td colspan="2" class="">
                  Sample
                  </td>
                  <td>Sample</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="fw-bolder">Experiences</p>
          <div class="form-check form-check-inline">
            <label class="form-check-label" for="inlineRadio1">
              Is Expereinced :
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Yes
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3">
              No
            </label>
          </div>

         <div class="row g-3 mt-3">
            <div class="col">
                   <label htmlFor="" className='mb-2'>Organization Name:</label>   
             <input
                type="text"
                class="form-control p-3"
               
              />
            </div>
            <div class="col mt-3">
                <label htmlFor="" className='mb-2'>Designation :</label>
              < input
                type="text"
                class="form-control p-3"
                
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label mt-3">
              Responsibilities
            </label>
            <input
              type="password"
              class="form-control form-control-lg p-4"
              id="exampleInputPassword1"
            />
          </div>

          <div class="d-grid g-3 mt-3">
           

                
           <div class="row g-3 mt-3">
            <div class="col">
                <label className="mb-3">Joining Date(mm/yy)</label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                 aria-label="First name"
              />
            </div>
            <div class="col mt-3">
                <label className="mb-3">Relieving Date(mm/yy)</label>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

            <div>
              <p>Total Experience :</p>
              <p className=" fw-bold">No. of month of Years</p>
            </div>

            <p className="text-primary">
              <i class="bi bi-plus"></i>Add More
            </p>
          </div>
          <div class=" m-auto d-block w-75">
            <table class="table table-bordered table-secondary  text-center " style={{backgroundColor:'lightgray'}} >
              <thead>...</thead>
              <tbody>
                <tr class="bg py-2" >
                  <td >Organization 
                  <p>Name</p></td>
                  <td colspan="2" class="">
                   Designation
                  </td>
                  <td>Responsibilities</td>
                  <td>Total 
                    <p>Expereince</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Sample</td>
                  <td colspan="2">sample</td>
                  <td>Sample</td>
                  <td>Sample</td>
                </tr>
                <tr>
                  <td scope="row">span</td>
                  <td colspan="2" class="">
                        Sample
                  </td>
                  <td>Sample</td>
                  <td>Sample</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fw-bolder">Skills</p>

          <p>Minimum Requirements <span className="text-muted">(Add required experience in particular skills)</span></p>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="">
                Figma:
              </label>
              <input
                id="inputPassword6"
                class="form-control mt-2 p-2"
                placeholder="YY/MM"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="">
               Adobe XD:
              </label>
              <input
               
                id="inputPassword6"
                class="form-control mt-2 p-2"
                aria-labelledby="passwordHelpInline"
                placeholder="YY/MM"
              />
            </div>
          </div>

          <p className="text-primary">
            <i class="bi bi-plus"></i>AddNew
          </p>

          <section className="Questions">
            <p className="fw-bolder mt-5 ">Screening questions</p>

            <p className="">
              <span className="fw-bolder">1</span>
              <span className="mx-2">Why did you apply for this position</span>
            </p>

            <p>Answer :</p>

            <div class="mb-3">
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

           

            <p className="">
              <span className="fw-bolder">2</span>
              <span className="mx-2">What is your expected salary ? </span>
            </p>

            <p>Answer :</p>

            <div class="mb-3">
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

           

            <p className="">
              <span className="fw-bolder">3.</span>
              <span className="mx-2">Are you compatible to relocate ? </span>
            </p>

            <p>Answer :</p>

            <div class="mb-3">
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </section>
          <section className="upload" style={styles}>
            <p className="fw-bolder">Resume Upload</p>

                   
             <button className="btn text-center text-black w-100"style={{fontSize:'10px', backgroundColor:"lightgray"
    }}>Upload from this Device</button>

            <div className="mt-3 mb-4 d-flex justify-content-center">
                <p className="">or</p>

            </div>

            <div className="mt-4 mb-3 d-flex justify-content-center">
             <div class="form-check form-check-inline">
                <input
                class="form-check-input border-black"
                type="checkbox"
                name="inlinecheckOptions "
                id="inlinecheck2"
                value="option2"
                />
                <label class="form-check-label px-3" for="inlineRadio2">
                    Upload from
                    <p>Candidates Profile</p>
                </label>
            </div>

           
          </div>
          
          <p className="fw-bolder">Cover letter Upload</p>
           <button className="btn text-center text-black w-100 shadow"style={{fontSize:'10px', backgroundColor:"lightgray"}}>Upload from this Device</button>
          </section>
          <label htmlFor="" className="mt-3 mb-2">Any special remarks/requests</label>
          <div class="mb-3">
              <input
                class="form-control p-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="button float-end mb-5 mt-4">
                <input type="submit" className="btn btn-outline-secondary mx-3 px-5" value="Cancel"/>
                <input type="submit" className="btn btn-md btn-primary px-5" value="Refer"/>
            </div>

        </form>
      </div>
    </>
  );
}
