import React from "react";

const AddJob = () => {
  const handleAddJob = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("form Data", formData);
    console.log("form Data Entries", formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log("initial Data", initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log('New Job1:', min, max, currency, newJob)
    newJob.salaryRange = { min, max, currency };
    console.log('New Job2:', newJob)
  };

  return (
    <div>
      <h1 className="text-3xl">Post a new job</h1>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select name="jobType"className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Pick a job type
              </option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
            </select>
          </div>
          {/* Job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category"className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Pick a job category
              </option>
              <option>Engineering</option>
              <option>Finance</option>
              <option>Logistics</option>
            </select>
          </div>
          {/* Application Dead Line */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Application Deadline"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Salary Range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Minimum"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Maximum"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled selected>
                Pick a currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="Job Description"
            id=""
            required
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="requirements"
            placeholder="Put each requirement in a new line"
            required
          ></textarea>
        </div>
        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="responsibilities"
            placeholder="Write each responsibility in a new line"
            required
          ></textarea>
        </div>
        {/* Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input
            type="text"
            name="status"
            placeholder="Status"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="email"
            name="hr_email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company Logo*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company Logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* Submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
