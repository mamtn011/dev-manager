import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// schema for yap validation
const schema = yup.object({
  firstName: yup
    .string()
    .matches(/^[a-z\s]+$/gi, { message: "Name must to be a string" })
    .required("First name is required")
    .min(3, "First name must to be 3 or more in length"),
  lastName: yup
    .string()
    .matches(/^[a-z\s]+$/gi, { message: "Name must to be a string" })
    .required("Last name is required")
    .min(3, "Last name must to be 3 or more in length"),
  email: yup
    .string()
    .required("Email must required")
    .email("Enter a valid email"),
  designation: yup
    .string()
    .matches(/^[a-z\s]+$/gi, { message: "Designation must to be a string" })
    .required("Designation is required")
    .min(3, "Designation must to be 3 or more in length"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "Bio must to be 10 or more in length")
    .max(100, "Bio must not to be 100 or more in length"),
  photo: yup
    .string()
    .required("Image url is required")
    .url("Enter a valid url"),
});

export default function AddProfileYupValidation({ profile }) {
  const { addProfile, editProfile } = useContext(ProfileContext);

  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    // for yup validation we have to pass this object in useForm hook
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  // reset after successfully submit
  useEffect(() => {
    isSubmitSuccessful &&
      reset({
        firstName: "",
        lastName: "",
        designation: "",
        email: "",
        dateOfBirth: new Date(),
        gender: "Male",
        bio: "",
        photo: "",
      });
  }, [isSubmitSuccessful]);

  // form submit
  const onSubmit = (data) => {
    const id = profile?.id || "";

    if (id) {
      editProfile(data, id);
      toast.success("Profile updated successfully!");
    } else {
      // adding new profile
      addProfile(data);
      //show flash message
      toast.success("Profile added successfully!");
    }
    navigate("/all-profiles");
  };

  const defaultValue = {
    firstName: profile?.firstName || "",
    lastName: profile?.lastName || "",
    designation: profile?.designation || "",
    email: profile?.email || "",
    dateOfBirth: profile?.dateOfBirth || new Date(),
    gender: profile?.gender || "Male",
    bio: profile?.bio || "",
    photo:
      profile?.photo ||
      "https://images.unsplash.com/photo-1556157382-97eda2d62296",
  };

  const {
    firstName,
    lastName,
    designation,
    email,
    dateOfBirth,
    gender,
    bio,
    photo,
  } = defaultValue;
  const [birthYear, setBirthYear] = useState(
    dateOfBirth ? dateOfBirth : new Date()
  );
  // this is for date of birth (week-7.1.4)
  useEffect(() => {
    setValue("dateOfBirth", birthYear);
  }, [birthYear]);

  return (
    <>
      <h3 className="text-center">
        {profile?.id ? "Edit Profile" : "Add New Profile"}
      </h3>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "600px", margin: "auto", padding: "20px 0" }}
      >
        {/* first name */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" className="input-label">
              First Name
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              id="firstName"
              defaultValue={firstName}
              // react-hook-form
              {...register("firstName")}
              className="input-text"
              // isInvalid from react bootstrap
              isInvalid={errors?.firstName}
              placeholder="Enter First Name"
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {/* showing error by optional chaining / (errors from useForm hook) */}
              {errors?.firstName?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/* last name */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="lastName" className="input-label">
              Last Name
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              id="lastName"
              defaultValue={lastName}
              // react-hook-form
              {...register("lastName")}
              className="input-text"
              // isInvalid from react bootstrap
              isInvalid={errors?.lastName}
              placeholder="Enter Last Name"
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {/* showing error by optional chaining / (errors from useForm hook) */}
              {errors?.lastName?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/* designation */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="designation" className="input-label">
              Profession
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              id="designation"
              defaultValue={designation}
              // react-hook-form
              {...register("designation")}
              className="input-text"
              // isInvalid from react bootstrap
              isInvalid={errors?.designation}
              placeholder="Enter Your Profession"
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {/* showing error by optional chaining / (errors from useForm hook) */}
              {errors?.designation?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/* image link */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="photo" className="input-label">
              Image Link
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              id="photo"
              defaultValue={photo}
              // react-hook-form
              {...register("photo")}
              className="input-text"
              // isInvalid from react bootstrap
              isInvalid={errors?.photo}
              placeholder="Enter Your Image Link"
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {/* showing error by optional chaining / (errors from useForm hook) */}
              {errors?.photo?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/* email */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="email" className="input-label">
              Email
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="email"
              id="email"
              defaultValue={email}
              // react-hook-form
              {...register("email")}
              // isInvalid from react bootstrap
              isInvalid={errors?.email}
              className="input-text"
              placeholder="Enter Your Email"
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {/* showing error by optional chaining / (errors from useForm hook) */}
              {errors?.email?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/* dateOfBirth */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" className="input-label">
              Date of Birth
            </Form.Label>
          </Col>
          <Col sm={9}>
            {/* react date picker...................... */}
            <DatePicker
              selected={birthYear}
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Enter your Date of Birth"
              maxDate={new Date()}
              onChange={(date) => setBirthYear(date)}
              showYearDropdown
            />
          </Col>
        </Form.Group>
        {/* gender */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label className="input-label">Gender</Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              value="Male"
              defaultChecked={gender === "Male"}
              label="Male"
              {...register("gender")}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              value="Female"
              defaultChecked={gender === "Female"}
              label="Female"
              {...register("gender")}
            />
          </Col>
        </Form.Group>

        {/* bio */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="bio" className="input-label">
              Bio
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              type="text"
              id="bio"
              defaultValue={bio}
              // react-hook-form
              {...register("bio")}
              // isInvalid from react bootstrap
              isInvalid={errors?.bio}
              className="input-text"
              placeholder="Write somthing about you!"
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {/* showing error by optional chaining / (errors from useForm hook) */}
              {errors?.bio?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}></Col>
          <Col sm={9}>
            <Button
              variant={profile?.id ? "warning" : "primary"}
              size="md"
              type="submit"
              disabled={isSubmitting ? "disabled" : ""}
            >
              {profile?.id ? "Update" : "Add Profile"}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}
