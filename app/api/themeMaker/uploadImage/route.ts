import { getSubFromSessionToken } from "@/lib/dataLayer/server/accountStateManager";
import { uploadThemeImageToServer } from "@/lib/dataLayer/server/themeServerManager";
import { analyzeImageColor } from "@/lib/imageColorAnalysisTool";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const tokenUserSub = getSubFromSessionToken(
      cookies().get("session_token")?.value || ""
    );

    if (tokenUserSub === null) {
      throw new Error("No user is uploading theme images.");
    }

    const formData = await req.formData();

    const index = formData.get("index");
    let suffix = formData.get("suffix");
    const file = formData.get("file");

    if (index === null || suffix === null || file === null) {
      throw new Error("Upload information not complete");
    }

    suffix = (suffix as string).toLowerCase();
    const formatMap = {
      jpg: "jpeg",
      jpeg: "jpeg",
      png: "png",
      webp: "webp",
      svg: "svg",
    };
    suffix = formatMap[suffix as AllowedImageFormat];

    if (!suffix) {
      throw new Error("Invalid file suffix");
    }

    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    const svgMaxSize = 2 * 1024 * 1024;
    if (
      (file as File).size > maxSize ||
      ((file as File).size > svgMaxSize && suffix === "svg")
    ) {
      throw new Error("File size exceeds the 5MB limit");
    }

    const uploadResult = await uploadThemeImageToServer(
      `account/themeImages/${tokenUserSub}/bg-${index}`,
      suffix as AllowedImageFormat,
      (file as File).stream()
    );

    if (!uploadResult) {
      throw new Error("Failed to upload image to server");
    }

    const colorArray = await analyzeImageColor(tokenUserSub, index as string);

    return new Response(
      JSON.stringify({ success: true, colorArray: colorArray }),
      {
        status: 200,
      }
    );
  } catch (e) {
    console.error("Error in uploading theme image:", e);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}