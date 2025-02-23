import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const {user} =useAuth();
  const navigate = useNavigate()
  console.log(id, user);

  const submitJobApplication = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    const jobApplication ={
        job_id: id,
        applicant_email: user.email,
        linkedIn,
        github,
        resume
    }

    fetch('http://localhost:5000/job-applications',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(jobApplication)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if (data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your job application has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myApplications')
        }
    })
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left"></div>
      <div className="card bg-base-100 w-1/2 shadow-2xl">
        <h1 className="text-5xl font-bold">Apply for the Job and Good Luck!</h1>
        <form onSubmit={submitJobApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="url"
              placeholder="LinkedIn URL"
              name="linkedIn"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              type="url"
              placeholder="Github URL"
              name="github"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="url"
              placeholder="Resume URL"
              name="resume"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
