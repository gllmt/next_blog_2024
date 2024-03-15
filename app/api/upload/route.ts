import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const POST = async (req: Request) => {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ message: "No file found" }, { status: 500 }); 
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // const imageUrl = `/images/${Math.floor(Math.random() * 10001)}_${(new Date().toJSON().slice(0,10))}_${file.name}`;
  const imageUrl = `/images/${new Date().getTime()}_${file.name}`;
  const imagePath = path.join(process.cwd(), `/public${imageUrl}`);

  try {
    await writeFile(imagePath, buffer);
    return NextResponse.json(imageUrl, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong !" }, { status: 500 }); 
  }
};