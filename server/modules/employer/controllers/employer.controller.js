import Employer from "../../../models/employer.schema.js";
import Job from "../../../models/job.schema.js";

// This Fuction For Getting Employer Information:
export const getAllInfos = async (req, res) => {
  try {
    const user = req.user;
    const informations = await Employer.findOne({
      employerId: user._id,
    })
      .select("-shortlistedJobs")
      .lean();
    if (informations) {
      return res.status(200).json({ infos: informations });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading Basic Informations:
export const setBasicInfos = async (req, res) => {
  try {
    const {
      companyLogo,
      companyName,
      companyMail,
      companyContact,
      industryType,
    } = req.body;
    const user = req.user;

    if (
      !companyLogo ||
      !companyName ||
      !companyMail ||
      !companyContact ||
      !industryType
    ) {
      return res
        .status(400)
        .json({ message: "Information values are not fullfilled" });
    }

    let employer = await Employer.findOne({ employerId: user._id });

    if (!employer) {
      employer = new Employer({
        employerId: user._id,
        companyLogo,
        companyName,
        companyMail,
        companyContact,
        industryType,
      });
    } else {
      employer.companyLogo = companyLogo;
      employer.companyName = companyName;
      employer.companyMail = companyMail;
      employer.companyContact = companyContact;
      employer.industryType = industryType;
    }
    await employer.save();

    res.status(200).json({
      info: employer,
      message: "Basic information successfully uploaded",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading or Updating Employer Informations:
export const setProfileInofos = async (req, res) => {
  try {
    const {
      companyLogo,
      companyCoverImg,
      companyName,
      companyMail,
      companyContact,
      companyWebSite,
      companyEst,
      companyTeamSize,
      aboutCompany,
    } = req.body;
    console.log(companyLogo);
    
    const user = req.user;

    if (
      !companyLogo ||
      !companyCoverImg ||
      !companyName ||
      !companyMail ||
      !companyContact ||
      !companyWebSite ||
      !companyEst ||
      !companyTeamSize ||
      !aboutCompany
    ) {
      return res.status(400).json({
        message: "Please fill informations",
      });
    }

    let employer = await Employer.findOne({ employerId: user._id });

    if (!employer) {
      employer = new Employer({
        employerId: user._id,
        companyLogo,
        companyCoverImg,
        companyName,
        companyMail,
        companyContact,
        companyWebSite,
        founded: companyEst,
        companyTeamSize,
        aboutCompany,
      });
    } else {
      employer.companyLogo = companyLogo;
      employer.companyCoverImg = companyCoverImg;
      employer.companyName = companyName;
      employer.companyMail = companyMail;
      employer.companyContact = companyContact;
      employer.companyWebSite = companyWebSite;
      employer.companyEst = companyEst;
      employer.companyTeamSize = companyTeamSize;
      employer.aboutCompany = aboutCompany;
    }
    await employer.save();

    res.status(200).json({
      info: employer,
      message: "Successfully updated profile informations",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// This Function For Uploading or Updating Employer Social Profile Informations:
export const setSocialProfileInfos = async (req, res) => {
  try {
    const { facebook, twitter, instagram, linkedin } = req.body;
    const user = req.user;

    if (!facebook || !twitter || !instagram || !linkedin) {
      return res.status(400).json({ message: "Please fill informations" });
    }

    let employer = await Employer.findOne({ employerId: user._id });

    if (!employer) {
      employer = new Employer({
        "socialMedia.facebook": facebook,
        "socialMedia.twitter": twitter,
        "socialMedia.instagram": instagram,
        "socialMedia.linkedin": linkedin,
      });
    } else {
      employer.socialMedia.facebook = facebook;
      employer.socialMedia.twitter = twitter;
      employer.socialMedia.instagram = instagram;
      employer.socialMedia.linkedin = linkedin;
    }
    await employer.save();

    res.status(200).json({
      info: employer,
      message: "Successfully updated social profiles",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading or Updating Employer Contact Informations:
export const setContactInfos = async (req, res) => {
  try {
    const { street, city, state, zip, country, fullAddress } = req.body;
    const user = req.user;

    if (!street || !city || !state || !zip || !country || !fullAddress) {
      return res.status(400).json({ message: "Please fill informations" });
    }

    let employer = await Employer.findOne({ employerId: user._id });

    if (!employer) {
      employer = new Employer({
        employerId: user._id,
        "companyAddress.street": street,
        "companyAddress.city": city,
        "companyAddress.state": state,
        "companyAddress.zip": zip,
        "companyAddress.country": country,
        completeAddress: fullAddress,
      });
    } else {
      employer.companyAddress.street = street;
      employer.companyAddress.city = city;
      employer.companyAddress.state = state;
      employer.companyAddress.zip = zip;
      employer.companyAddress.country = country;
      employer.completeAddress = fullAddress;
    }
    await employer.save();

    res.status(200).json({
      info: employer,
      message: "Successfully Updated contact informations",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Uploading New Job Post Infos:
export const postNewJob = async (req, res) => {
  try {
    const user = req.user._id;
    const {
      title,
      description,
      email,
      specialism,
      industry,
      jobType,
      employmentType,
      experience,
      qualification,
      gender,
      location,
      offeredSalary,
      jobPlace,
      deadline,
    } = req.body; 
    
    if (
      !title ||
      !description ||
      !email ||
      !specialism ||
      !industry ||
      !jobType ||
      !employmentType ||
      !experience ||
      !qualification ||
      !gender ||
      !location ||
      !offeredSalary ||
      !jobPlace ||
      !deadline
    ) {
      return res.status(400).json({ message: "Please fill field" });
    }
    let employer = await Employer.findOne({ employerId: user });
    
    const newJob = new Job({
      owner: employer._id,
      title,
      description,
      email,
      specialism,
      industry,
      jobType,
      employmentType,
      experience,
      qualification,
      gender,
      location,
      offeredSalary,
      jobPlace,
      deadline,
    });
    await newJob.save();
    
    employer.totalJobs.push(newJob._id);
  
    await employer.save();
    
    res.status(200).json({info: newJob, message: "Job Infos Posted Successfully"})
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Server error" });
  }
};

// This Function For Fetching All Posted Jobs:
export const getAllPostedJobs = async (req, res) => {
  try {
    const user = req.user._id;
    const jobs = await Job.find({owner: user});
    if (!jobs) {
      return res.status(400).json({message: "User haven't posted jobs yet."})
    }
    res.status(200).json({infos: jobs});
  } catch (error) {
    res.status(500).json({message: "Server error"})
  }
}
