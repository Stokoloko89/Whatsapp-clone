import * as React from "react";
import { PlasmicUploadAvatar } from "./plasmic/whatsapp_chat_app/PlasmicUploadAvatar";
import { supabase } from "../utils/supabaseClient";

function UploadAvatar_({ onUpload, url, loading, ...props }, ref) {
  const [uploadError, setUploadError] = React.useState("");
  const [uploading, setUploading] = React.useState(false);
  const [avatarUrl, setAvatarUrl] = React.useState(null);

  React.useEffect(() => {
    setAvatarUrl(url);
  }, [url]);

  React.useEffect(() => {
    setUploading(loading);
  }, [loading]);

  const handleUploadImage = async (e) => {
    try {
      setUploading(true);
      setUploadError("");
      if (!e.target.files || !e.target.files.length) {
        setUploadError("You must select an image to upload.");
        return;
      }

      // this is used to create a random file name for each image that will be uploaded to Supabase
      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);
      if (error) {
        setUploadError(error?.message);
        return;
      }

      let { publicURL, error: publicURLError } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);
      if (publicURLError) {
        setUploadError(publicURLError?.message);
        return;
      }

      setAvatarUrl(publicURL);
      onUpload(publicURL);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <PlasmicUploadAvatar
      root={{
        wrapChildren: (children) => {
          return (
            <label htmlFor="userProfileAvatar">
              {children}
              <input
                id="userProfileAvatar"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                disabled={uploading}
                onChange={handleUploadImage}
                value={""}
              />
            </label>
          );
        },
      }}
      {...props}
      avatar={{
        imageUrl: avatarUrl,
      }}
      isError={!!uploadError}
      errorMessage={uploadError}
      isLoading={uploading}
    />
  );
}

const UploadAvatar = React.forwardRef(UploadAvatar_);

export default UploadAvatar;
