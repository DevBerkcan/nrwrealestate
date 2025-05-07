"use server";

import { z } from "zod";

// Define the validation schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

// Your SheetDB API endpoint

export async function saveToSheetDB(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name"),
      company: formData.get("company") || "", // Ensure optional fields are not undefined
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: formData.get("message"),
    };

    // Validate input
    const validatedData = ContactSchema.parse(data);
    const sheetDBUrl = process.env.SHEETDB_API_URL;
    if (!sheetDBUrl) {
      throw new Error("SheetDB API URL is not defined");
    }
    // Send data to SheetDB
    const response = await fetch(sheetDBUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [validatedData] }),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`SheetDB API Error: ${response.statusText}`);
    }

    return { success: true, message: "Data saved successfully!" };
  } catch (error) {
    console.error("Error saving to SheetDB:", error);
    return { success: false, message: "Error saving data" };
  }
}
