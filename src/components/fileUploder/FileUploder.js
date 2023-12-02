import { useState } from "react";

const FileUploader = ({ memeTypes, nbFiles, maxSize }) => {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setFiles(filesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (files.length > nbFiles) {
      errors.push(`You can't upload more than ${nbFiles} files`);
    }
    files.forEach((file) => {
      if (!memeTypes.includes(file.type)) {
        errors.push(`File ${file.name} is not a meme type`);
      }
      if (file.size > maxSize * 1000) {
        errors.push(`File ${file.name} is too big`);
      }
    });
    setErrors(errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept={memeTypes.join(",")}
        />
        <button type="submit">Submit</button>
      </form>
      {errors.map((error) => (
        <p key={error}>{error}</p>
      ))}

      {files.map((file) => (
        <p key={file.name}>{file.name}</p>
      ))}
    </div>
  );
};

export default FileUploader;
