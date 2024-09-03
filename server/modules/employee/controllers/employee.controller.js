import Employee from "../../../models/employee.schema.js";
import Employer from "../../../models/employer.schema.js";
import Job from "../../../models/job.schema.js";

// This Fuction For Uploading Education Infos:
export const setEducationInfos = async (req, res) => {
  try {
    const user = req.user;
    const { degree, institution, fieldOfStudy, startDate, endDate, grade } =
      req.body;

    if (!degree || !institution) {
      return res.status(400).json({
        message: "Degree and Institution are required fields.",
      });
    }

    const newEducation = {
      degree,
      institution,
      fieldOfStudy,
      startDate,
      endDate,
      grade,
    };

    Employee.collection.dropIndex("email_1", function (err, result) {
      if (err) {
        console.error("Error dropping index:", err);
      } else {
        console.log("Index dropped:", result);
      }
    });

    let employee = await Employee.findOne({ employeeId: user._id });

    if (!employee) {
      employee = new Employee({
        employeeId: user._id,
        education: [newEducation],
      });
    } else {
      employee.education = employee.education.filter((edu) => {
        return edu.degree && edu.institution;
      });
      employee.education.push(newEducation);
    }
    await employee.save();

    res
      .status(200)
      .json({ message: "Education Details Uploaded", info: employee });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading Experience Infos:
export const setExperienceInfos = async (req, res) => {
  try {
    const user = req.user;
    const { jobTitle, company, startDate, endDate, isWorking, achievements } =
      req.body;

    if (!jobTitle || !company || !startDate) {
      return res.status(400).json({
        message: "JobTitle, Company and StartDate are required fields.",
      });
    }

    const newExperience = {
      jobTitle,
      company,
      startDate,
      endDate,
      isWorking,
      achievements,
    };

    let employee = await Employee.findOne({ employeeId: user._id });

    if (!employee) {
      employee = new Employee({
        employeeId: user._id,
        workExperience: [newExperience],
      });
    } else {
      employee.workExperience = employee.workExperience.filter((exp) => {
        return exp.jobTitle && exp.company && exp.startDate;
      });
      employee.workExperience.push(newExperience);
    }
    await employee.save();

    res.status(200).json({ message: "Work Experience Details Uploaded" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading Project Infos:
export const setProjectInfos = async (req, res) => {
  try {
    const user = req.user;
    const { projectName, startDate, endDate, isWorking, description, skills } =
      req.body;

    if (!projectName) {
      return res
        .status(400)
        .json({ message: "Project Name is required field" });
    }
    const newProject = {
      projectName,
      startDate,
      endDate,
      isWorking,
      description,
      skills,
    };
    let employee = await Employee.findOne({ employeeId: user._id });
    if (!employee) {
      employee = new Employee({
        employeeId: user._id,
        projects: [newProject],
      });
    } else {
      employee.projects.push(newProject);
    }

    await employee.save();

    res.status(200).json({ message: "Project Details Uploaded" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading Certificate Infos:
export const setCertificateInfos = async (req, res) => {
  try {
    const user = req.user;
    const {
      certificateName,
      issuedOrganization,
      startDate,
      endDate,
      description,
    } = req.body;

    console.log("BODY OF CERT:", req.body);
    console.log("Certificate Name:", certificateName);
    console.log("Issuing Organization:", issuedOrganization);

    if (!certificateName || !issuedOrganization) {
      return res.status(400).json({
        message:
          "Certificate name and Issuing Organization are required fields.",
      });
    }

    const newCertificate = {
      certificateName,
      issuedOrganization,
      startDate,
      endDate,
      description,
    };

    let employee = await Employee.findOne({ employeeId: user._id });
    if (!employee) {
      employee = new Employee({
        employeeId: user._id,
        certifications: [newCertificate],
      });
    } else {
      employee.certifications.push(newCertificate);
    }
    await employee.save();

    res.status(200).json({ message: "Certification Details Uploaded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading Preference Infos:
export const setPreferenceInfos = async (req, res) => {
  try {
    const user = req.user;
    const {
      resume,
      currentCTC,
      expectedCTC,
      totalExperience,
      prefferedLocation,
      skills,
      languages,
      aboutYourSelf,
    } = req.body;

    let employee = await Employee.findOne({ employeeId: user._id });
    if (!employee) {
      employee = new Employee({
        employeeId: user._id,
        preference: {
          resume,
          currentCTC,
          expectedCTC,
          totalExperience,
          prefferedLocation,
          skills,
          languages,
          aboutYourSelf,
        },
      });
    } else {
      employee.preference.resume = resume;
      employee.preference.currentCTC = currentCTC;
      employee.preference.expectedCTC = expectedCTC;
      employee.preference.totalExperience = totalExperience;
      employee.preference.prefferedLocation = prefferedLocation;
      employee.preference.skills = skills;
      employee.preference.languages = languages;
      employee.preference.aboutYourSelf = aboutYourSelf;
    }
    await employee.save();

    res.status(200).json({ message: "Preffered Details Uploaded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Searching Jobs From Home:
export const getFindHomeJobs = async (req, res) => {
  try {
    const searchParams = req.body;
    console.log(req.body);

    const limit = 10;

    let query = {};

    searchParams.forEach((param) => {
      if (param.title) {
        query.title = { $regex: param.title, $options: "i" };
      }
      if (param.jobPlace) {
        query.jobPlace = { $regex: param.jobPlace, $options: "i" };
      }
    });

    const jobs = await Job.find(query).populate("owner").limit(limit);

    res.status(200).json({ jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// This Function For Fetching All Jobs:
export const getAllJobs = async (req, res) => {
  try {
    const limit = 10;
    const jobs = await Job.find().populate("owner").limit(limit);

    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// This Function to Get Filtered Jobs:
export const getFilteredJobs = async (req, res) => {
  try {
    const { searchParams } = req.body;
    const limit = 10;

    let query = {};

    searchParams.forEach((param) => {
      if (param.title) {
        query.title = { $regex: param.title, $options: "i" };
      }
      if (param.jobPlace) {
        query.jobPlace = { $regex: param.jobPlace, $options: "i" };
      }
      if (param.category) {
        query.location = param.category;
      }
      if (param.posted) {
        let date = new Date();

        switch (param.posted) {
          case "Last Hour":
            date.setHours(date.getHours() - 1);
            break;

          case "Last 24 Hours":
            date.setDate(date.getDate() - 1);
            break;

          case "Last 7 Days":
            date.setDate(date.getDate() - 7);
            break;

          case "Last 14 Days":
            date.setDate(date.getDate() - 14);
            break;

          case "Last 30 Days":
            date.setDate(date.getDate() - 30);
            break;

          default:
            break;
        }
        query.createdAt = { $gte: date };
      }

      if (
        Array.isArray(param.employmentType) &&
        param.employmentType.length > 0
      ) {
        query.employmentType = param.employmentType;
      }

      if (Array.isArray(param.experience) && param.experience.length > 0) {
        query.experience = param.experience;
      }
    });

    let sort = {};
    if (searchParams.some((param) => param.sort === "newest")) {
      sort.createdAt = -1;
    } else if (searchParams.some((param) => param.sort === "oldest")) {
      sort.createdAt = 1;
    }

    const jobs = await Job.find(query)
      .sort(sort)
      .populate("owner")
      .limit(limit);

    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// This Function to Get Selected Job:
export const getSelectedJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Invalid params" });
    }

    const job = await Job.findById(id).populate("owner");
    res.status(200).json({ job });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function to Get Related Jobs:
export const getRelatedJobs = async (req, res) => {
  try {
    const { id } = req.params;

    const limit = 5;
    let query = {};

    const job = await Job.findById(id);

    if (job.title) {
      query.title = { $regex: job.title, $options: "i" };
    }

    let relatedJobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .populate("owner")
      .limit(limit);

    relatedJobs = relatedJobs.filter(
      (relatedJob) => relatedJob._id.toString() !== id
    );
    console.log(relatedJobs);

    res.status(200).json({ relatedJobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Fetching All Companies:
export const getAllCompanies = async (req, res) => {
  try {
    const limit = 10;
    const companies = await Employer.find().limit(limit);

    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// This Function to Get Filtered Companies:
export const getFilteredCompanies = async (req, res) => {
  try {
    const { searchParams } = req.body;
    const limit = 10;

    let query = {};

    searchParams.forEach((param) => {
      // Company Name Search
      if (param.title) {
        query.companyName = { $regex: param.title, $options: "i" };
      }

      // Company Location Search
      if (param.jobPlace) {
        query.completeAddress = { $regex: param.jobPlace, $options: "i" };
      }
    });

    // Sorting
    let sort = {};
    if (searchParams.some((param) => param.sort === "newest")) {
      sort.createdAt = -1;
    } else if (searchParams.some((param) => param.sort === "oldest")) {
      sort.createdAt = 1;
    }

    const companies = await Employer.find(query).sort(sort).limit(limit);

    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// This Function to Get Selected Company:
export const getSelectedCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Invalid params" });
    }

    const company = await Employer.findById(id);
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function to Get Company Jobs:
export const getCompanyOpenJobs = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Invalid params" });
    }

    const openJobs = await Employer.findById(id)
      .populate({
        path: "totalJobs",
        populate: {
          path: "owner",
        },
      })
      .select("totalJobs");
    res.status(200).json({ openJobs });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Bookmarking Jobs:
export const setJobBookMarked = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!id) {
      return res.status(400).json({ message: "Invalid params" });
    }

    const employee = await Employee.findOne({ employeeId: userId });
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    const existed = employee.bookMarkedJobs.includes(id);
    if (existed) {
      return res.status(400).json({ message: "Job is already bookmarked" });
    }

    employee.bookMarkedJobs.push({ jobId: id, appliedAt: new Date() });
    await employee.save();

    res.status(200).json({ message: "Job is bookmarked successfully." });
  } catch (error) {
    console.log("JBM", error);
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Appliying Jobs:
export const setJobApplied = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!id) {
      return res.status(400).json({ message: "Invalid params" });
    }

    const employee = await Employee.findOne({ employeeId: userId });
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    const job = await Job.findById(id);
    if (!job) {
      return res.status(400).json({ message: "Employee not found" });
    }

    const existedApply = employee.appliedJobs.includes(id);
    if (existedApply) {
      return res.status(400).json({ message: "Job is already applied" });
    }

    const existedApplicant = job.applicants.includes(employee._id);
    if (existedApplicant) {
      return res.status(400).json({ message: "User already applied" });
    }

    employee.appliedJobs.push({ jobId: id, appliedAt: new Date() });
    job.applicants.push(employee._id);

    await employee.save();
    await job.save();

    res.status(200).json({ message: "Job is applied successfully. " });
  } catch (error) {
    console.log("JA>>", error);
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Fetch BookMarked Jobs:
export const getBookMarkedJobs = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "User not found" });
    }

    const employee = await Employee.findOne({ employeeId: userId })
    .populate({
      path: "bookMarkedJobs",
      populate: {
        path: "jobId",
        populate: {
          path: "owner",
        }
      }
    });
    
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    res.status(200).json({ bookMarkedJobs: employee.bookMarkedJobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Fetch Applied Jobs:
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "User not found" });
    }

    const employee = await Employee.findOne({ employeeId: userId })
    .populate({
      path: "appliedJobs",
      populate: {
        path: "jobId",
        populate: {
          path: "owner",
        }
      }
    })
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    res.status(200).json({ appliedJobs: employee.appliedJobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
