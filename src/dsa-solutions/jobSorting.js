

//  Sample input array
const jobApplications = [
    { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
    { company: "Amazon", role: "Frontend Intern", appliedDate: "2025-03-25" },
    { company: "Meta", role: "Backend Intern", appliedDate: "2025-04-05" },
    { company: "Netflix", role: "UI Intern", appliedDate: "2025-03-30" }
  ];
  
  //  Sorting by appliedDate 
  const sortedJobs = jobApplications.sort(
    (a, b) => new Date(b.appliedDate) - new Date(a.appliedDate)
  );
  
  //  Output result
  console.log("Sorted job applications (latest date first):");
  console.log(sortedJobs);
  