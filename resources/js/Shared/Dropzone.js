/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

export default function (props) {
    const [files, setFiles] = useState([]);
    const { className, name, label, accept, errors = [], onChange, multiple, value } = props

    const { getRootProps, getInputProps, open } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file),
            })));
            onChange(acceptedFiles[0], name);
        },
    });

    const remove = file => {
        const newFiles = [...files]; // make a var for the new array
        newFiles.splice(file, 1); // remove the file from the array
        setFiles(newFiles); // update the state
        onChange(null);
    };

    function handleFileChange(e) {
        const inputFiles = multiple ? e.target.files : e.target.files[0]
        const newFiles = [...files];
        newFiles.push(inputFiles)
        setFiles(newFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
        })))
        onChange(inputFiles, e.target.name)
    }

    useEffect(() => {
        console.log(value);
        if (value === '' || typeof (value) !== 'string') return;
        const ext = value.split('?')[0].split('#')[0].split('.').pop();
        fetch(value)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                // Here's where you get access to the blob
                // And you can use it for whatever you want
                // Like calling ref().put(blob)

                // Here, I use it to make an image appear on the page
                const objectURL = URL.createObjectURL(blob);
                const nfile = new File([blob], `image.${ext}`, { type: blob.type })
                const newFiles = [];
                newFiles.push(nfile)
                setFiles(newFiles.map(file => Object.assign(file, {
                    preview: objectURL,
                })))
                // console.log(file)
            });
    }, [value])

    const thumbs = files.map((file, i) => (
        <div className="dropzone-thumbnail" key={file.name}>
            <div className="dropzone-thumbnail-inner">
                <div className="dropzone-thumbnail-image">
                    <img src={file.preview} alt={file.name} />
                    <svg onClick={() => remove(i)} className="dropzone-thumbnail-close" width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" fill="#DBDBDB" />
                        <path d="M8 4L4 8" stroke="black" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 4L8 8" stroke="black" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>{file.name}</div>
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        // console.log(files);
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className={className}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                    :
                </label>
            )}
            <div
                {...getRootProps()}
                className={`dropzone ${errors.length && 'error'}`}
            >
                <input
                    {...getInputProps()}
                    id={name}
                    name={name}
                    accept={accept}
                    type="file"
                    // value={values}
                    // className=""
                    onChange={handleFileChange}
                    multiple={multiple}
                />
                <p>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 3H4.16667C3.24619 3 2.5 3.74619 2.5 4.66667V16.3333C2.5 17.2538 3.24619 18 4.16667 18H15.8333C16.7538 18 17.5 17.2538 17.5 16.3333V4.66667C17.5 3.74619 16.7538 3 15.8333 3Z" stroke="#919191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.08325 8.83331C7.77361 8.83331 8.33325 8.27367 8.33325 7.58331C8.33325 6.89296 7.77361 6.33331 7.08325 6.33331C6.3929 6.33331 5.83325 6.89296 5.83325 7.58331C5.83325 8.27367 6.3929 8.83331 7.08325 8.83331Z" stroke="#919191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5001 13L13.3334 8.83331L4.16675 18" stroke="#919191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Drag & drop or
                    {' '}
                    <button type="button" onClick={open} className="browse-image">Browse</button>
                </p>
                {thumbs}
            </div>
        </div>
    );
}
