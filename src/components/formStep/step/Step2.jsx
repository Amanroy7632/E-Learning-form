import Heading from "../../heading/Heading";
import Form from "../../form/Form";
export const Step2 = () => {
    const formData2 = [
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 1,
        label: {
          title: "Learning Specific skills to advance my career",
        },
        input: {
          value: "Learning Specific skills to advance my career",
          placeholder: "",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 2,
        label: {
          title: "Explorating new topics I'm intrested in",
        },
        input: {
          value: "Explorating new topics I'm intrested in",
          placeholder: "",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 3,
        label: {
          title: "Refreshing my math foundations",
        },
        input: {
          value: "Refreshing my math foundations",
          placeholder: "",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 4,
        label: {
          title: "Exercising my brain to stay sharp",
        },
        input: {
          value: "Exercising my brain to stay sharp",
          placeholder: "",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 5,
        label: {
          title: "Something else",
        },
        input: {
          value: "Something else",
          placeholder: "",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 6,
        label: {
          title: "Other",
        },
        input: {
          value: "Other",
          placeholder: "",
        },
      },
    ];
    const headingData = {
      title: "Which are you most intrested in ?",
      description:
        "Choose just one. This will helps us get you started (but won't limit your experience)",
    };
    return (
      <>
        <Heading data={headingData} />
        <Form formData={formData2} borderColor={"border-green-400"} />
      </>
    );
  };