import Heading from "../../heading/Heading";
import Form from "../../form/Form";
export  const Step1 = () => {
    const formData = [
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 1,
        label: {
          title: "Student",
        },
        input: {
          value: "Student",
          placeholder: "or soon to be enrolled",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 2,
        label: {
          title: "Professional",
        },
        input: {
          value: "Professional",
          placeholder: "pursuing a career",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 3,
        label: {
          title: "Parent",
        },
        input: {
          value: "Parent",
          placeholder: "of a school-age-child",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 4,
        label: {
          title: "Lifelong learner",
        },
        input: {
          value: "Lifelong learner",
          placeholder: "",
        },
      },
      {
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
        id: 5,
        label: {
          title: "Teacher",
        },
        input: {
          value: "Teacher",
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
      title: " Which describes you best?",
      description: "This will help us personalize your experience.",
    };
    return (
      <>
        <Heading data={headingData} />
        <Form formData={formData} borderColor={"border-blue-400"} />
      </>
    );
  };