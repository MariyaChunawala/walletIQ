import React, { useRef, useState } from "react";
import { LuTrash, LuUpload, LuUser } from "react-icons/lu";

function ProfilePhotoSelector(props:any){
    const {image, setImage} = props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleImageChange = (event:any) => {
        const file = event.target.files[0];
        if(file){
            setImage(file);
            const preview_url = URL.createObjectURL(file);
            setPreviewUrl(preview_url)
        }
    }

    const onChooseFile = () => {
        if(inputRef.current){
            inputRef.current.click();
        }
    }

    const handleRemoveFile = () => {
        setImage(null);
        setPreviewUrl(null);
    }
    return (
        <div className="flex justify-center cursor-pointer">
            <input 
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />
            {!image ? 
                <div className="w-16 h-16 bg-teal-700 rounded-full -mt-3 flex items-center justify-center relative" onClick={onChooseFile}>
                    <LuUser className="text-4xl"/>
                    <button className="w-6 h-6 text-black bg-white rounded-full flex items-center justify-center absolute top-10 left-11 cursor-pointer"
                        type="button">
                            <LuUpload />
                    </button>
                </div> 
                : <div className="w-16 h-16 bg-teal-700 rounded-full -mt-3 flex items-center justify-center relative">
                    <img 
                        src={previewUrl || ''}
                        className="w-16 h-16 rounded-full"
                        alt="Profile-Photo" 
                    />
                    <button className="w-6 h-6 text-white bg-red-500 rounded-full flex items-center justify-center absolute top-10 left-11 cursor-pointer"
                            onClick={handleRemoveFile}>
                        <LuTrash />
                    </button>
                </div>
            }
        </div>
    )
}

export default ProfilePhotoSelector;