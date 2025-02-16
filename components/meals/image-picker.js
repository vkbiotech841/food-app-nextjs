'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange() {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}

            </div>
            <input
                type="file"
                className={classes.input}
                id={name}
                accept="image/png image/jpeg"
                name={name}
                ref={imageInput}
                onChange={handleImageChange}
                required
            />

            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>

    </div>

}