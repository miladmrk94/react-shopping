import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useAuthAction, useAuth } from "../Components/Context/AuthProvider";
import { useLocation } from "react-router-dom";

const SignupPage = ({ history }) => {
  console.log(history.location);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  console.log(query.get("redirect"));
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthAction();
  const userData = useAuth();
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(4, "Must be more than 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string().required("phoneNumber is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .required("Password Confirm is required")
      .oneOf([Yup.ref("password"), null], "password must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      const { name, password, phoneNumber, email } = values;

      const registerData = {
        name,
        password,
        phoneNumber,
        email,
      };
      const postData = async () => {
        try {
          const { data } = await axios.post(
            "http://localhost:5000/api/user/register",
            registerData
          );

          console.log(data);
          setAuth(data);
          localStorage.setItem("Auth", JSON.stringify(data));
          history.push(redirect);
        } catch (error) {
          if (error.response.data.message && error.response) {
            toast.error(`${error.response.data.message}`, {
              style: {
                border: "1px solid #EB5353",
                padding: "16px",
                color: "#EB5353",
                backgroundColor: "#ffeded",
              },
            });
          }
        }
      };
      postData();
    },
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (userData) history.push(redirect);
  }, [redirect, userData]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>phoneNumber:</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <p>{formik.errors.phoneNumber}</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>passwordConfirm:</label>
          <input
            type="text"
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <p>{formik.errors.passwordConfirm}</p>
          )}
        </div>
        <button
          style={{ marginTop: "20px" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Sign Up
        </button>
        <Toaster />

        <Link to={`/login?redirect=${redirect}`}>
          <p>Already Login ? GO to Login</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
