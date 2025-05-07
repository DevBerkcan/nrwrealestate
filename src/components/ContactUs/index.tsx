"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { sendContactEmail } from "@/app/actions/sendContactEmail"; // Updated import

interface ContactUSProps {
  imageSrc?: string;
  title?: string;
  subTitle?: string;
  imageWidth: number;
  imageHeight: number;
  alignCenter?: boolean;
}

const ContactUS: React.FC<ContactUSProps> = ({
  title = "Kontakt",
  subTitle = "Kontaktieren Sie uns gerne, wir freuen uns auf den Austausch!",
  imageSrc,
  imageWidth,
  imageHeight,
  alignCenter = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSuccess(true);
        // Reset the form
        e.currentTarget.reset();
      } else {
        setError(
          result.message ||
            "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut."
        );
      }
    } catch (err) {
      setError(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto py-10 flex flex-row items-center justify-center gap-[6vw]">
      {/* Contact Form Section */}
      <div
        className={`flex flex-col  ${
          alignCenter && "max-w-[800px]"
        } flex-1 justify-between`}
      >
        <div>
          <h2
            className={`font-merriweather ${
              alignCenter && "text-center"
            } font-normal text-[#1a1a1a] text-[40px] leading-tight mb-3 md:mb-4`}
          >
            {title}
          </h2>
          <p
            className={`font-gothic mb-8 ${
              alignCenter && "text-center"
            } font-normal text-[#1a1a1a] text-normal leading-relaxed`}
          >
            {subTitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* <Logo className="w-[156px] h-[110px] -my-4 ml-auto mb-3" /> */}

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-4 rounded">
              Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen
              melden.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 mb-4 rounded">
              {error}
            </div>
          )}

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="name"
                className="h-12 md:h-[58px]"
                placeholder="Name"
                required
              />
              <Input
                name="company"
                className="h-12 md:h-[58px]"
                placeholder="Firma"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="email"
                type="email"
                className="h-12 md:h-[58px]"
                placeholder="E-Mail"
                required
              />
              <Input
                name="phone"
                className="h-12 md:h-[58px]"
                placeholder="Telefon"
              />
            </div>

            <Textarea
              name="message"
              className="h-40 md:h-[170px]"
              placeholder="Beschreibung"
              required
              maxLength={400}
            />
            <div className={`  ${alignCenter && " flex justify-center"}`}>
              <Button
                type="submit"
                disabled={loading}
                className={`w-[194px] h-[71px] text-[18px] font-gothic rounded-none m-auto bg-[#1b944a]`}
              >
                {loading ? "Senden..." : "Nachricht senden"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      {imageSrc && (
        <div
          className="hidden relative  [@media(min-width:1440px)]:block m-auto lg:m-0"
          style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
        >
          <Image
            className="w-full h-full object-cover shadow-md"
            alt="Kontakt Bild"
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
    </section>
  );
};

export default ContactUS;
