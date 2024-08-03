export const uploadImgFile = (file, maxSize) => {
  return new Promise((resolve, reject) => {
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxSize) {
        reject(`File must be less than ${maxSize}mb`);
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = () => {
        reject("Error on reading file");
      };
    } else {
      reject("It must be a image file");
    }
  });
};

export const uploadFile = (file, maxSize) => {
  return new Promise((resolve, reject) => {
    const validFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (file && validFileTypes.includes(file.type)) {
      if (file.size > maxSize) {
        reject("File must be less than 5 mb");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = () => {
        reject("Error on reading file");
      };
    } else {
      reject("Invalid file type. Only PDF, DOC, and DOCX files are allowed.");
    }
  });
};
