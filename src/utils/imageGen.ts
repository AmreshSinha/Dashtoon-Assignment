import axios from "axios";

export default async function imageGen(query: string) {
  const data = {
    inputs: query,
  };

  const response = await fetch(
    "https://api-inference.huggingface.co/models/ogkalu/Comic-Diffusion",
    {
      headers: {
        // Accept: "image/png",
        Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_KEY}`,
        // "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const blob = await response.blob();
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = function () {
        onSuccess(this.result);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      onError(e);
    }
  });
}
